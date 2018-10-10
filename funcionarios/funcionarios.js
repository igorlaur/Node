const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // axios vai pegar o arquivo do servidor para nós trabalharmos aqui no vscode

const chineses = f => f.pais === 'China'
const mulheres = f => f.genero === 'F'
const menorSalario = (func, funcAtual) => {
    return func.salario < funcAtual.salario ? func : funcAtual // Esse salário é menor do que o salário do funcionário atual? Se sim, então troca, bota o atual para ser funcionario com menor salário
}

axios.get(url).then(response => { // Obtém informação do servidor. Faremos requisição em cima da URL
    const funcionarios = response.data // dentro do atributo 'DATA' tenho a lista de funcionários
    // console.log(funcionarios) // Imprimir lista de funcionários

    // mulher chinesa com menor salário?
    const func = funcionarios
        .filter(chineses)
        .filter(mulheres)
        .reduce(menorSalario)

    console.log(func)
})