let nome = "Robinson";
let xp = 7452;
let elo;

if (xp <= 1000){
    elo = "Ferro";
}
else if (xp >= 1001 && xp <= 2000){
    elo = "Bronze";
}
else if (xp >= 2001 && xp <= 5000){
    elo = "Prata";
}
else if (xp >= 5001 && xp <= 7000){
    elo = "Ouro";
}
else if (xp >= 7001 && xp <= 8000){
    elo = "Platina";
}
else if (xp >= 8001 && xp <= 9000){
    elo = "Ascendente";
}
else if (xp >= 9001 && xp <= 10000){
    elo = "Imortal";
}
else {
    elo = "Radiante";
}

console.log ("O herói de nome: " + nome + " está no elo: " + elo);