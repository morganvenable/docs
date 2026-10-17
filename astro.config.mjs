// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';
import { mkdirSync, writeFileSync } from 'node:fs';
import { spawn } from 'node:child_process';
import { join } from 'node:path';

// Local review only: with DOCS_NOTES_DIR set, `astro dev` accepts owner notes at
// POST /__notes and saves each one as a JSON file there. Never part of a build.
const notesInbox = () => ({
	name: 'svalboard-notes-inbox',
	apply: 'serve',
	configureServer(server) {
		const dir = process.env.DOCS_NOTES_DIR;
		if (!dir) return;
		mkdirSync(dir, { recursive: true });
		// DOCS_NOTES_KEY (e.g. F23): POST /__notes/key presses that key system-wide, to
		// start or stop the owner's dictation app. Windows only; one PowerShell kept warm.
		const vk = { F13: 0x7c, F14: 0x7d, F15: 0x7e, F16: 0x7f, F17: 0x80, F18: 0x81, F19: 0x82, F20: 0x83, F21: 0x84, F22: 0x85, F23: 0x86, F24: 0x87 }[process.env.DOCS_NOTES_KEY ?? ''];
		let keyer = null;
		const press = () => {
			if (!vk || process.platform !== 'win32') return false;
			if (!keyer || keyer.exitCode !== null) {
				keyer = spawn('powershell', ['-NoProfile', '-NoLogo', '-Command', '-'], { stdio: ['pipe', 'ignore', 'ignore'] });
				keyer.stdin.write(`Add-Type -Name K -Namespace N -MemberDefinition '[DllImport("user32.dll")] public static extern void keybd_event(byte v, byte s, uint f, System.UIntPtr e);'
`);
			}
			keyer.stdin.write(`[N.K]::keybd_event(${vk},0,0,[UIntPtr]::Zero); Start-Sleep -Milliseconds 30; [N.K]::keybd_event(${vk},0,2,[UIntPtr]::Zero)
`);
			return true;
		};
		server.middlewares.use('/__notes', (req, res) => {
			if (req.method !== 'POST') return void res.writeHead(405).end();
			if (req.url === '/key') return void res.writeHead(press() ? 204 : 501).end();
			if (req.url === '/state') {
				// Which page has a note open, so edits to that page can wait (state.json beside the inbox).
				let body = '';
				req.on('data', (c) => { body += c; });
				req.on('end', () => {
					try {
						const { open, path } = JSON.parse(body);
						writeFileSync(join(dir, '..', 'state.json'), JSON.stringify({ open: !!open, path: String(path), at: new Date().toISOString() }));
					} catch {}
					res.writeHead(204).end();
				});
				return;
			}
			let body = '';
			req.on('data', (c) => { body += c; if (body.length > 100000) req.destroy(); });
			req.on('end', () => {
				try {
					const note = JSON.parse(body);
					const stamp = new Date().toISOString().replace(/[:.]/g, '-');
					writeFileSync(join(dir, `${stamp}.json`), JSON.stringify({ ...note, at: new Date().toISOString() }, null, 2));
					res.writeHead(204).end();
				} catch {
					res.writeHead(400).end();
				}
			});
		});
	},
});

const section = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

