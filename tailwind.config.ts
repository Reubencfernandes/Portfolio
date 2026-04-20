import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				sans: ['var(--font-kanit)', 'sans-serif'],
				mono: ['var(--font-jetbrains-mono)', 'monospace'],
			},
			colors: {
				text: '#070a05',
				background: 'var(--background)',
				primary: 'var(--primary)',
				secondary: 'var(--secondary)',
				accent: 'var(--accent)',
				foreground: 'var(--foreground)',
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				chart: {
					'1': 'var(--chart-1)',
					'2': 'var(--chart-2)',
					'3': 'var(--chart-3)',
					'4': 'var(--chart-4)',
					'5': 'var(--chart-5)'
				},
				'color-1': 'var(--color-1)',
				'color-2': 'var(--color-2)',
				'color-3': 'var(--color-3)',
				'color-4': 'var(--color-4)',
				'color-5': 'var(--color-5)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				meteor: 'meteor 5s linear infinite'
			},
			keyframes: {
				meteor: {
					'0%': {
						transform: 'rotate(215deg) translateX(0)',
						opacity: '1'
					},
					'70%': {
						opacity: '1'
					},
					'100%': {
						transform: 'rotate(215deg) translateX(-500px)',
						opacity: '0'
					}
				},
				'aurora-border': {
					'0%, 100%': {
						borderRadius: '37% 29% 27% 27% / 28% 25% 41% 37%'
					},
					'25%': {
						borderRadius: '47% 29% 39% 49% / 61% 19% 66% 26%'
					},
					'50%': {
						borderRadius: '57% 23% 47% 72% / 63% 17% 66% 33%'
					},
					'75%': {
						borderRadius: '28% 49% 29% 100% / 93% 20% 64% 25%'
					}
				},
				'aurora-1': {
					'0%, 100%': {
						top: '0',
						right: '0'
					},
					'50%': {
						top: '50%',
						right: '25%'
					},
					'75%': {
						top: '25%',
						right: '50%'
					}
				},
				'aurora-2': {
					'0%, 100%': {
						top: '0',
						left: '0'
					},
					'60%': {
						top: '75%',
						left: '25%'
					},
					'85%': {
						top: '50%',
						left: '50%'
					}
				},
				'aurora-3': {
					'0%, 100%': {
						bottom: '0',
						left: '0'
					},
					'40%': {
						bottom: '50%',
						left: '25%'
					},
					'65%': {
						bottom: '25%',
						left: '50%'
					}
				},
				'aurora-4': {
					'0%, 100%': {
						bottom: '0',
						right: '0'
					},
					'50%': {
						bottom: '25%',
						right: '40%'
					},
					'90%': {
						bottom: '50%',
						right: '25%'
					}
				}
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
};
export default config;
