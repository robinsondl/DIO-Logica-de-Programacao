//Function Parametro muito utilizada no dia a dia

let resultado = soma(5, 10)

console.log(`O resultado dessa função é: ${resultado}`)

function soma(numA, numB){
    let somatorio = numA + numB
    return somatorio
}

//Function muito utilizada no dia a dia

let userName = getFirstName("Robinho vida loka")

console.log(`Seja bem vindo ${userName}`)

function getFirstName(name){
    let firstName = name.split(" ")[0]
    return firstName
}

//Function com splitChar

let userName2 = getFirstName("Robinho-vida-loka", "-")
console.log(`Seja bem vindo ${userName2}`)

let userName3 = getFirstName("Jumen vida loka", " ")
console.log(`Seja bem vindo ${userName3}`)

function getFirstName(name, splitChar){
    let firstName = name.split(splitChar)[0]
    return firstName
}