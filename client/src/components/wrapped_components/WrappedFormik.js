import React from 'react';
import { Formik } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

import useStyles from '../../useStyles';
import { validationSchema } from '../../validationSchema';

const WrappedFormik = ({ actionType, action }) => {
	const classes = useStyles();

	return (
		<Formik
			initialValues={{
				email: '',
				password: '',
			}}
			validationSchema={validationSchema(actionType)}
			onSubmit={({ email, password }, { setStatus, setSubmitting }) => {
				setStatus();
				action(email, password).then(
					() => {
						// useHistory push to chat
						console.log(email, password);
						return;
					},
					(error) => {
						setSubmitting(false);
						setStatus(error);
					}
				);
			}}>
			{({ handleSubmit, handleChange, values, touched, errors }) => (
				<form onSubmit={handleSubmit} className={classes.form} noValidate>
					{/* conditional username field */}
					{actionType === 'login' ? null : (
						<TextField
							id="username"
							label={<Typography className={classes.label}>Username</Typography>}
							fullWidth
							margin="normal"
							InputLabelProps={{
								shrink: true,
							}}
							InputProps={{ classes: { input: classes.inputs } }}
							name="username"
							autoComplete="username"
							autoFocus
							helperText={touched.username ? errors.username : ''}
							error={touched.username && Boolean(errors.username)}
							value={values.username}
							onChange={handleChange}
						/>
					)}
					{/* email field */}
					<TextField
						id="email"
						label={<Typography className={classes.label}>E-mail address</Typography>}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{ classes: { input: classes.inputs } }}
						name="email"
						autoComplete="email"
						autoFocus
						helperText={touched.email ? errors.email : ''}
						error={touched.email && Boolean(errors.email)}
						value={values.email}
						onChange={handleChange}
					/>
					{/* password field */}
					<TextField
						id="password"
						label={<Typography className={classes.label}>Password</Typography>}
						fullWidth
						margin="normal"
						InputLabelProps={{
							shrink: true,
						}}
						InputProps={{
							classes: { input: classes.inputs },
							endAdornment: <Typography className={classes.forgot}>Forgot?</Typography>,
						}}
						type="password"
						autoComplete="current-password"
						helperText={touched.password ? errors.password : ''}
						error={touched.password && Boolean(errors.password)}
						value={values.password}
						onChange={handleChange}
					/>

					<Box textAlign="center">
						<Button type="submit" size="large" variant="contained" color="primary" className={classes.submit}>
							{actionType === 'login' ? 'Login' : 'Create'}
						</Button>
					</Box>

					{/* conditional spacing */}
					{actionType === 'login' ? <div style={{ height: 95 }} /> : null}
				</form>
			)}
		</Formik>
	);
};

export default WrappedFormik;
