alert("Programa conta de dias vividos")

ano = parseInt(prompt("Digite quantos anos você tem: "))
mes = parseInt(prompt("Digite quantos meses passaram do seu aniversário: "))
dias = parseInt(prompt("Digite quantos dias passaram desde o último aniversário: "))

quantidadeDedias = ano * 365 + mes * 30 + dias

alert("Você possuí" + quantidadeDedias + "de dias vivídos.")