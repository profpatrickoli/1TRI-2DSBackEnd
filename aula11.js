// Funções de listas
const produtos = require("./produtos.json")
produtos.push({
        nome: "Macarrão",
        valor: 10.50,
        quantidade: 100,
        peso: 10,
        marca: "CCCCC",
        codigo: 1234
    })

// Filtrar produtos
console.log("##### Produtos filtrados por valor menor que 25")
const filtro = produtos.filter((produto)=> produto.valor < 25)
console.log(filtro)

// Alterar todos os produtos
console.log("##### Produtos com 15% de desconto: #####")
const desconto = produtos.map((produto)=> {
    return {...produto, valor: produto.valor * 0.85}}
)
console.log(desconto)

// Encontrar um produto
console.log("##### Produto encontrado pelo código #####")
const encontrar = produtos.find((produto) => produto.codigo == 1234)
console.log(encontrar)