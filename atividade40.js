let avaliacaoUM   = parseFloat(prompt("Digite a nota da primeira avaliação:"));
let avaliacaoDOIS = parseFloat(prompt("Digite a nota da segunda avaliação:"));

let media = (avaliacaoUM + avaliacaoDOIS) / 2;

console.log(`Média do aluno: ${media.toFixed(1)}`);

if (media >= 6) {
   console.log("Aluno aprovado!");
} else {
   console.log("Aluno reprovado!");
}