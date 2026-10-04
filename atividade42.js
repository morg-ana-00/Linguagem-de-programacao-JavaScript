let F = parseFloat(prompt("Digite uma temperatura em Fahrenheit:"));
let C = (F - 32) * (5/9);

console.log(`Temperatura convertida em Celsius: ${C.toFixed(1)}°C`);