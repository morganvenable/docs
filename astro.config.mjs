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

export default defineConfig({
	site: 'https://docs.svalboard.com',
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
			head: [{ tag: 'script', attrs: { src: '/notes.js', defer: true } }],
			social: [
				{ icon: 'discord', label: 'Discord', href: 'https://www.svalboard.com/discord' },
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/svalboard/docs' },
			],
			editLink: { baseUrl: 'https://github.com/svalboard/docs/edit/main/' },
			lastUpdated: true,
			customCss: ['./src/styles/custom.css'],
			components: { Banner: './src/components/PreviewBanner.astro' },
			plugins: [starlightLinksValidator({ errorOnLocalLinks: false }), starlightLlmsTxt()],
			sidebar: [
				section('Start here', 'start'),
				section('Hardware', 'hardware'),
				section('Build guide', 'build'),
				section('Firmware', 'firmware'),
				section('Keybard', 'keybard'),
				section('Vial (legacy)', 'vial'),
				section('Reference', 'reference'),
			],
		}),
	],
});
