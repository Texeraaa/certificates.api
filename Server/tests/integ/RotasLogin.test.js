const Rotas = require("../../src/Routes/Rotas")
const RotasLogin = require("../../src/Routes/RotasLogin")

test('test app.iniciar', () => {
    RotasLogin.iniciar()
    expect(true).toBe(true)
})