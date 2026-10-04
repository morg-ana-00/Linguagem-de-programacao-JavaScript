let estoque = parseInt(prompt("Digite a quantidade atual do estoque:"));
let max = parseInt(prompt("Digite a capacidade máxima do estoque:"));
let min = parseInt(prompt("Digite a capacidade mínima do estoque:"));

let media = (max + min) / 2;

if (estoque >= media) {
   console.log(`A quantidade média é: ${media}`);
   console.log("Não efetuar compra. Capacidade de estoque esgotada!");
} else {
   console.log(`A quantidade média é: ${media}`);
   console.log("Efetuar compra. Capacidade de estoque liberada!");
}