import { makeStyles } from '@material-ui/core/styles';

const useHeaderButtonStyles = makeStyles((theme) => ({
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
	link: {
		textDecoration: 'none',
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'flex-end',
	},
}));

export default useHeaderButtonStyles;