// One page per guide (build, hardware, firmware, Keybard, Vial): the sidebar lists each
// page's sections as jump links, and public/sidebar-spy.js highlights the one in view.
const jumps = (label, items) => ({ label, collapsed: true, items });
const hardwareJumps = [
	{ label: 'Overview', link: '/hardware/' },
	{ label: "Keys", link: '/hardware/#keys' },
	{ label: "Mounting and tenting", link: '/hardware/#mounting-and-tenting' },
	{ label: "Care and cleaning", link: '/hardware/#care-and-cleaning' },
	{ label: "Opening the case", link: '/hardware/#opening-the-case' },
	{ label: "Self-printing and repairs", link: '/hardware/#self-printing-and-repairs' },
	{ label: "Fit", link: '/hardware/#fit' },
	{ label: "Typing on a Svalboard", link: '/hardware/#typing-on-a-svalboard' },
	{ label: "Pointing modules", link: '/hardware/#pointing-modules' },
	{ label: "Troubleshooting", link: '/hardware/#troubleshooting' },
];
const buildJumps = [
	{ label: 'Overview', link: '/build/' },
	{ label: "What's in the kit", link: '/build/#whats-in-the-kit' },
	{ label: "Tools you need", link: '/build/#tools-you-need' },
	{ label: "Sizing before you build", link: '/build/#sizing-before-you-build' },
	{ label: "Step 1: Print all parts", link: '/build/#step-1-print-all-parts' },
	{ label: "Step 2: Organize magnets", link: '/build/#step-2-organize-magnets' },
	{ label: "Step 3: Install magnets", link: '/build/#step-3-install-magnets' },
	{ label: "Step 4: Insert keys", link: '/build/#step-4-insert-keys' },
	{ label: "Step 5: Ink the key flags", link: '/build/#step-5-ink-the-key-flags' },
	{ label: "Step 6: Attach FFCs", link: '/build/#step-6-attach-ffcs' },
	{ label: "Step 7: Install PCBAs and test", link: '/build/#step-7-install-pcbas-and-test' },
	{ label: "Step 8: Install inserts and nuts", link: '/build/#step-8-install-inserts-and-nuts' },
	{ label: "Step 9: Attach towers to clusters", link: '/build/#step-9-attach-towers-to-clusters' },
	{ label: "Step 10: Install towers on baseplates", link: '/build/#step-10-install-towers-on-baseplates' },
	{ label: "Steps 10a to 10c: Pointing devices", link: '/build/#steps-10a-to-10c-pointing-devices' },
	{ label: "Step 11: Route cables", link: '/build/#step-11-route-cables' },
	{ label: "Step 12: Install MCUs", link: '/build/#step-12-install-mcus' },
	{ label: "Step 13: Attach palm rest carriers", link: '/build/#step-13-attach-palm-rest-carriers' },
	{ label: "Step 14: Attach palm rests", link: '/build/#step-14-attach-palm-rests' },
	{ label: "Step 15: Flash firmware and connect", link: '/build/#step-15-flash-firmware-and-connect' },
	{ label: "Step 16: Test all keys", link: '/build/#step-16-test-all-keys' },
	{ label: "Step 17: Install back cover and feet", link: '/build/#step-17-install-back-cover-and-feet' },
	{ label: "Step 18: Adjust the fit", link: '/build/#step-18-adjust-the-fit' },
	{ label: "Step 19: Enjoy!", link: '/build/#step-19-enjoy' },
];
const firmwareJumps = [
	{ label: "Flashing firmware", link: '/firmware/' },
	{ label: "What's new compared with Vial", link: '/firmware/#whats-new-compared-with-vial' },
	{ label: "Firmware files", link: '/firmware/#firmware-files' },
	{ label: "Recovery", link: '/firmware/#recovery' },
	{ label: "Known limitations", link: '/firmware/#known-limitations' },
	{ label: "Linux: the udev rule", link: '/firmware/#linux-the-udev-rule' },
	{ label: "Moving from Vial", link: '/firmware/#moving-from-vial' },
	{ label: "Going back to Vial", link: '/firmware/#going-back-to-vial' },
	{ label: "What a .vil doesn't hold", link: '/firmware/#what-a-vil-doesnt-hold' },
];
const keybardJumps = [
	{ label: 'Get started', link: '/keybard/' },
	{ label: "Make your first change", link: '/keybard/#make-your-first-change' },
	{ label: "Layers and layouts", link: '/keybard/#layers-and-layouts' },
	{ label: "Layer lights and brightness", link: '/keybard/#layer-lights-and-brightness' },
	{ label: "Backups and files", link: '/keybard/#backups-and-files' },
	{ label: "Behaviors", link: '/keybard/#behaviors' },
	{ label: "Pointing devices", link: '/keybard/#pointing-devices' },
	{ label: "Settings and checks", link: '/keybard/#settings-and-checks' },
	{ label: "Desktop overlay", link: '/keybard/#desktop-overlay' },
	{ label: "Troubleshooting", link: '/keybard/#troubleshooting' },
];
const vialJumps = [
	{ label: 'Overview', link: '/vial/' },
	{ label: "Vial firmware files", link: '/vial/#vial-firmware-files' },
	{ label: "Flash Vial firmware", link: '/vial/#flash-vial-firmware' },
	{ label: "The Vial app", link: '/vial/#the-vial-app' },
	{ label: "Layers, tap dances, combos, overrides and macros", link: '/vial/#layers-tap-dances-combos-overrides-and-macros' },
	{ label: "Svalboard keys in Vial", link: '/vial/#svalboard-keys-in-vial' },
	{ label: "Pointing settings in Vial", link: '/vial/#pointing-settings-in-vial' },
	{ label: "Recovery on Vial", link: '/vial/#recovery-on-vial' },
];

