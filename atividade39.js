let comecoDeJogo = parseInt(prompt("Digite a hora de início do jogo (0-23):"));
let terminando   = parseInt(prompt("Digite a hora de término do jogo (0-23):"));

let tempo;

if (terminando > comecoDeJogo) {
   tempo = terminando - comecoDeJogo;
} else {
   tempo = (24 - comecoDeJogo) + terminando;
}

console.log(`O jogo teve duração de ${tempo} horas.`);

if (tempo < 24) {
   console.log("A duração do jogo está dentro do limite.");
} else {
   console.log("A duração passou do tempo limite!");
}