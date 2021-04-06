import * as Yup from 'yup';

export const validationSchema = (type) => {
	const usernameSchema = Yup.object({ username: Yup.string().required('Username is required').max(40, 'Username is too long') });
	const emailAndPasswordSchema = Yup.object().shape({
		email: Yup.string().required('Email is required').email('Email is not valid'),
		password: Yup.string().required('Password is required').max(100, 'Password is too long').min(6, 'Password too short'),
	});

	return type === 'Login' ? emailAndPasswordSchema : emailAndPasswordSchema.concat(usernameSchema);
};
