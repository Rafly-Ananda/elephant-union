import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				grotesk: ['"Space Grotesk"', ...defaultTheme.fontFamily.sans],
				graphik: ['Graphik', ...defaultTheme.fontFamily.sans]
			},
			keyframes: {
				wiggle: {
					'0%, 100%': { transform: 'rotate(-3deg)' },
					'50%': { transform: 'rotate(3deg)' }
				}
			},
			animation: {
				wiggle: 'wiggle 0.5s ease-in-out infinite'
			}
		}
	}
};
