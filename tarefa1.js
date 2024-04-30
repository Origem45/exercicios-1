const prompt = require("prompt-sync")();

// Solicita ao usuário a temperatura em graus Celsius
const celsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Calcula a temperatura em graus Fahrenheit usando a fórmula de conversão
const fahrenheit = (1.8 * celsius) + 32;

// Exibe o resultado no console
console.log(`A temperatura em graus Fahrenheit é: ${fahrenheit.toFixed(2)}°F`);