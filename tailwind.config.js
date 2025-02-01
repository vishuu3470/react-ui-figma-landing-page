/** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme"); 


export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			neutral: {
  				'0': '#ffffff',
  				'1': '#fdfdfd',
  				'2': '#fcfcfb',
  				'3': '#fafafa',
  				'4': '#f9f9f8',
  				'5': '#f7f7f6',
  				'10': '#dfdedd',
  				'20': '#c6c5c3',
  				'30': '#aeadaa',
  				'40': '#969491',
  				'50': '#7d7b77',
  				'60': '#65625e',
  				'70': '#4d4a45',
  				'80': '#34312b',
  				'90': '#1c1812',
  				'100': '#000000'
  			},
  			tan: {
  				lighter: '#f1ece1',
  				light: '#e4d9c3',
  				DEFAULT: '#ddcfb4',
  				dark: '#b1a690',
  				darker: '#857c6c'
  			},
  			brown: {
  				lighter: '#978f84',
  				light: '#74695b',
  				DEFAULT: '#514432',
  				dark: '#31291e',
  				darker: '#201b14'
  			}
  		},
  		
  		fontFamily: {
  			sans: [
  				'Inter',
                    ...fontFamily.sans
                ],
  			gluten: [
  				'Gluten',
  				'sans-serif'
  			]
  		},
  		fontWeight: {
  			regular: 400,
  			semibold: 600
  		},
  		lineHeight: {
  			none: '1',
  			tight: '1.125',
  			normal: '1.25',
  			loose: '1.5'
  		},
  		fontSize: {
  			lg: '1.5rem',
  			xl: '2rem',
  			'2xl': '2.5rem',
  			'3xl': '3rem',
  			'4xl': '4rem',
  			'5xl': '4.5rem',
  			'6xl': '5rem'
  		},
  	
  		keyframes: {
  			'accordion-down': {
  				from: {
  					height: '0'
  				},
  				to: {
  					height: 'var(--radix-accordion-content-height)'
  				}
  			},
  			'accordion-up': {
  				from: {
  					height: 'var(--radix-accordion-content-height)'
  				},
  				to: {
  					height: '0'
  				}
  			}
  		},
  		animation: {
  			'accordion-down': 'accordion-down 0.2s ease-out',
  			'accordion-up': 'accordion-up 0.2s ease-out'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

