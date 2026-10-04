const IMPOSTO    = 0.45; 
const PERCENTUAL = 0.28;   

let valor = parseFloat(prompt("Qual o valor de fábrica do carro? R$"));

let valorImposto    = valor * IMPOSTO;
let valorPercentual = valor * PERCENTUAL;

let custoFinal = valor + valorImposto + valorPercentual;

console.log(`Valor de fábrica: R$ ${valor.toFixed(2)}`);
console.log(`Imposto (45%): R$ ${valorImposto.toFixed(2)}`);
console.log(`Revenda (28%): R$ ${valorPercentual.toFixed(2)}`);
console.log(`Custo final ao consumidor: R$ ${custoFinal.toFixed(2)}`);