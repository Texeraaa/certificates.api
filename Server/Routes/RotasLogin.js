import express from 'express';
const app = express();
const router = express.Router()
const path = require('path')

router.get('/', async (req, res) => {
    res.send('<h1>Teste</h1>')
})
// app.get('/', (req, res) => {
//     res.send('<h1>Criando servidor</h1>')
// })

module.exports = router