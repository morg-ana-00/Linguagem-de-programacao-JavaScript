let nome = prompt("Digite o seu nome: ");
let sexo = prompt("Digite o seu sexo (M) Masculino e (F) Feminino");
let altura = parseFloat(prompt(`${nome}, digite a sua altura: `));

let pesoIdeal;

if (sexo === "M"){
    pesoIdeal = (72.7 * altura) - 58;
} else if (sexo === "F") {
    pesoIdeal = (62.1 * altura) - 44.7;
} 
else {
    pesoIdeal = null;
}

if (pesoIdeal !== null) {
    console.log(`${nome}, o seu peso ideal é: ${pesoIdeal.toFixed(2)}`)
} else {
    console.log("Sexo Inválido!!");
}
    
