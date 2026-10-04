let salarioFixo = parseFloat(prompt("Digite o salário fixo: R$"));
let vendas      = parseFloat(prompt("Digite o valor total das vendas: R$"));

let comissao;

if (vendas <= 1500) {
   comissao = vendas * 0.03;
} else {
   comissao = (1500 * 0.03) + ((vendas - 1500) * 0.05);
}

let salarioTotal = salarioFixo + comissao;

console.log(`Salário fixo: R$ ${salarioFixo.toFixed(2)}`);
console.log(`Vendas: R$ ${vendas.toFixed(2)}`);
console.log(`Comissão: R$ ${comissao.toFixed(2)}`);
console.log(`Salário total: R$ ${salarioTotal.toFixed(2)}`);