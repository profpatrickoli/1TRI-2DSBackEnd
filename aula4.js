// Condições
// Se ... senão
// if ... else

// crie uma condição para verificar primeiro 
// se a pessoa tem idade para dirigir, e
// depois verifique se ela possui CNH, após
// verifique se a pessoa tem um carro para dirigir


const idade = 15
const possuiCNH = false
const possuiCarro = false
/*
console.log("Você não possui idade para dirigir")
console.log("Você possui idade, mas não tem carteira")
console.log("Você possui idade, carteira, mas não tem um carro")
console.log("Parabéns, você tem tudo para dirigir!")
*/
if (idade >= 18){
    // código para VERDADEIRO
    if (possuiCNH == true) {
        if (possuiCarro == true) {
            console.log("Parabéns, você tem tudo para dirigir!")
        } else {
            console.log("Você possui idade, carteira, mas não tem um carro")
        }
    } else {
        console.log("Você possui idade, mas não tem carteira")
    }
} else {
    // código para FALSO
    console.log("Você não possui idade para dirigir")
}
