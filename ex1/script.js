// 1. Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo.

let idades = [];
let idade;
let somaIdades = 0;
let quantidadeAlunos = 0;

while (true) {
    idade = parseInt(prompt('Digite a idade do aluno ou 999 para parar: '));

    if (idade === 999) {
        break;
    }
    idades.push(idade);
    somaIdades += idade;
    quantidadeAlunos++;
}

if (quantidadeAlunos > 0) {
    const mediaIdade = somaIdades / quantidadeAlunos;
    console.log(`Total de alunos: ${quantidadeAlunos}`);
    console.log(`Média de idade: ${mediaIdade.toFixed(2)}`);
} else {
    console.log("Nenhum aluno")
}