/** @type {import('tailwindcss').Config} */

module.exports = {
	presets: [require("@scan/design-system/tailwind")],
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				"scan-blue": "#0B2B26",
				"scan-ink": "#0B2B26",
				"scan-lime": "#C6F432",
				"scan-paper": "#F4F7F2",
			},
			fontFamily: {
				sans: ['Google Sans', 'system-ui', 'sans-serif'],
				display: ['Google Sans', 'Google Sans Display', 'system-ui', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
