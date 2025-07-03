// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Hacker1',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Example Reference', slug: 'reference/example' },
					],
				},
				{
					label: 'Showcases',
					items: [
						{ label: 'Starlight Showcase', slug: 'starlight-showcase' },
						{ label: 'DaisyUI Showcase', slug: 'daisyui-showcase' },
						{ label: 'CSS Guide', slug: 'starlight-css-guide' },
					],
				},
			],
		}),
	],
});
