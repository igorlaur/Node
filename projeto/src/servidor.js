const porta = 3003

const express = require('express')
const app = express()

app.get('/produtos', (req, res, next) => {
    console.log('Middleware 1...') // Aqui, ao abrir o postaman e botar o endereço: http://localhost:3003/produtos, clicando em send ele vai me retornar esta mensagem
    next() 
})

app.get('/produtos', (req, res, next) => {
    res.send({ nome: 'Notebook', preco: 123.45 })
})

app.listen(porta, () => {
    console.log(`Servidor está executando na porta ${porta}`)
})