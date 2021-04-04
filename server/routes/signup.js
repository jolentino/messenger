// Signup Authentication Route
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
	res.send('Signup');
});;

module.exports = router;
