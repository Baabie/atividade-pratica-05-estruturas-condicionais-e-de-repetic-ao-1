// 5. Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas.

let distancia = parseFloat(prompt('Qual distância deseja percorrer (Km)? '));

let precoPorKm;

if (distancia <= 200) {
    precoPorKm = 0.5;
} else {
    precoPorKm = 0.45;
}
const precoPassagem = distancia * precoPorKm;
console.log(`Preço da passagem: R$${precoPassagem.toFixed(2)}`)