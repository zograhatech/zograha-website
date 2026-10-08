module.exports = {
	content: [
		"./index.html", 
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ['"Schibsted Grotesk"', 'system-ui', '-apple-system', 'sans-serif'],
				newsreader: ['"Newsreader"', 'serif'],
				mono: ['"IBM Plex Mono"', 'monospace'],
			},
			colors: {
				'site-ink': '#0A1A3F',
				'site-cyan': '#3FC3D3',
				'site-cyan-light': '#7FD6E2',
				'site-blue': '#1D5FA8',
			}
		},
	},
	plugins: [],
}