import React from 'react';
import { useHistory } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';

import useStyles from '../useStyles';
import SidebarImage from '../components/auth_components/SidebarImage';
import HeaderButton from '../components/auth_components/HeaderButton';
import Title from '../components/auth_components/Title';
import WrappedFormik from '../components/wrapped_components/WrappedFormik';
import WrappedSnackbar from '../components/wrapped_components/WrappedSnackbar';

// middleware placeholder
function useLogin() {
	const history = useHistory();

	const login = async (email, password) => {
		console.log(email, password);
		const res = await fetch(`/auth/login?email=${email}&password=${password}`).then((res) => res.json());
		localStorage.setItem('user', res.user);
		localStorage.setItem('token', res.token);
		history.push('/dashboard');
	};
	return login;
}

export default function Login() {
	const classes = useStyles();
	const [open, setOpen] = React.useState(true);

	const history = useHistory();

	React.useEffect(() => {
		const user = localStorage.getItem('user');
		if (user) history.push('/dashboard');
	}, []);
	
	const login = useLogin();

	return (
		<Grid container component="main" className={classes.root}>
			<CssBaseline />

			<Grid item xs={false} sm={4} md={5} className={classes.image}>
				<SidebarImage />
			</Grid>
			
			<Grid item xs={12} sm={8} md={7} elevation={6} component={Paper} square>
				<Box className={classes.buttonHeader}>
					<HeaderButton actionType="login" />

					<Box width="100%" maxWidth={450} p={3} alignSelf="center">
						<Title actionType="login" />
						<WrappedFormik actionType="login" action={login} />
					</Box>
					<Box p={1} alignSelf="center" />
				</Box>

				<WrappedSnackbar actionType="login" open={open} setOpen={setOpen} />
			</Grid>
		</Grid>
	);
}
