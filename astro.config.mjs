// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	devToolbar: {
		enabled: false
	},
	integrations: [
		starlight({
			title: 'Hacker1',
			customCss: ['./src/styles/custom-starlight.css'],
			components: {
				Header: './src/components/Header.astro',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Main',
					items: [
						{ label: 'Starlight Showcase', slug: 'starlight-showcase' },
						{ label: 'DaisyUI Showcase', slug: 'daisyui-showcase' },
						{ label: 'CSS Guide', slug: 'starlight-css-guide' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					items: [
						{ label: 'Example Reference', slug: 'reference/example' },
					],
				},
			],
		}),
	],
});