// Old page URLs, from before each guide became one page.
const redirects = {
	'/build/fitment': '/build/#sizing-before-you-build',
	'/build/step-01-print-parts': '/build/#step-1-print-all-parts',
	'/build/step-02-organize-magnets': '/build/#step-2-organize-magnets',
	'/build/step-03-install-magnets': '/build/#step-3-install-magnets',
	'/build/step-04-insert-keys': '/build/#step-4-insert-keys',
	'/build/step-05-key-flags': '/build/#step-5-ink-the-key-flags',
	'/build/step-06-attach-ffcs': '/build/#step-6-attach-ffcs',
	'/build/step-07-install-pcbas': '/build/#step-7-install-pcbas-and-test',
	'/build/step-08-heat-set-inserts': '/build/#step-8-install-inserts-and-nuts',
	'/build/step-09-attach-towers': '/build/#step-9-attach-towers-to-clusters',
	'/build/step-10-install-towers': '/build/#step-10-install-towers-on-baseplates',
	'/build/step-10-pointing-devices': '/build/#steps-10a-to-10c-pointing-devices',
	'/build/step-11-route-cables': '/build/#step-11-route-cables',
	'/build/step-12-install-mcus': '/build/#step-12-install-mcus',
	'/build/step-13-palm-rest-carriers': '/build/#step-13-attach-palm-rest-carriers',
	'/build/step-14-palm-rests': '/build/#step-14-attach-palm-rests',
	'/build/step-15-flash-and-connect': '/build/#step-15-flash-firmware-and-connect',
	'/build/step-16-test-keys': '/build/#step-16-test-all-keys',
	'/build/step-17-back-cover': '/build/#step-17-install-back-cover-and-feet',
	'/build/step-18-adjust-fit': '/build/#step-18-adjust-the-fit',
	'/build/step-19-enjoy': '/build/#step-19-enjoy',
	'/firmware/flashing': '/firmware/#flashing-firmware',
	'/firmware/whats-new': '/firmware/#whats-new-compared-with-vial',
	'/firmware/files': '/firmware/#firmware-files',
	'/firmware/recovery': '/firmware/#recovery',
	'/firmware/known-limitations': '/firmware/#known-limitations',
	'/firmware/linux-udev': '/firmware/#linux-the-udev-rule',
	'/firmware/moving-from-vial': '/firmware/#moving-from-vial',
	'/firmware/going-back-to-vial': '/firmware/#going-back-to-vial',
	'/firmware/vil-limits': '/firmware/#what-a-vil-doesnt-hold',
	'/hardware/fit': '/hardware/#fit',
	'/hardware/typing': '/hardware/#typing-on-a-svalboard',
	'/hardware/pointing-modules': '/hardware/#pointing-modules',
	'/hardware/troubleshooting': '/hardware/#troubleshooting',
	'/hardware/hardware': '/hardware/',
	'/vial/files': '/vial/#vial-firmware-files',
	'/vial/flashing': '/vial/#flash-vial-firmware',
	'/vial/app': '/vial/#the-vial-app',
	'/vial/features': '/vial/#layers-tap-dances-combos-overrides-and-macros',
	'/vial/svalboard-keys': '/vial/#svalboard-keys-in-vial',
	'/vial/pointing': '/vial/#pointing-settings-in-vial',
	'/vial/recovery': '/vial/#recovery-on-vial',
	'/keybard/first-change': '/keybard/#make-your-first-change',
	'/keybard/layers': '/keybard/#layers-and-layouts',
	'/keybard/layer-lights': '/keybard/#layer-lights-and-brightness',
	'/keybard/backups': '/keybard/#backups-and-files',
	'/keybard/behaviors': '/keybard/#behaviors',
	'/keybard/pointing': '/keybard/#pointing-devices',
	'/keybard/settings': '/keybard/#settings-and-checks',
	'/keybard/overlay': '/keybard/#desktop-overlay',
	'/keybard/troubleshooting': '/keybard/#troubleshooting',
};

export default defineConfig({
	site: 'https://docs.svalboard.com',
	redirects,
	vite: { plugins: [notesInbox()] },
	integrations: [
		starlight({
			title: 'Svalboard',
			description: 'Build, set up and use your Svalboard.',
			logo: {
				light: './src/assets/brand/svalboard-light.svg',
				dark: './src/assets/brand/svalboard-dark.svg',
			},
			favicon: '/favicon.svg',
			// Owner notes (off unless switched on in a browser): public/notes.js
			head: [
				{ tag: 'script', attrs: { src: '/notes.js', defer: true } },
				{ tag: 'script', attrs: { src: '/sidebar-spy.js', defer: true } },
				// Older builds footnote style: "a" (Notes list) or "b" (Older builds block). One value; see custom.css.
				{ tag: 'script', content: "document.documentElement.dataset.older='a'" },
				// CAD figure style (src/components/CadStyleSelect.astro), set before first paint.
				{
					tag: 'script',
					content:
						"try{if(localStorage.getItem('svalboard-cad-style')==='shaded')document.documentElement.dataset.cad='shaded'}catch(e){}",
				},
			],
			// Guides are single pages read by jumping, so no previous/next links.
			pagination: false,
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://www.svalboard.com/discord' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/svalboard/docs' },
			],
			editLink: { baseUrl: 'https://github.com/svalboard/docs/edit/main/' },
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			components: {
				Banner: './src/components/PreviewBanner.astro',
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			plugins: [starlightLinksValidator({ errorOnLocalLinks: false }), starlightLlmsTxt()],
			sidebar: [
				section('Start here', 'start'),
				jumps('Hardware', hardwareJumps),
				jumps('Build guide', buildJumps),
				jumps('Firmware', firmwareJumps),
				jumps('Keybard', keybardJumps),
				jumps('Vial', vialJumps),
				section('Reference', 'reference'),
			],
		}),
	],
});
