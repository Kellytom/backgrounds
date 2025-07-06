// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
	integrations: [react()],
	output: 'static',
	site: 'https://hacker1.dev',
	build: {
		assets: 'assets'
	}
});
