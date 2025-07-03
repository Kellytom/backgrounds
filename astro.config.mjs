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
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Main',
					items: [
						{ label: 'Starlight Showcase', slug: 'starlight-showcase' },
						{ label: 'DaisyUI Showcase', slug: 'daisyui-showcase' },
					],
				},
			],
		}),
	],
});
