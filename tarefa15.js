const prompt = require("prompt-sync")();

// Inicializa a variável 'somaPonderada' com 0. Esta variável será usada para armazenar a soma ponderada dos números decimais que o usuário digitar.
let somaPonderada = 0;

// Inicializa a variável 'somaPesos' com 0. Esta variável será usada para armazenar a soma dos pesos dos números decimais que o usuário digitar.
let somaPesos = 0;

// Usa a função 'prompt' para solicitar ao usuário que digite um número decimal. A função 'parseFloat' é usada para converter a entrada do usuário em um número decimal. O resultado é armazenado na variável 'numero'.
let numero = parseFloat(prompt("Digite um número decimal:"));

// Usa a função 'prompt' para solicitar ao usuário que digite o peso do número decimal. A função 'parseFloat' é usada para converter a entrada do usuário em um número decimal. O resultado é armazenado na variável 'peso'.
let peso = parseFloat(prompt("Digite o peso do número:"));

// Inicia um loop 'while' que continua até que o usuário insira '0' para o número.
while (numero !== 0) {
    // Adiciona o produto do número e seu peso à variável 'somaPonderada'.
    somaPonderada += numero * peso;

    // Adiciona o peso à variável 'somaPesos'.
    somaPesos += peso;

    // Solicita ao usuário que digite outro número decimal e armazena o valor na variável 'numero'.
    numero = parseFloat(prompt("Digite outro número decimal:"));

    // Se o número digitado pelo usuário não for '0', solicita ao usuário que digite o peso do número decimal e armazena o valor na variável 'peso'.
    if(numero !== 0){
        peso = parseFloat(prompt("Digite o peso do número:"));
    }
}

// Verifica se a 'somaPesos' é diferente de '0'. Isso é feito para evitar a divisão por zero na próxima linha.
if (somaPesos !== 0) {
    // Se a 'somaPesos' for diferente de '0', calcula a média ponderada dos números digitados dividindo a 'somaPonderada' pela 'somaPesos'. O resultado é armazenado na variável 'mediaPonderada'.
    let mediaPonderada = somaPonderada / somaPesos;

    // Imprime a média ponderada no console.
    console.log("A média ponderada dos números digitados é " + mediaPonderada);
} else {
    // Se a 'somaPesos' for '0' (ou seja, se o usuário não tiver digitado nenhum número antes de digitar '0'), imprime a mensagem "Nenhum número foi digitado." no console.
    console.log("Nenhum número foi digitado.");
}