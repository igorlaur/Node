console.log(module.exports === this)
console.log(module.exports === exports)

this.a = 1 // Quer dizer que "a" estará visível fora do arquivo
exports.b = 2 // também exporta
module.exports.c = 3 // também

exports = null
console.log(module.exports)

exports = { // Não é correta, portanto não será retornado
    nome: 'Teste'
}

// Será retornado, module.exports é a forma correta
console.log(module.exports)
module.exports = { publico: true } // Forma correta para exportar