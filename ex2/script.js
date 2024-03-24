// 2. Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salario;
let sexo;
let totalSalariosHomens = 0;
let totalSalariosMulheres = 0;
let continuar = true;

while (continuar) {
    salario = parseFloat(prompt('Digite o salário: '));
    sexo = prompt('Digite o seu sexo (M/F): ').toUpperCase();
    if (sexo === 'M') {
        totalSalariosHomens += salario;
    } else if (sexo === 'F') {
        totalSalariosMulheres += salario;
    } 

    let resposta = prompt('Deseja continuar [S/N]? ').toUpperCase();
    if (resposta !== 'S') {
        continuar = false;
    }
}
console.log(`Total de salarios dos homens: ${totalSalariosHomens.toFixed(2)}`);
console.log(`Total de salarios das mulheres: ${totalSalariosMulheres.toFixed(2)}`)