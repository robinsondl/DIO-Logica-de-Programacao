let rank = saldoRank(10, 3);
let elo;

if (rank <= 10){
    elo = "Ferro";
}
else if (rank >= 11 && rank <= 20){
    elo = "Bronze";
}
else if(rank >= 21 && rank <= 50){
    elo = "Prata";
}
else if(rank >= 51 && rank <= 80){
    elo = "Ouro";
}
else if(rank >= 81 && rank <= 90){
    elo = "Diamante";
}
else if(rank >= 91 && rank <= 100){
    elo = "Lendário"
}
else {
    elo = "Imortal";
}

console.log(`O herói tem o saldo de ${rank} pontos e está no elo ${elo}!`)

function saldoRank(saldo1, saldo2){
    let calculo = saldo1 - saldo2;
    return calculo;
}