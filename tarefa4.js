const prompt = require("prompt-sync")();

// Lê as notas das duas avaliações do semestre
const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

// Calcula a média semestral 
const média_semestral = (nota1 + nota2) / 2;

// Exibe a mensagem de parabenização 
if (média_semestral >= 6) {
    console.log ("PARABÉNS! Você foi aprovado")}