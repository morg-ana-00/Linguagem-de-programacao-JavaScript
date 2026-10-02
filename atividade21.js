let combustivel = prompt("Bem vindo(a)! Digite (A) para álcool e (G) para gasolina: ");
let litro = parseFloat(prompt("Digite quantos litros deseja: "));

let vpago, vbruto;
let precolitro;

combustivel = combustivel.toUpperCase();

if (combustivel === "A"){
    precolitro = 2.90;
    vbruto = litro * precolitro;

    if (litro <= 20) {
        vpago = vbruto * (1 - 0.03); 
    }
    else {
        vpago = vbruto * (1 - 0.05);
    }

    console.log(`Foi abastecido `, + litro, ` litros de álcool`);
    console.log(`Valor Bruto: R$ ${vbruto.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${vpago.toFixed(2)}`);
}
else if (combustivel === "G") {
    precolitro = 3.30;
    vbruto = litro * precolitro;

    if (litro <= 20) {
        vpago = vbruto * (1 - 0.04);
    } else {
       vpago = vbruto * (1 - 0.06); 
    }

    console.log(`Foi abastecido `, + litro, ` litros de gasolina`);
    console.log(`Valor Bruto: R$ ${vbruto.toFixed(2)}`);
    console.log(`Valor a pagar: R$ ${vpago.toFixed(2)}`);
} else {
    console.log("Tipo de combustível inválido!");
}



