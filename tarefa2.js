const prompt = require("prompt-sync")();

// Solicita ao usuário a quantidade de eleitores, votos em branco, nulos e válidos
const eleitores = prompt("Digite o número de eleitores:");
const votos_brancos = prompt("Digite o número de votos em branco:");
const votos_nulos = prompt("Digite o número de votos nulos:");
const votos_válidos = prompt("Digite o número de votos válidos:");

// Calcula o percentual de cada voto em relação a quantidade de eleitores
const percentual_votos_brancos = (votos_brancos * 100) / eleitores;
const percentual_votos_nulos = (votos_nulos * 100) / eleitores;
const percentual_votos_válidos = (votos_válidos * 100) / eleitores;

// Exibe o resultado no console
console.log(`O percentual de votos em branco é: ${percentual_votos_brancos}`); 
console.log(`O percentual de votos nulos é: ${percentual_votos_nulos}`);
console.log(`O percentual de votos válidos é: ${percentual_votos_válidos}`);