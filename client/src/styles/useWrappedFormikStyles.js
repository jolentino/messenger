import { makeStyles } from '@material-ui/core/styles';

const useWrappedFormikStyles = makeStyles((theme) => ({
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
	forgot: {
		paddingRight: 10,
		color: '#3a8dff',
	},
}));

export default useWrappedFormikStyles;
