const prompt = require("prompt-sync")();

// Lê as notas das duas avaliações do semestre
const nota1 = parseFloat(prompt("Digite a nota da primeira avaliação:"));
const nota2 = parseFloat(prompt("Digite a nota da segunda avaliação:"));

// Calcula a média semestral 
const soma = (nota1 + nota2);
const média_semestral = (soma / 2);

// Exibe a mensagem de parabenização e de reprovação no caso da nota ser menor do que a média exigida
if (média_semestral >= 6) {
    console.log ("PARABÉNS! Você foi aprovado")
} else { 
    console.log("VocÊ foi REPROVADO! Estude mais")
}