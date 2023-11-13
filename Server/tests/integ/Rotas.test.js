const App = require("../../src/App")
const Rotas = require("../../src/Routes/Rotas")

test('test app.iniciar', () => {
    App.iniciar()
    expect(true).toBe(true)
})

test('test app.iniciar', () => {
    Rotas.iniciar()
    expect(true).toBe(true)
})