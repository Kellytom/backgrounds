// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: 'static',
	site: 'https://kellytom.github.io/backgrounds/', // actual GitHub Pages URL
	base: '/backgrounds/', // repository name
	build: {
		assets: 'assets'
	}
});
