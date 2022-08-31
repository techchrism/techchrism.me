/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'white-transparent': 'rgba(255, 255, 255, 0.8)',
				'black-transparent': 'rgba(0, 0, 0, 0.8)',
			}
		},
	},
	plugins: [],
}
