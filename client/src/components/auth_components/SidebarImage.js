import React from 'react';
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../useStyles';

const SidebarImage = () => {
	const classes = useStyles();

	return (
		<Box className={classes.overlay}>
			<Hidden xsDown>
				<img width={67} src="/images/chatBubble.png" />
				<Hidden smDown>
					<Typography className={classes.heroText}>Converse with anyone with any language</Typography>
				</Hidden>
			</Hidden>
		</Box>
	);
};

export default SidebarImage;
