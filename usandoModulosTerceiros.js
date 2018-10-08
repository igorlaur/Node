const _ = require('lodash') // requerer determinado módulo. Assim, ele espera encontrar o arquivo node_modules/lodash/index.js
// Ele que faz carregar todas as bibliotecas a partir deste arquivo
setInterval(() => console.log(_.random(1, 1000)), 2000) // _ executa lodash = de 1 a 1000 a cada 2 segundos
