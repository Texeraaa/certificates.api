const express = require('express');
const router = express.Router()

class RotasLogin {
    static iniciar(){
        let rotas = express.Router()
        rotas.get('/listaUsuarios', async (req, res) => {
            res.send('<h1>Teste</h1>')
        })
    }
}

// app.get('/', (req, res) => {
//     res.send('<h1>Criando servidor</h1>')
// })

module.exports = router