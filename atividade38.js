let f = parseFloat(prompt("Digite uma temperatura em Fahrenheit:"));

let temperatura = f - 32;
let c = (temperatura * 5) / 9;

console.log(`A temperatura em Celsius é: ${c.toFixed(1)}°C`);