let altura = parseFloat(prompt("Digite o valor da altura:"));
let raio   = parseFloat(prompt("Digite o valor do raio:"));
let volume = 3.14 * (raio ** 2) * altura;

console.log(`O volume é igual a: ${volume.toFixed(2)}`);