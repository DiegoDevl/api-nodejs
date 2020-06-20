const express = require('express');
const { query } = require('express');
const app = express();

app.get('/', (req, res) => {
    let obj = req.query;
    return res.send({message: 'Tudo ok com o metodo GET! Você enviou o nome ' + obj.nome + ' e idade '+ obj.idade});     
});

app.post('/p', (req, res) => {
    return res.send({message: 'Tudo ok com o metodo POST!'});     
});

app.listen(3000);

module.exports = app;