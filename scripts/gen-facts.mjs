// Generates src/data/facts.json from the GitHub releases of svalboard/qmk and
// svalboard/keybard, so the reference pages never drift from what shipped.
//
//   node scripts/gen-facts.mjs        (GITHUB_TOKEN is optional)
//
// Firmware: the GitHub "latest" release (stable) and the newest vNext
// prerelease. For each, the firmware targets are read from the release's
// .uf2 file names, and each target's USB IDs from keyboard.json (pid) and the
// info.json files above it (vid) at that release's tag.
// The output has no timestamp, so it only changes when the facts change.
import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const QMK = 'svalboard/qmk';
const KEYBARD = 'svalboard/keybard';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'facts.json');

// Display order and names. PMW3360 is deprecated and always last.
const MODULES = {
	base: { order: 1, label: 'Base board' },
	trackpoint: { order: 2, label: 'TrackPoint' },
	pmw3389: { order: 3, label: 'PMW3389 trackball' },
	azoteq: { order: 4, label: 'Azoteq touchpad' },
	pmw3360: { order: 9, label: 'PMW3360 trackball', deprecated: true },
};

const headers = { 'User-Agent': 'svalboard-docs-facts', Accept: 'application/vnd.github+json' };
if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

async function api(path) {
	const res = await fetch(`https://api.github.com${path}`, { headers });
	if (!res.ok) throw new Error(`GET ${path}: ${res.status} ${await res.text()}`);
	return res.json();
}

// Returns parsed JSON, or null when the file does not exist at that ref.
async function raw(repo, ref, path) {
	const url = `https://raw.githubusercontent.com/${repo}/${encodeURIComponent(ref)}/${path}`;
	const res = await fetch(url, { headers: { 'User-Agent': headers['User-Agent'] } });
	if (res.status === 404) return null;
	if (!res.ok) throw new Error(`GET ${url}: ${res.status}`);
	return res.json();
}

const hex = (s) => (s ? String(s).replace(/^0x/i, '').toLowerCase().padStart(4, '0') : null);
const day = (iso) => iso.slice(0, 10);

// svalboard_trackball_pmw3389_left_sval_vLaunch2.uf2
//   -> { keyboard: 'svalboard/trackball/pmw3389/left', keymap: 'sval' }
function parseAsset(name, tag) {
	const m = name.match(new RegExp(`^(svalboard(?:_[a-z0-9]+)*)_([a-z0-9]+)_${tag.replace(/[.]/g, '\\.')}\\.uf2$`, 'i'));
	return m ? { keyboard: m[1].replace(/_/g, '/'), keymap: m[2] } : null;
}

async function usbIds(tag, keyboard) {
	const parts = keyboard.split('/');
	let vid = null;
	let pid = null;
	// info.json from the top down, then keyboard.json; deeper files win.
	for (let i = 1; i <= parts.length; i++) {
		const dir = `keyboards/${parts.slice(0, i).join('/')}`;
		for (const file of ['info.json', ...(i === parts.length ? ['keyboard.json'] : [])]) {
			const usb = (await raw(QMK, tag, `${dir}/${file}`))?.usb;
			if (usb?.vid) vid = usb.vid;
			if (usb?.pid) pid = usb.pid;
		}
	}
	if (!vid || !pid) throw new Error(`${tag} ${keyboard}: no USB vid/pid found`);
	return { vid: hex(vid), pid: hex(pid) };
}

async function firmware(rel) {
	const assets = rel.assets.map((a) => a.name).sort();
	const targets = new Map();
	for (const name of assets) {
		const t = parseAsset(name, rel.tag_name);
		if (!t) continue;
		const cur = targets.get(t.keyboard) ?? { keyboard: t.keyboard, keymaps: [] };
		cur.keymaps.push(t.keymap);
		targets.set(t.keyboard, cur);
	}
	if (!targets.size) throw new Error(`${rel.tag_name}: no .uf2 firmware assets`);

	const vids = new Set();
	const modules = new Map();
	for (const t of targets.values()) {
		const { vid, pid } = await usbIds(rel.tag_name, t.keyboard);
		vids.add(vid);
		const parts = t.keyboard.split('/');
		const half = parts.at(-1);
		if (half !== 'left' && half !== 'right') throw new Error(`${t.keyboard}: unknown half`);
		const key = parts.length === 2 ? 'base' : parts.at(-2);
		const info = MODULES[key];
		if (!info) throw new Error(`${t.keyboard}: unknown module "${key}"; add it to MODULES`);
		const row = modules.get(key) ?? { module: key, label: info.label, deprecated: !!info.deprecated, left: null, right: null };
		row[half] = { keyboard: t.keyboard, pid, keymaps: t.keymaps.sort() };
		modules.set(key, row);
	}
	if (vids.size !== 1) throw new Error(`${rel.tag_name}: more than one vendor ID: ${[...vids]}`);

	return {
		tag: rel.tag_name,
		name: rel.name || rel.tag_name,
		date: day(rel.published_at),
		url: rel.html_url,
		prerelease: rel.prerelease,
		vid: [...vids][0],
		// true when one firmware per half covers every module (vNext and later)
		singleImage: modules.size === 1 && modules.has('base'),
		modules: [...modules.values()].sort((a, b) => MODULES[a.module].order - MODULES[b.module].order),
		assets,
	};
}

const stable = await api(`/repos/${QMK}/releases/latest`);
const all = await api(`/repos/${QMK}/releases?per_page=100`);
const next = all
	.filter((r) => !r.draft && r.prerelease && /^vNext/i.test(r.tag_name))
	.sort((a, b) => b.published_at.localeCompare(a.published_at))[0];
const host = await api(`/repos/${KEYBARD}/releases/latest`);

const facts = {
	generatedBy: 'scripts/gen-facts.mjs',
	firmware: {
		stable: await firmware(stable),
		next: next ? await firmware(next) : null,
	},
	keybardHost: {
		tag: host.tag_name,
		name: host.name || host.tag_name,
		date: day(host.published_at),
		url: host.html_url,
		assets: host.assets.map((a) => a.name).sort(),
	},
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(facts, null, '\t') + '\n');
console.log(`wrote ${OUT}: firmware ${facts.firmware.stable.tag}` +
	`${facts.firmware.next ? ` + ${facts.firmware.next.tag}` : ''}, Keybard Overlay ${facts.keybardHost.tag}`);
