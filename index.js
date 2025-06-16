const express = require('express')
const app = express()
const porta = 3000
const router = require('./routes/Router.js')

app.use(express.json())
app.use('/home', router)

app.listen(porta, () => {
    console.log(`Servidor rodando na porta ${porta}`)
})