// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: 'static',
	site: 'https://backgrounds.github.io', // Update this to your actual GitHub Pages URL
	base: '/backgrounds', // Update this to your repository name
	build: {
		assets: 'assets'
	}
});
