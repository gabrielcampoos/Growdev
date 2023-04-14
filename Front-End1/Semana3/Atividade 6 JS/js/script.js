// EX 1
// let idade = true;
// let count = 0;
// let media = 0;

// if(idade === true) {
//     while(idade != 999) {
//         idade = Number(prompt(`Digite uma idade:`));
//         count++;
//         media += idade / count;
//         console.log(idade, media, count)
//     };

//     idade = false;

// };

// console.log(`Existem ${count - 1} alunos na sala e a media da idade é: ${media}`);

// EX 2

// let salario = 0;
// let sexo;
// let countSalarioMasculino = 0;
// let countSalarioFeminino = 0;

// for(let i = 1; i < 10; i++) {
//     salario += Number(prompt('Insira seu salário:'));
//     sexo = (prompt('Insira seu sexo:', 'M - Masculino | F - Feminino'));
//     confirm('Deseja continuar?');
    
//     if(sexo === 'M') {
//         countSalarioMasculino += salario;
//         salario = 0;
//     } else {
//         countSalarioFeminino += salario;
//         salario = 0;
//     };

//     console.log(countSalarioMasculino, countSalarioFeminino);
// };

// EX 3

// let valorInicial = Number(prompt('Insira o valor inicial:'));
// let valorFinal = Number(prompt('Insira o valor final:'));
// let incremento = Number(prompt('Insira o incremento:'));

// while(valorInicial < valorFinal) {
//     valorInicial += incremento;
    
//     if(valorInicial > valorFinal) {
//         valorInicial -= incremento;
//         break;
//     };
// };

// console.log(`${valorInicial}, Acabou!`);

// EX 4

// let nome = prompt('Qual seu nome:');
// let sexo = prompt('Qual seu sexo:', 'M - Masculino | F - Feminino');
// let valorCompras = prompt('Valor das compras:');

// if(sexo === 'M') {
//     valorCompras = parseFloat(valorCompras - (valorCompras * 5 / 100));
// } else {
//     valorCompras = parseFloat(valorCompras - (valorCompras * 13 / 100));
// };

// console.log(`O valor da compra é: ${valorCompras}`);

// EX 5

// let km = Number(prompt('Quantos Km pretende percorrer?'));

// if(km <= 200 ) {
//     km = km * 0.5;
// } else {
//     km = km * 0.45;
// };

// console.log(`O valor da viagem é: R$ ${km}`);

// EX 6

// let largura = Number(prompt('Qual a largura do terreno?'));
// let comprimento = Number(prompt('Qual o comprimento do terreno?'));
// let metrosQuadrados = largura * comprimento;

// console.log(`O terreno tem: ${metrosQuadrados} m²`);

// if(metrosQuadrados < 100) {
//     console.log('Terreno popular.');
// } else if(metrosQuadrados >= 100 && metrosQuadrados <= 500){
//     console.log(`Terreno master.`);
// } else {
//     console.log(`Terreno vip.`);
// };