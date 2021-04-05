const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/welcome', function (req, res, next) {
  // verify token
	jwt.verify(req.cookies.token, process.env.SECRET, (err) => {
		if (err) res.status(403).send('Forbidden');
		else res.status(200).send({ welcomeMessage: 'Welcome!' });
	});
});

module.exports = router;
