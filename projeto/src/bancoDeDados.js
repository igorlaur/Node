const sequence = {
    _id: 1,
    get id() { return this._id++ } // Vai sempre retornar o próximo valor de id
}

const produtos = {}

function salvarProduto(produto){
    if (!produto.id) produto.id = sequence.id // Se o valor não tiver setado, cria um novo elemento produto em produtos
    produtos[produto.id] = produto
    return produto
}

function getProduto(id) {
    return produtos[id] || {}
}

function getProdutos() {
    return Object.values(produtos) // Retornar todos os valores de produtos[id]
}

function excluirProduto(id) {
    const produto = produtos[id]
    delete produtos[id]
    return produto
}

module.exports = { salvarProduto, getProduto, getProdutos, excluirProduto }
