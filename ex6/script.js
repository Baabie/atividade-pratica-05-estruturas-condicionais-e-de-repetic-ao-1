// 6. Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m2. O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m2 = TERRENO POPULAR
// Entre 100m2 e 500m2 = TERRENO MASTER
// Acima de 500m2 = TERRENO VIP

let largura = parseFloat(prompt('Digite a largura do terreno: '));
let comprimento = parseFloat(prompt('Digite o comprimento do terreno: '));
let area = largura * comprimento;

console.log(`Area do terreno: ${area} m2`);

if (area < 100) {
    console.log('Terreno Popular');
} else if (area >= 100 && area <= 500) {
    console.log('Terreno Master');
} else {
    console.log('Terreno VIP');
}