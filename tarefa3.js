const prompt = require("prompt-sync")();

// Lê os quatro números inteiros do usuário
const numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
const numero2 = parseInt(prompt("Digite o segundo número inteiro:"));
const numero3 = parseInt(prompt("Digite o terceiro número inteiro:"));

// Realiza as operações
const resultado1 = numero1 + 25;
const resultado2 = numero2 * 3;
const resultado3 = numero3 * 0.12;
const resultado4 = numero1 + numero2 + numero3;

// Exibe os resultados
console.log(`Resultado 1: ${resultado1}`);
console.log(`Resultado 2: ${resultado2}`);
console.log(`Resultado 3: ${resultado3}`);
console.log(`Resultado 4: ${resultado4}`);