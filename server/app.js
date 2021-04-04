const createError = require('http-errors');
const express = require('express');
const { join } = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

const indexRouter = require('./routes/index');
const pingRouter = require('./routes/ping');
const loginRouter = require('./routes/login');
const signupRouter = require('./routes/signup');

const { json, urlencoded } = express;

const app = express();

dotenv.config();

// connect to database
mongoose.connect(process.env.DB_CONNECT, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

// connect middleware
app.use(logger('dev'));
app.use(json());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/ping', pingRouter);
app.use('/login', loginRouter);
app.use('/signup', signupRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
	next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
	// set locals, only providing error in development
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};

	// render the error page
	res.status(err.status || 500);
	res.json({ error: err });
});

module.exports = app;
