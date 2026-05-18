// Modelo da lista de objetos para o projeto 2:
const produtos = [
    {
        nome: "Arroz",
        valor: 28.99,
        quantidade: 100,
        peso: 10,
        marca: "AAAAA",
        codigo: 1234
    },
    {
        nome: "Feijão",
        valor: 19.99,
        quantidade: 100,
        peso: 10,
        marca: "BBBB",
        codigo: 1234
    },
]
const dadosJSON = JSON.stringify(produtos)
const fs = require("fs")
fs.writeFileSync("produtos.json", dadosJSON)