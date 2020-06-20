const express = require('express');
const { query } = require('express');
const app = express();

//const indexRoute = require('./Routes/index');
const userRoute = require('./Routes/users');

//app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(3000);

module.exports = app;