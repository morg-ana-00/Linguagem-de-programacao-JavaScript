let morango = parseFloat(prompt("Quantos kilos de morango você deseja? "));
let maca = parseFloat(prompt("Quantos kilos de maçã você deseja? "));

let precomorango;
let precomaca; 

if (morango <= 5) {
    precomorango = morango * 2.50;
} else {
    precomorango = morango * 2.20;
}

if (precomaca <= 5); {
    precomaca = maca * 1.80;
} else {
    precomaca = maca * 1.50;
}

let valortotal = precomorango + precomaca;
let pesototal = morango + maca;

if (pesototal > 8 || valortotal > 25) {
    valortotal = valortotal * 0.90;
}

console.log("-----------------");
console.log("     Carrinho    ");
console.log("-----------------");
console.log(`Maçã: ${maca}kg - R$ ${precomaca.toFixed(2)}`);
console.log(`Morango: ${morango}kg - R$ ${precomorango.toFixed(2)}`);
console.log(`Peso total: ${pesototal}kg`);
console.log(`Preço: R$ ${valortotal.toFixed(2)}`);