const express = require('express')
const pj = require('../../../package.json');
const RotasLogin = require('./RotasLogin');
class Rotas {
    static iniciar() {
        try {
            let rotas = express.Router()

            rotas.get('/', (req, res) => {
                res.status(200).json({
                    "status": 200,
                    "message": "Server online",
                    "version": pj.version
                })
            })

            rotas.use('/login/v1', RotasLogin.iniciar())

            return rotas;
        } catch (error) {
            console.log(error)
            return null;
        }
    }
}

module.exports = Rotas