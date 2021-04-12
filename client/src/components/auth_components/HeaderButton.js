import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import useHeaderButtonStyles from '../../styles/useHeaderButtonStyles';

const HeaderButton = ({ actionType }) => {
	const classes = useHeaderButtonStyles();

	return (
		<Box p={1} alignSelf="flex-end" alignItems="center">
			<Link to={actionType === 'login' ? '/signup' : 'login'} className={classes.link}>
				<Button className={classes.noAccBtn}>{`${actionType === 'login' ? "Don't" : 'Already'} have an account?`}</Button>
				<Button className={classes.accBtn} variant="contained">
					{actionType === 'login' ? 'Create account' : 'Login'}
				</Button>
			</Link>
		</Box>
	);
};

export default HeaderButton;
