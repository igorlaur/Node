const moduloA = require('../../moduloA') // importo
console.log(moduloA.ola)

const saudacao = require('../../../node_modules/saudacao') // se eu quisesse, poderia colocar o caminho direto 'saudacao' dizendo apenas nome do módulo
console.log(saudacao.ola)

const c = require('./pastaC') // index é padrão, por isso já chama
console.log(c.ola2)

const abraco = require('./pastaC/abraco')
console.log(abraco.abraco)

const http = require('http') // apenas botei o caminho relativo
http.createServer((req, res) => { // função callback - requisição e resposta
    res.write('Bom dia!') // escreva
    res.end() // finaliza requisição
}).listen(8080) // escolho a porta para escutar
