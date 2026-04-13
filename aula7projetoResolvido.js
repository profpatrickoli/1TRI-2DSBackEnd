
const produtos = ["Arroz", "Feijão", "Café", "Açúcar", "Óleo", "Leite", "Ovos", "Pão", "Manteiga", "Papel Higiênico"]
const valores = ["R$ 28,00", "R$ 8,50", "R$ 16,00", "R$ 4,50", "R$ 6,50", "R$ 5,00", "R$ 18,00", "R$ 9,00", "R$ 12,00", "R$ 22,00"]
const quantidade = []
const peso = []
const codBarras = []

const mercado = [produtos, valores, quantidade, peso, codBarras]
console.log(mercado[1][3])

function mostrarESTOQUE() {
    let contador = 0
  while(contador <produtos.length){
      console.log(contador + " - " + produtos[contador] + " - " + valores[contador])
contador++
  }
}

function adicionarPRODUTO(nome, preco) {
    produtos.push("Macarrão")
    valores.push("R$ 17,00")
}

function remorerPRODUTO(indice){
    produtos.splice(indice, 1)
    valores.splice(indice, 1)
}


mostrarESTOQUE()

adicionarPRODUTO()

console.log("-----------------------------------")

mostrarESTOQUE()

remorerPRODUTO(0)

console.log("-----------------------------------")

mostrarESTOQUE()