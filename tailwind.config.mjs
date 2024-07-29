import daisyui from "daisyui"


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {

	},
	plugins: [daisyui],
	daisyui: {
		themes: [{
			spring: {
				"primary": "#fb7185",
				"base-100": "#FFFFFF",
				".bg-color": {
					"background-color": "#fff1f2",
					"border": "2px solid #fda4af",
				},
				".bg-urls": {
					"background-image": "url('/bannerSpring.webp')"
				},
				".header-theme": {
					"color": "#fb7185",
					"background-color": "rgba(255,255,255,0.9)"
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title":{
						"color": "#f43f5e"
					},
					".tools":{
						"color": "#777"
					}
				}
			},
			summer: {
				"primary": "#93c5fd",
				"base-100": "#FFFFFF",
				".bg-color": {
					"background-color": "#FFFFFF",
					"border": "2px solid #bae6fd",
				},
				".bg-urls": {
					"background-image": "url('/bannerSummer.jpeg')"
				},
				".header-theme": {
					"color": "#93c5fd",
					"background-color": "rgba(255,255,255,0.9)"
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title":{
						"color": "#60a5fa"
					},
					".tools":{
						"color": "#777"
					}
				}
			},
			autumn: {
				"primary": "#fdba74",
				"base-100": "#FFFFFF",
				".bg-color": {
					"background-color": "#fff7ed",
					"border": "2px solid #fdba74"
				},
				".bg-urls": {
					"background-image": "url('/bannerAutumn.jpg')"
				},
				".header-theme": {
					"color": "#fdba74",
					"background-color": "rgba(255,255,255,0.9)"
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title":{
						"color": "#fb923c"
					},
					".tools":{
						"color": "#777"
					}
				}
			},
			winter: {
				"primary": "#38bdf8",
				"base-100": "#FFFFFF",
				".bg-color": {
					"background-color": "#FFFFFF",
					"border": "2px solid #e0f2fe"
				},
				".bg-urls": {
					"background-image": "url('/bannerWinter.jpg')"
				},
				".header-theme": {
					"color": "#38bdf8",
					"background-color": "rgba(255,255,255,0.9)"
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title":{
						"color": "#0ea5e9"
					},
					".tools":{
						"color": "#777"
					}
				}
			},
		}],
	},
}
