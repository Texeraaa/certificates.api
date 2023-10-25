const express = require('express');
const App = require("./src/app.js");
const path = require('path')
require('dotenv').config({ path: path.resolve(__dirname, '../.env') })
const PORT = process.env.PORT

try {
    let app = App.iniciar()
    app.listen(PORT, () => 
    console.log(`Servidor iniciado na porta http://localhost:${PORT}`)
    );
    
} catch (error) {
    console.log(error);
}
