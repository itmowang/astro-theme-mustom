import daisyui from "daisyui"
import defaultTheme from "tailwindcss/defaultTheme"

console.log(defaultTheme.screens);


/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			xs: "360px",
			...defaultTheme.screens,
			"3xl": "1650px",
		  }
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
					"background-color": "rgba(255,255,255,0.9)",
					".header-nav .header-nav-item:after": {
						"background-image": "linear-gradient(to right,rgb(251 113 133 / 1),rgb(251 113 133 / 1))"
					}
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title": {
						"color": "#f43f5e"
					},
					".tools": {
						"color": "#777"
					}
				},
				".myCard": {
					".my-title": {
						"color": "#f43f5e"
					},
					".my-desc": {
						"color": "#777"
					},
					".my-cate": {
						"color": "#fb7185"
					},
					".my-number": {
						"color": "#f43f5e"
					},
					".my-yy": {
						"color": "#f43f5e"
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
					"background-color": "rgba(255,255,255,0.9)",
					".header-nav .header-nav-item:after": {
						"background-image": "linear-gradient(to right,rgb(147 197 253 / 1),rgb(147 197 253 / 1))"
					}
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title": {
						"color": "#60a5fa"
					},
					".tools": {
						"color": "#777"
					}
				},
				".myCard": {
					".my-title": {
						"color": "#60a5fa"
					},
					".my-desc": {
						"color": "#777"
					},
					".my-cate": {
						"color": "#93c5fd"
					},
					".my-number": {
						"color": "#60a5fa"
					},
					".my-yy": {
						"color": "#60a5fa"
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
					"background-color": "rgba(255,255,255,0.9)",
					".header-nav .header-nav-item:after": {
						"background-image": "linear-gradient(to right,rgb(253 186 116 / 1),rgb(253 186 116 / 1))"
					}
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title": {
						"color": "#fb923c"
					},
					".tools": {
						"color": "#777"
					}
				},
				".myCard": {
					".my-title": {
						"color": "#fb923c"
					},
					".my-desc": {
						"color": "#777"
					},
					".my-cate": {
						"color": "#fdba74"
					},
					".my-number": {
						"color": "#fb923c"
					},
					".my-yy": {
						"color": "#fb923c"
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
					"background-color": "rgba(255,255,255,0.9)",
					".header-nav .header-nav-item:after": {
						"background-image": "linear-gradient(to right,rgb(56 189 248 / 1),rgb(56 189 248  / 1))"
					}
				},
				".header-theme:hover": {
					"background-color": "rgba(255,255,255,0.95)"
				},
				".postCard": {
					".title": {
						"color": "#0ea5e9"
					},
					".tools": {
						"color": "#777"
					}
				},
				".myCard": {
					".my-title": {
						"color": "#0ea5e9"
					},
					".my-desc": {
						"color": "#777"
					},
					".my-cate": {
						"color": "#38bdf8"
					},
					".my-number": {
						"color": "#0ea5e9"
					},
					".my-yy": {
						"color": "#0ea5e9"
					}
				}
			},
		}],
	},
}
