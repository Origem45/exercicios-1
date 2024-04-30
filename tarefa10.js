const prompt = require("prompt-sync")();

// lê um número inteiro
let número = prompt("Digite um número inteiro:"); 

// loop para repetir 10 vezes
for(let i = 0; i < 10; i++) { 
    // escreve o número na tela
    console.log(número); 
}