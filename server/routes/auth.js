// signup + login authentication routes
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { signupValidation, loginValidation } = require('../validate');
const User = require('../model/User');

router.post('/signup', async (req, res) => {
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

		// assign token after creating user
		const token = jwt.sign({ _id: user._id }, process.env.SECRET);
		res.cookie('token', token, { httpOnly: true });

		res.status(201).send('User successfully created!');
	} catch (err) {
		res.status(400).send(err);
	}
});

router.post('/login', async (req, res) => {
	// input validation
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

	// database validation
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send(`Error: Account not found`);
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send(`Error: Incorrect password`);

	// assign token
	const token = jwt.sign({ _id: user._id }, process.env.SECRET);
	res.cookie('token', token, { httpOnly: true });

	res.status(200).send('Login successful!');
});

module.exports = router;
