const fs = require('fs') // file system

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.17
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => { // Salvei no disco com writeFile // stringfy = conteudo persistir no arquivo. Conversão do objeto para formato textual json  // err = erro
    console.log(err || 'Arquivo salvo!') // Imprimo erro. Se não tiver erro, então imprimo o 'Arquivo salvo' // || = ou
})


/* O ARQUIVO QUE CRIEI DO CELULAR FOI CONVERTIDO PARA JSON, SE EU FOR NA PASTA ''''''ARQUIVO.JSON'''''' VEREI MEU OBJETO */