const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    return res.send({message: 'Tudo ok com o metodo GET da rota de usuarios!'});
});

router.post('/', (req, res) => {
    return res.send({message: 'Tudo ok com o metodo GET da rota de usuarios!'});
});


module.exports = router;