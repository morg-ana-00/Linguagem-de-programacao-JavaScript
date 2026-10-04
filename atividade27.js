let user = parseFloat(prompt("Digite o número de usuário: "));

if (user === 1234) {
    let senha = parseInt(prompt("Digite a senha: "));

    if (senha === 9999) {
        console.log("Acesso liberado");
    } else {
        console.log("Senha inválida");
    }
} else {
    console.log("Usuário inválido!");
}