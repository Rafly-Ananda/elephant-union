import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				grotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				graphik: ['Graphik', ...defaultTheme.fontFamily.sans]
			}
		}
	}
};
