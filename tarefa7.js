const prompt = require("prompt-sync")();

// lê os dois valores
const valor1 = parseFloat(prompt("Digite o Primeiro Valor:"));
const valor2 = parseFloat(prompt("Digite o Segundo Valor:"));

// Verifica e exibe os dois valores em ordem crescente
if (valor1 < valor2) { 
    console.log(`Valores em ordem crescente: ${valor1}, ${valor2}`)
} else {
    console.log(`Valores em ordem crescente: ${valor2}, ${valor1}`)
} S