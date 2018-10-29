// middleware pattern (chain of responsability) // Exemplo: Posso pegar relatorio, fazer uma listagem de produtos vencidos e sugerir um tratamento para empresa
const passo1 = (ctx, next) => {// objeto, função
    ctx.valor1 = 'mid1'
    next()
}

const passo2 = (ctx, next) => {
    ctx.valor2 = 'mid2'
    next()
}

const passo3 = (ctx) => ctx.valor3 = 'mid3'

const exec = (exec, ...middlewares) => { // Executar minha função
    const execPasso = indice => { // Execute passo do indice 1, 2....
        middlewares && indice < middlewares.length && middlewares[indice](ctx, () => execPasso(indice + 1)) // Verificar se array está citado // Verifico se array/middlewares e indice são menores que o tamanho do array/middlewares, se for menor que o array ele chama o indice e executa indice + 1
        }
    execPasso(0)
}

// Executando...
const ctx = {} // Crio função vazia
exec(ctx, passo1, passo2, passo3) // Executo
console.log(ctx) // Imprimo o contexto