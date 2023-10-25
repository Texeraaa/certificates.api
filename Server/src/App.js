const express = require('express');
const Rotas = require("./Routes/Rotas")

class App {
    static iniciar(){
        let app = express()
        app.use('/', Rotas.iniciar())

        return app
    }
}

module.exports = App;