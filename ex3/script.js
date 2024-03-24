// 3. Crie um algoritmo que leia o valor inicial da contagem, o valor final e
// o incremento, mostrando em seguida todos os valores no intervalo:
// Ex:
// Digite o primeiro Valor: 3
// Digite o último Valor: 10
// Digite o incremento: 2
// Contagem: 3 5 7 9 Acabou!

let primeiroValor = parseInt(prompt("Digite o primeiro valor: "));
let segundoValor = parseInt(prompt("Digite o último valor: "));
let incremento = parseInt(prompt("Digite o incremento: "));

for (let i = primeiroValor; i <= segundoValor; i += incremento) {
    console.log(i);
}

console.log("Acabou!");