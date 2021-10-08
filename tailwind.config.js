const colors = require('tailwindcss/colors');
module.exports = {
	purge: ['./**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: '768px',
			md: '960px',
			lg: '1440px',
			xl: '1536px',
		},
		fontFamily: {
			PlusJakartaSans: [
				'PlusJakartaSans-Light',
				'PlusJakartaSans-Regular',
				'PlusJakartaSans-Medium',
				'PlusJakartaSans-Bold',
				'PlusJakartaSans-ExtraBold',
				'ui-sans-serif',
				'system-ui',
			],
		},

		fontSize: {
			xxs: '.5rem',
			tiny: '.675rem',
			xs: '.8rem',
			smlr: '.89rem',
			sm: '.88rem',
			smbase: '.9875rem',
			base: '1.05rem',
			lg: '1.175rem',
			xl: '1.3rem',
			'2xl': '1.5rem',
			'3xl': '1.875rem',
			'4xl': '2.25rem',
			'5xl': '3rem',
			'6xl': '4rem',
			'7xl': '5rem',
		},
		extend: {
			colors: {
				fuchsia: colors.fuchsia,
				footerPink: '#f7f7f7',
				buttonPink: '#ebebeb',
			},
			boxShadow: {
				'3xl': '-3px 8px 13px -1px rgba(0, 0, 0, 0.3)',
			},
			height: {
				xxxl: '875px',
				xxl: '625px',
				xl: '505px',
			},
			width: {
				82: '20.625rem',
			},

			flex: {
				2: '0 1 100%',
				3: '0 1 33.3333%',
				4: '0 1 25%',
				5: '1 0 140px',
				6: '0 1 auto',
				7: '0 1 50%',
			},
		},
	},
	variants: {
		scrollSnapType: ['responsive'],
		extend: {
			backgroundColor: ['active'],
			scale: ['active'],
		},
	},
};
