const nome = "Marco"
let nivelDoHeroi = 999;

if(nivelDoHeroi < 1000) {
    console.log("O Herói de nome " + nome + " está no nível Ferro");
} else if (nivelDoHeroi >= 1001 && nivelDoHeroi <= 2000) {
    console.log("O Herói de nome " + nome + " está no nível Bronze"); 
} else if (nivelDoHeroi >= 2001 && nivelDoHeroi <= 5000 ) {
    console.log("O Herói de nome " + nome + " está no nível Prata"); 
} else if (nivelDoHeroi >= 5001 && nivelDoHeroi <= 7000) {
    console.log("O Herói de nome " + nome + "está no nível Ouro");
} else if (nivelDoHeroi >= 7001 && nivelDoHeroi <= 8000) {
    console.log("O Herói de nome " + nome + "está no nível Platina");
} else if (nivelDoHeroi >= 8001 && nivelDoHeroi <= 9000) {
    console.log("O Herói de nome " + nome + "está no nível Ascendente");
} else if (nivelDoHeroi >= 9001 &&  nivelDoHeroi <= 10000) {
    console.log("O Herói de nome " + nome + "está no nível Imortal");
} else{
    console.log("O Herói de nome " + nome + "está no nível Radiante");
}