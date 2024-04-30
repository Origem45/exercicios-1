// Função para verificar se um número é primo
function ehPrimo(n) {
    if (n <= 1) {
        return false; // Se o número for menor ou igual a 1, não é primo
    }
    let i = 2;
    // Loop para verificar se o número tem algum divisor além de 1 e ele mesmo
    while (i * i <= n) {
        if (n % i === 0) {
            return false; // Se o número for divisível por i, não é primo
        }
        i++;
    }
    return true; // Se não encontrou nenhum divisor, o número é primo
}

let n = 101; // Inicia a verificação a partir do número 101
let contagem = 0; // Contador para acompanhar a quantidade de números primos encontrados

// Loop para encontrar os 50 primeiros números primos maiores que 100
while (contagem < 50) {
    if (ehPrimo(n)) {
        console.log(n); // Imprime o número se ele for primo
        contagem++; // Incrementa o contador se o número for primo
    }
    n++; // Passa para o próximo número
}