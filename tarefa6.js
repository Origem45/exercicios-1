const prompt = require("prompt-sync")();

// Lê os lados do triângulo
const ladoA = parseFloat(prompt("Digite o valor do lado A:"));
const ladoB = parseFloat(prompt("Digite o valor do lado B:"));
const ladoC = parseFloat(prompt("Digite o valor do lado C:"));

// Verifica se os lados formam um triângulo
if (ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB) {
   
    // Verifica o tipo de triângulo
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo equilátero: todos os lados são iguais.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles: possui dois lados iguais.");
    } else {
        console.log("Triângulo escaleno: todos os lados são diferentes.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.")}