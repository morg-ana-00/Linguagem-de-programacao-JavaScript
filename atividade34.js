let conta   = parseInt(prompt("Digite o número da sua conta:"));
let saldo   = parseFloat(prompt("Digite o saldo: R$"));
let debito  = parseFloat(prompt("Digite o débito: R$"));
let credito = parseFloat(prompt("Digite o crédito: R$"));

let saldoAtual = saldo - debito + credito;

console.log(`Número da conta: ${conta}`);
console.log(`Saldo atual: R$ ${saldoAtual.toFixed(2)}`);

if (saldoAtual >= 0) {
   console.log("SALDO POSITIVO");
} else {
   console.log("SALDO NEGATIVO");
}