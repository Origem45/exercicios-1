const prompt = require("prompt-sync")();

for(let j = 1; j <= 5; j++) {
    let N = prompt("Digite um número inteiro:");
    console.log(`Tabuada de ${N}:`);
    for(let i = 1; i <= N; i++) {
        console.log(`${i} x ${N} = ${i * N}`);
    }
}