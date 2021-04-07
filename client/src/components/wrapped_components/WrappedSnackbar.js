import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Snackbar from '@material-ui/core/Snackbar';

const WrappedSnackbar = ({ actionType, open, setOpen }) => {
	const handleClose = (event, reason) => {
		if (reason === 'clickaway') return;
		setOpen(false);
	};

	const message = actionType === 'login' ? 'Login failed' : 'Email already exists';

	return (
		<Snackbar
			anchorOrigin={{
				vertical: 'bottom',
				horizontal: 'center',
			}}
			open={open}
			autoHideDuration={6000}
			onClose={handleClose}
			message={message}
			action={
				<>
					<IconButton size="small" aria-label="close" color="inherit" onClick={handleClose}>
						<CloseIcon fontSize="small" />
					</IconButton>
				</>
			}
		/>
	);
};

export default WrappedSnackbar;
