// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightLinksValidator from 'starlight-links-validator';
import starlightLlmsTxt from 'starlight-llms-txt';

const section = (label, directory) => ({ label, items: [{ autogenerate: { directory } }] });

export default defineConfig({
	site: 'https://docs.svalboard.com',
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
