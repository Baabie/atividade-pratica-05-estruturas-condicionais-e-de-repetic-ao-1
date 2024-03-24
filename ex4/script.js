// 4. Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de desconto

// b. Mulheres ganham 13% de desconto

let nome = prompt('Digite o seu nome: ');
let sexo = prompt('Digite o seu sexo (M/F): ').toUpperCase();
let valorCompras = parseFloat(prompt('Digite o valor das compras: '));

let desconto;

if (sexo === 'M') {
    desconto = valorCompras * 0.05;
} else if (sexo === 'F') {
    desconto = valorCompras * 0.13;
}
console.log(`Nome: ${nome}`);
console.log(`Sexo: ${sexo}`);
console.log(`Valor das compras: ${valorCompras.toFixed(2)}`);
console.log(`Desconto: ${desconto.toFixed(2)}`);
console.log(`Valor a pagar: ${(valorCompras - desconto).toFixed(2)}`);
