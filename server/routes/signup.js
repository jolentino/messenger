// signup authentication route
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { signupValidation } = require('../validate');
const User = require('../model/User');

router.post('/', async (req, res) => {
	// input validation
	const { error } = signupValidation(req.body);
	if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

	// database validation
	const existingUsername = await User.findOne({ username: req.body.username });
	const existingEmail = await User.findOne({ email: req.body.email });
	if (existingUsername || existingEmail) return res.status(400).send(`Error: An account already exists with this ${existingUsername ? 'username' : 'email'}`);

	// password hash
	const salt = await bcrypt.genSalt(10);
	const hashPassword = await bcrypt.hash(req.body.password, salt);

	// create user instance
	const user = new User({
		username: req.body.username,
		email: req.body.email,
		password: hashPassword,
	});

	// add user to database
	try {
		await user.save();
		res.status(201).send('User successfully created!');
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
