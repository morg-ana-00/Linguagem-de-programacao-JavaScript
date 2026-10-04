let salario = parseFloat(prompt("Digite o seu salário: R$"));
let reajuste = parseFloat(prompt("Digite o percentual de reajuste: "));

let aumento = salario * reajuste /100;
let salarionovo = salario + aumento;

console.log(`Salário: R$ ${salario.toFixed(2)}`);
console.log(`Reajuste: ${reajuste}%`);
console.log(`Aumento: R$ ${aumento.toFixed(2)}`);
console.log(`Salário com reajuste salarial: R$ ${salarionovo.toFixed(2)}`);
