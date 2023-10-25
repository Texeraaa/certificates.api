const express = require('express');

class RotasLogin {
    static iniciar(){
        let rotas = express.Router()
        rotas.get('/listaUsuarios', async (req, res) => {
            res.send('<h1>Teste</h1>')
        })
        return rotas
    }
}

module.exports = RotasLogin;