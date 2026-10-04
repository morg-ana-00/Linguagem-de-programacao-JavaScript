let carrosVendidos = parseInt(prompt("Digite quantos carros foram vendidos:"));
let salario = parseFloat(prompt("Digite o seu salário: R$"));

let comissao = carrosVendidos * (salario * 0.05);
let salarioFinal = salario + comissao;

console.log(`Carros vendidos: ${carrosVendidos}`);
console.log(`Salário fixo: R$ ${salario.toFixed(2)}`);
console.log(`Comissão: R$ ${comissao.toFixed(2)}`);
console.log(`Salário final: R$ ${salarioFinal.toFixed(2)}`);