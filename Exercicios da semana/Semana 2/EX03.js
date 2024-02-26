
const prompt = require("prompt-sync")({ sigint: true });


for (let i = 0; i < 5; i++) {
    const numero = parseInt(prompt(`Digite o ${i + 1}º número: `));
    numeros.push(numero);
}

for (let i = 0; i < 5; i++) {
    console.log(`O ${i + 1}º número é ${numeros[i]}`);
}