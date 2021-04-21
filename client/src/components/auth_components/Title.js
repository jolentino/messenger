import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import useTitleStyles from '../../styles/useTitleStyles';

const Title = ({ actionType }) => {
	const classes = useTitleStyles();

	return (
		<Grid container>
			<Grid item xs>
				<Typography className={classes.welcome} component="h1" variant="h5">
					{actionType === 'login' ? 'Welcome back!' : 'Create an account.'}
				</Typography>
			</Grid>
		</Grid>
	);
};

export default Title;
