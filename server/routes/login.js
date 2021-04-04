// Login Authentication Route
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

const { loginValidation } = require('../validate');
const User = require('../model/User');

router.post('/', async (req, res) => {
	// input validation
	const { error } = loginValidation(req.body);
	if (error) return res.status(400).send(`Error: ${error.details[0].message}`);

	// database validation
	const user = await User.findOne({ email: req.body.email });
	if (!user) return res.status(400).send(`Error: Account not found`);
	const validPassword = await bcrypt.compare(req.body.password, user.password);
	if (!validPassword) return res.status(400).send(`Error: Incorrect password`);

	res.status(200).send('Login successful!');
});

module.exports = router;
