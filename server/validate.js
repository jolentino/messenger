const Joi = require('@hapi/joi');

// signup validation
const signupValidation = (data) => {
	const signupSchema = Joi.object({
		username: Joi.string().max(40).required(),
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(100).required(),
	});

	return signupSchema.validate(data);
};

// login validation
const loginValidation = (data) => {
	const loginSchema = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(6).max(100).required(),
	});

	return loginSchema.validate(data);
};

module.exports = {
	signupValidation,
	loginValidation,
};
