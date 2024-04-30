const prompt = require("prompt-sync")();

// Lê o código de origem do produto
const codigoOrigem = parseInt(prompt("Digite o código de origem do produto:"));

// Tabela de origem
switch (codigoOrigem) {
    case 1:
        console.log("Origem: Sul");
        break;
    case 2:
        console.log("Origem: Norte");
        break;
    case 3:
        console.log("Origem: Leste");
        break;
    case 4:
        console.log("Origem: Oeste");
        break;
    case 5:
    case 6:
        console.log("Origem: Nordeste");
        break;
    case 7:
    case 8:
    case 9:
        console.log("Origem: Sudeste");
        break;
    case 10:
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
    case 20:
        console.log("Origem: Centro-Oeste");
        break;
    default:
        if (codigoOrigem >= 25 && codigoOrigem <= 50) {
            console.log("Origem: Nordeste");
        } else {
            console.log("Origem: Produto Importado");
}}