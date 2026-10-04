let mvelha = parseInt(prompt("Digite a idade da mulher mais velha: "));
let mnova = parseInt(prompt("Digite a idade da mulher mais nova: "));
let hvelho = parseInt(prompt("Digite a idade do homem mais velho: "));
let hnovo = parseInte(prompt("Digite a idade do homem mais novo: "));

if (hvelho === hnovo) {
    console.log("Erro! As idades são iguais");
} else if (mvelha === mnova) {
    console.log("Erro! As idades são iguais");
} else if (hvelho < hnovo) {
    console.log(`A idade do homem mais velho é menor que a do homem mais novo`);
} else if (mvelha < mnova) {
    console.log("A idade da mulher mais velha é menor que a da mulher mais nova");
} else if (mvelha > mnova) {
    console.log("A idade da mulher mais velha é maoir!");
} else if (hvelho > hnovo) {
    console.log("A idade do homem mais velho é maoior!");
} else {

    let soma = hvelho + mnova;
    let produto = hnovo + mvelha;

    console.log(`Soma (homem mais velho + mulher mais nova): ${soma}`);
    console.log(`Produto (homem mais novo * mulher mais nova): ${produto}`);
}
    
