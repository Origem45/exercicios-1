const prompt = require("prompt-sync")();

let numero = prompt("Digite um número inteiro:");

while (numero > 0) {
    if (numero % 2 === 0) {
        console.log(numero + " é PAR");
    } else {
        console.log(numero + " é ÍMPAR");
    }
    numero = prompt("Digite outro número inteiro:");
}

console.log("Algoritmo encerrado.");