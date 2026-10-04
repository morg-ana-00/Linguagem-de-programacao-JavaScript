let primeiroTime = prompt("Digite o nome do primeiro time:");
let segundoTime  = prompt("Digite o nome do segundo time:");
let golPrimeiro  = parseInt(prompt(`${primeiroTime} marcou quantos gols?`));
let golSegundo   = parseInt(prompt(`${segundoTime} marcou quantos gols?`));

if (golPrimeiro > golSegundo) {
   console.log(`O vencedor é ${primeiroTime}!`);
} else if (golPrimeiro < golSegundo) {
   console.log(`O vencedor é ${segundoTime}!`);
} else {
   console.log("Houve um empate!");
}