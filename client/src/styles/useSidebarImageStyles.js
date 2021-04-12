import { makeStyles } from '@material-ui/core/styles';

const useSidebarImageStyles = makeStyles((theme) => ({
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
}));

export default useSidebarImageStyles;
