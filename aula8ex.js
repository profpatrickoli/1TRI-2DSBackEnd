// PEGAR O PROJETO 1 E TRADUZIR PARA OBJETOS
// CRIAR MAIS 2 CHAVES (Exemplo: quantidade e peso)
// CRIAR 3 "Mostrar estoque", usando:
//      1 - while
//      2 - forEach
//      3 - for
// Exemplo de objeto:
// AULA 8 - Objetos (chave-valor)

const mercado = [
    {
        nome: "Arroz",
        preco: 28,
        quantidade: 100,
        peso: "5kg"
    },
    {
        nome: "Feijão",
        preco: 7,
        quantidade: 200,
        peso: "1kg"
    }
]

function mostrarESTOQUE1() {
    console.log("##### WHILE ######")
    let contador = 0 // contador de ínicio
    while(contador <mercado.length){ // condição de parada
        console.log(contador + " - " + mercado[contador].nome + " - R$ " + mercado[contador].preco + " - Quantidade: " + mercado[contador].quantidade)
        contador++ // incremento
    }
}
mostrarESTOQUE1()

function mostrarESTOQUE2(){
    console.log("#### FOR ####")
    for(c = 0; c < mercado.length; c++){
        console.log(c + " - " + mercado[c].nome + 
            " - R$ " + mercado[c].preco + 
            " - Quantidade: " + mercado[c].quantidade)
    }
}
mostrarESTOQUE2()

function mostrarESTOQUE3(){
    console.log("##### FOR EACH ######")
    mercado.forEach((produto) => {
        console.log(produto.nome + 
            " - R$ " + produto.preco + 
            " - Quantidade: " + produto.quantidade +
            " - Peso: " + produto.peso)
    })
}
mostrarESTOQUE3()