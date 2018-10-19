console.log(this === global) // This não aponta para global e sim apra module exports, fora de uma função
console.log(this === module)
console.log(this === module.exports)
console.log(this === exports)

function logThis(){
    console.log('Dentro de uma função...')
    console.log(this === exports) // Dentro de uma função o This não aponta para exports mas fora sim
    console.log(this === module.exports)
    console.log(this === global) // This aponta para Global dentro de uma função 
}

logThis()