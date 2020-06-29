const express = require('express');
const { query } = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const url = 'mongodb+srv://usuario_adm:152001@clusterapi1.unejk.mongodb.net/test?retryWrites=true&w=majority'
const options = { poolSize: 5, useNewUrlParser: true, useUnifiedTopology: true };

mongoose.connect(url, options);
mongoose.set('useCreateIndex', true);

mongoose.connection.on('error', (err) => {
    console.log('Erro na conexão com o banco de dados:'+ err);
});

mongoose.connection.on('disconnected', () => {
    console.log('Aplicação desconectada do banco de dados!');
});

mongoose.connection.on('connected', () => {
    console.log('Aplicação conectada no banco de dados!');
});


//BODY PARSER
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const indexRoute = require('./Routes/index');
const userRoute = require('./Routes/users');

app.use('/', indexRoute);
app.use('/users', userRoute);

app.listen(3000);

module.exports = app;