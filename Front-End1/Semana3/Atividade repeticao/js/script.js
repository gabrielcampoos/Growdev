// EX 1

// const listaAlturas = [1.70, 1.60, 1.80, 1.90, 1.65, 1.87, 1.75, 1.75, 1.65, 1.54, 1.83, 1.96, 1.74, 1.71, 1.99];
// let maiorAltura = 0;
// let menorAltura = listaAlturas[0];

// for(let i = 0; i < listaAlturas.length; i++) {

//     if(maiorAltura < listaAlturas[i]) {
//         maiorAltura = listaAlturas[i];

//     } else if(menorAltura > listaAlturas[i]) {
//         menorAltura = listaAlturas[i];
//     };
// };
// document.write(`A maior altura é: ${maiorAltura} metros e a menor é: ${menorAltura} metros`);
// console.log(maiorAltura, menorAltura);


// EX 2

// let pedro = 1.50;
// let lucas = 1.10;
// let cont = 0;

// while(pedro > lucas) {
//     pedro = pedro + 0.02;
//     lucas = lucas + 0.03;
//     cont++;
// };
// console.log(pedro, lucas, cont);
// document.write(`Vão se passar 40 anos para serem da mesma altura e 41 para Pedro ser maior que Lucas`);

// EX 3

// const numeroFornecido = prompt("Escolha um número:");
// const numeroIteracoes = prompt("Quantas iterações:");
// let index = 0;

// while(index <= numeroIteracoes) {
//     let result = numeroFornecido * index;
//     console.log(`${numeroFornecido} * ${index} = ${result}`);
//     index++;
// };

// EX 4

// const max = 250;
// const mult3 = 3;
// const mult5 = 5;
// let i = 1;

// while(i <= max) {
//     if(i % 3 === 0){
//         console.log(`${i} é divisivel por 3!`);
//     } else if(i % 5 === 0) {
//         console.log(`${i} é divisivel por 5`);
//     } else {
//         console.log(`Não é divisivel`);
//     };
//     i++;
// };

// EX 5

// let numeroEscolhido = parseInt(prompt("Escreva um número:"));

// for(let i = 0; i <= numeroEscolhido; i++) {
//     console.log(i);
// };

// EX 6

// let contagem;

// for(let i = 30; i >= 1; i--) {
//     for(let isPrimo = 30; isPrimo >= 1; isPrimo--) {
//         if(i % isPrimo === 0) {
//             contagem++;
//         };
//     };

//     if(contagem === 2) {
//         console.log(`[${i}]`);
//     } else {
//         console.log(i);
//         contagem = 0;
//     };
// };

// EX 7

// let numero = [7, 5, 10, 3, 22, 78, -50, 1, -35, 45];
// let soma = 0;
// let media;
// let count = 0;
// let countNegativo = 0;

// for(let i = 0; i < numero.length; i++) {
//     soma += numero[i];
// };

// console.log(soma);

// media = soma / numero.length;
// console.log(`A média dos números lidos é: ${media}`);

// for(let i = 0; i < numero.length; i++) {
//     if(numero[i] > 0) {
//         count++;
//     } else if(numero[i] < 0) {
//         countNegativo++;
//     };
// };

// console.log(`Existem ${count} números positivos e ${countNegativo} números negativos.`);

// let total = 0;
// for (const item of numero) {
//     total += item;
// };
// console.log(total);


// for (const item of numero) {
//     // usa o total em vez de valor.length
//     const perc = Math.round((count/ total) * 100);
//     console.log(`Porcentagem de positivos: ${perc}%`);
// };

// for (const item of numero) {
//     // usa o total em vez de valor.length
//     const percNegativo = Math.round((countNegativo / total) * 100);
//     console.log(`Porcentagem de positivos: ${percNegativo}%`);
// };