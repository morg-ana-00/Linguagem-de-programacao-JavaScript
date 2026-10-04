let A = true;
let B = true;
let C = true;

let respostaA = (A && B) || (A !== B);
let respostaB = (B || A) && (B && C);
let respostaC = A || C && B !== A && !B;

console.log(`a) (A e B) ou (A ou B) = ${respostaA}`);
console.log(`b) (A ou B) e (A e C) = ${respostaB}`);
console.log(`c) A ou C e B xou  A e nao B = ${respostaC}`);