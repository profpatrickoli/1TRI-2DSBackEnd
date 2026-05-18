const produtos = require("./estoque.json")

function mostrar(){
    console.log("###### Lista de produtos ##########")
    produtos.forEach((p)=>{
        console.log(p.nome + 
        " - Preço: " +p.valor + 
        " - Quantidade: " + p.quantidade)
    })
}
mostrar()

function add_produto(){
    produtos.push({
        nome: "Macarrão",
        valor: 10.50,
        quantidade: 100,
        peso: 10,
        marca: "CCCCC",
        codigo: 1234
    })
}
add_produto()
mostrar()


function filtrar(){
    console.log("##### Produtos filtrados por valor menor que 25")
    const filtro = produtos.filter((produto)=> produto.valor < 25)
    console.log(filtro)
}
filtrar()
