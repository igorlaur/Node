// console.log(global)

global.MinhaApp = { // Se eu colocar = Object.freeze, significa que meu objeto está congelado e não pode mudar
    saudacao() {
        return 'Estou em todos os lugares'
    },
    nome: 'Sistema Laur'
}

global.MeuApp = Object.freeze({
    diga() {
        return 'Olá, tudo bem?'
    },
    nome1: 'Sistema Legal'
})