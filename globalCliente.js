require('./global')
console.log(MinhaApp.saudacao())

MinhaApp.nome = 'Eita' // Consigo mudar o nome do sistema porque coloquei como global
console.log(MinhaApp.nome)

MeuApp.nome1 = 'Olá' // Não consigo visualizar o 'Olá' pois coloquei o Freeze
console.log(MeuApp.nome1)
