alert("Estrutura de Decisão Encadeada")

idade = parseInt(prompt("Digite a sua idade: "))

if (idade < 16){
    alert("Não pode votar")
}

else
    if  (idade < 18){
    alert("Voto Facultativo")
}  

else {
    alert("Voto Obrigatório")
}