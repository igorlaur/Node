const anonimo = process.argv.indexOf('-a') !== -1 // -a tem que ser diferente de -1
console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n')
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ')
    process.stdin.on('data', data => { // Entrar com dados a partir do teclado. Vou passar para a variável data numa função ao apertar enter
        const nome = data.toString().replace('\n', '') // salvar numa constate a variável digitada // remover o \n, substituindo por um espaço vazio para remover o enter que o usuário colocou
        
        process.stdout.write(`Fala ${nome}\n`)
        process.exit()
    }) 
}