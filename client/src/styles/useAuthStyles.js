import { makeStyles } from '@material-ui/core/styles';

const useAuthStyles = makeStyles((theme) => ({
	root: {
		minHeight: '100vh',
		'& .MuiInput-underline:before': {
			borderBottom: '1.2px solid rgba(0, 0, 0, 0.2)',
		},
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
	image: {
		backgroundImage: 'url(./images/bg-img.png)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},
}));

export default useAuthStyles;
