import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		'& .MuiInput-underline:before': {
			borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
		},
	},
	welcome: {
		fontSize: 30,
		paddingBottom: 30,
		color: '#000000',
		fontWeight: 700,
		fontFamily: '"Open Sans"',
	},
	heroText: {
		fontSize: 32.5,
		fontFamily: '"Open Sans"',
		textAlign: 'center',
		color: 'white',
		marginTop: 45,
		maxWidth: 400,
	},
	overlay: {
		backgroundImage: 'linear-gradient(180deg, rgb(58,141,255, 0.75) 0%, rgb(134,185,255, 0.75) 100%)',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
		flexDirection: 'column',
		minHeight: '100vh',
		paddingBottom: 145,
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonHeader: {
		display: 'flex',
		alignItems: 'flex-start',
		justifyContent: 'space-between',
		flexDirection: 'column',
		bgcolor: 'background.paper',
		minHeight: '100vh',
		paddingTop: 23,
	},
	accBtn: {
		fontSize: 15,
		fontWeight: 700,
		width: 170,
		height: 54,
		borderRadius: 5,
		filter: 'drop-shadow(0px 2px 6px rgba(74,106,149,0.2))',
		backgroundColor: '#ffffff',
		color: '#3a8dff',
		boxShadow: 'none',
		marginRight: 35,
		textTransform: 'capitalize',
	},
	noAccBtn: {
		fontSize: 14,
		color: '#b0b0b0',
		fontWeight: 400,
		textAlign: 'center',
		marginRight: 21,
		whiteSpace: 'nowrap',
		textTransform: 'capitalize',
	},
	image: {
		backgroundImage: 'url(./images/bg-img.png)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
	box: {
		padding: 24,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		minHeight: '100vh',
		flexDirection: 'column',
		maxWidth: 900,
		margin: 'auto',
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	label: {
		fontSize: 19,
		color: 'rgb(0,0,0,0.4)',
		paddingLeft: '5px',
	},
	submit: {
		margin: theme.spacing(3, 2, 2),
		padding: 10,
		width: 160,
		height: 56,
		borderRadius: 3,
		marginTop: 49,
		fontSize: 16,
		fontWeight: 'bold',
		backgroundColor: '#3a8dff',
		textTransform: 'capitalize',
	},
	whitespace: {
		marginTop: '6.9rem',
	},
	hide: {
		display: 'none',
	},
	inputs: {
		marginTop: '.8rem',
		height: '2rem',
		padding: '5px',
		fontWeight: '700',
		fontSize: 16,
	},
	link: {
		textDecoration: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
	},
	forgot: {
		paddingRight: 10,
		color: '#3a8dff',
	},
}));

export default useStyles;
