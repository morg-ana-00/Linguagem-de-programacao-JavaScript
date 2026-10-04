let valor1 = parseInt(prompt("Digite um número: "));
let valor2 = parseInt(prompt("Digite outro número: "));

if (valor1 > valor2) {
    console.log(`O valor ${valor1} é maior que o valor ${valor2}`);
} else if (valor1 < valor2) {
    console.log(`O valor ${valor1} é menor que o valor ${valor2}`);
} else {
    console.log("Os valores são iguais");
}
