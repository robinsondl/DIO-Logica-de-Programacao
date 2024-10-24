torrar("pão de forma")
torrar("pão integral")

function torrar(pao){
    let nome = "rob"
    console.log("torrada feita com " + pao)
    console.log(nome)
}

//console.log(pao)


main()

function main (){
    pay()
    card()
    loading()
    paid()
}

function pay (){
    console.log("Insira os dados do seu cartão")
}

function card (){
    console.log("lendo cartão de credito...")
}

function loading (){
    console.log("...processando pagamento...")    
}

function paid (){
    console.log("Pagamento realizado!")
}