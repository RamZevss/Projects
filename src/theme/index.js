import { createTheme } from '@mui/material/styles';

const themeWithBreakpoints = createTheme({});

const theme = createTheme(themeWithBreakpoints, {
	typography: {
		h3: {
			fontWeight: 700,
			fontSize: '24px',
			lineHeight: '33px',
			textTransform: 'uppercase',
			[themeWithBreakpoints.breakpoints.down('md')]: {
				fontSize: '24px',
				lineHeight: '30px',
			},
		},
		overline: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '19px',
			color: '#847A7A',
			textTransform: 'uppercase',
			[themeWithBreakpoints.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: '16px',
			},
		},
		subtitle2: {
			fontWeight: 700,
			fontSize: '16px',
			lineHeight: '22px',
		},
		caption: {
			fontWeight: 600,
			fontSize: '12px',
			lineHeight: '16px',
			color: '#847A7A',
			textDecoration: 'underline',
		},
		body1: {
			fontWeight: 400,
			fontSize: '14px',
			lineHeight: '19px',
			color: '#595959',
			[themeWithBreakpoints.breakpoints.down('md')]: {
				fontSize: '12px',
				lineHeight: '16px',
			},
		},
		title: {
			fontWeight: 400,
			fontSize: '1.5rem',
			lineHeight: 1.334,
			marginBottom: '0.35em',
			textTransform: 'uppercase',
			[themeWithBreakpoints.breakpoints.down('sm')]: {
				fontSize: '12px',
				lineHeight: '16px',
			},
		},
	},
	components: {
		MuiButton: {
			defaultProps: {
				disableElevation: false,
			},
			styleOverrides: {
				root: {
					borderRadius: 0,
					boxShadow: 'none',
				},
				containedPrimary: {
					background: '#000',
					color: '#fff',
					'&:hover': {
						background: '#565254',
						boxShadow: 'none',
					},
				},
				sizeMedium: {
					width: '263px',
					height: '50px',
					padding: '16px 20px',
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '20px',
				},
			},
		},
		MuiIconButton: {
			styleOverrides: {
				root: {
					borderRadius: 0,
				},
				sizeMedium: {
					width: '50px',
					height: '50px',
					padding: '16px',
					background: '#000',
					color: '#fff',
					'&:hover': {
						background: '#565254',
					},
				},
			},
		},
		MuiListItemText: {
			styleOverrides: {
				primary: {
					fontWeight: 400,
					fontSize: '16px',
					lineHeight: '22px',
					color: '#000',
					[themeWithBreakpoints.breakpoints.down('sm')]: {
						fontSize: '14px',
						lineHeight: '18px',
					},
				},
			},
		},
		MuiCardContent: {
			styleOverrides: {
				root: {
					[themeWithBreakpoints.breakpoints.down('sm')]: {
						padding: '8px',
					},
				},
			},
		},
	},
});

export default theme;
