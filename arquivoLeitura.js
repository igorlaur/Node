const fs = require('fs')

const caminho = __dirname + '/arquivo.json'

// sincrono... // NÃO RECOMENDADO pois é pesado
const conteudo = fs.readFileSync(caminho, 'utf-8') // Ler um arquivo de forma Síncrono
console.log(conteudo)

// assiíncrono... // Só quando arquivo tiver carregado será disparado a callback // RECOMENDADO
fs.readFile(caminho, 'utf-8', (err, conteudo) => { // callback erro e conteudo
    const config = JSON.parse(conteudo) // Tenho que transformar em objeto
    console.log(`${config.db.host}:${config.db.port}`)
})

const config = require('./arquivo.json')
console.log(config.db)

fs.readdir(__dirname, (err, arquivos) => {
    console.log('Conteúdo da pasta...')
    console.log(arquivos) // Array de Todos os arquivos que pertence ao meu diretório
})