// EX 1

// const idade = Number(prompt("Qual sua idade?"));

// if(idade >= 18) {
//     console.log('Pode dirigir');
// } else {
//     console.log('Não pode dirigir');
// };

// EX 2

// const idade = Number(prompt("Qual sua idade?"));

// if(idade >= 18) {
//     const habilitado = confirm('Você é habilitado?');

//     if(habilitado) {
//         // console.log('Você pode dirigir!');
//         document.write('Você pode dirigir!');
//     } else {
//         // console.log('Você não pode dirigir!');
//         document.write('Você não pode dirigir!');
//     };
// } else {
//     // console.log('Você não pode dirigir!');
//     document.write('Você não pode dirigir!');
// };

// EX 3

// const dia = Number(prompt('Digite o número referente ao dia:'));

// if(dia === 1) {
//     console.log('Domingo');
// } else if(dia === 2) {
//     console.log('Segunda');
// } else if(dia === 3) {
//     console.log('Terça');
// } else if(dia === 4) {
//     console.log('Quarta');
// } else if(dia === 5) {
//     console.log('Quinta');
// } else if(dia === 6) {
//     console.log('Sexta');
// } else if(dia === 7) {
//     console.log('Sábado');
// } else {
//     console.log('Digite um número de 1 a 7');
// };

// EX 4

// const dia = Number(prompt('Digite o número referente ao dia:'));

// switch(dia) {
//     case 1:
//         console.log('Domingo');
//         break;
    
//     case 2:
//         console.log('Segunda');
//         break;

//     case 3:
//         console.log('Terça');
//         break;

//     case 4:
//         console.log('Quarta');
//         break;

//     case 5:
//         console.log('Quinta');
//         break;

//     case 6:
//         console.log('Sexta');
//         break;

//     case 7:
//         console.log('Sábado');
//         break;

//     default:
//         console.log('Escolha um número de 1 a 7');
// };

// EX 5

// for(let i = 1; i <= 10; i++) {
    
//     if(i % 2 === 0) {
//         console.log(`${i} É par`);
//     };
// };

// EX 6

// for(let i = 0; i <= 30; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     };
// };

// EX 7

// let soma = 0;
// let i = 11;

// do {

//     soma += i;
//     i++;
//     console.log(soma);

// } while(i <= 100);

// document.write(soma);

// EX 8

// const salario = 1903.98;

// if(salario <= 1903.98) {
//     document.write('Isento de IR');
// } else {
//     document.write('Tributado no IR');
// };

// EX 9

// let valor = Number(prompt('Digite um número inteiro:'));
// let divisores = 0;

// for(let i = 1; i <= valor; i++) {

//     if(valor % i === 0) {
//         divisores++;
//     };
// };

// if(divisores === 2) {
//     console.log(`${valor} é um número primo!`);
// } else {
//     console.log(`${valor} não é um número primo!`);
// };

// EX 10

// let sexo = Number(prompt(`Informe seu sexo:`, `1 para Homem, 2 para Mulher`));
// let altura = Number(prompt(`Informe sua altura:`));

// if(sexo == 1) {
//     let pesoIdeal = (72.7 * altura) - 58;
//     console.log(pesoIdeal.toFixed(2));
// } else {
//     pesoIdeal = (62.1 * altura) - 44.7;
//     console.log(pesoIdeal.toFixed(2));
// };

// EX 11

// const periodo = prompt(`Em qual periodo você estuda?`, `M - Matutino, V - Vespertino, N - Noturno`);

// switch(periodo) {
//     case 'M':
//         alert(`Bom dia!`);
//         break;
    
//     case 'V':
//         alert(`Boa tarde!`);
//         break;

//     case 'N':
//         alert(`Boa noite!`);
//         break;

//     default:
//         alert(`Insira M - Matutino, V - Vespertino, N - Noturno!`);
// };

// EX 12

// let idade = Number(prompt(`Informe sua idade:`));

// if(idade > 18 && idade < 67) {
//     console.log(`Você pode doar sangue.`);
// } else {
//     console.log(`Você não pode doar sangue.`);
// };

// EX 13

// let number = Number(prompt(`Digite um número:`));

// for(let i = 1; i <= number; i++) {
//     if(i % 2 != 0) {
//         console.log(i);
//     };
// };

// EX 14

// let number = Number(prompt(`Digite um número:`));
// let soma = number * 3;
// let cont = 0;

// while(cont < 500) {
//     cont += soma;
//     console.log(cont);
// };

// EX 15

// let valor1 = Number(prompt('Digite o primeiro valor:'));
// let valor2 = Number(prompt('Digite o segundo valor:'));
// let valor3 = Number(prompt('Digite o terceiro valor:'));

// if(valor1 < valor2 + valor3 && valor2 < valor1 + valor3 && valor3 < valor1 + valor2) {
    
//     console.log('Os lados formam um triângulo');

//     if(valor1 === valor2 && valor1 != valor3|| valor1 === valor3 && valor1 != valor2 || valor2 === valor3 && valor2 != valor1) {

//         console.log('Triângulo isósceles!');
    
//     } else if(valor1 != valor2 && valor2 != valor3 && valor1 != valor3) {
    
//         console.log('Triângulo escaleno!');
    
//     } else if(valor1 === valor2 && valor2 === valor3) {
    
//         console.log('Triângulo equilátero!');
    
//     };

// }  else {
//     console.log('Os lados não formam um triângulo');
// };

// EX 16

// let anoAtual = 2023;
// const anoNascimento = Number(prompt('Qual o ano de nascimento?'));
// let idade = anoAtual - anoNascimento;

// if(idade >= 18) {
//     console.log(`${idade} \nPode votar!`);
// } else {
//     console.log(`${idade} \nNão pode votar!`);
// };

// EX 17

// let votosBrancos = 300;
// let votosNulos = 100;
// let votosValidos = 500;
// let totalEleitores = votosValidos + votosNulos + votosBrancos;

// if(totalEleitores === totalEleitores) {
//     votosBrancos = parseFloat((votosBrancos * 100) / totalEleitores);
//     console.log(votosBrancos.toFixed(2));
//     votosNulos = parseFloat((votosNulos * 100) / totalEleitores);
//     console.log(votosNulos.toFixed(2));
//     votosValidos = parseFloat((votosValidos * 100) / totalEleitores);
//     console.log(votosValidos.toFixed(2));
// };

// EX 18

let valor = Number(prompt('Valor da compra:'));
let modalidade = prompt('Qual a modalidade?', 'vista, 2 ate 15');

if(modalidade === 'vista') {

    valor = valor - (valor * 2.5 / 100);
    console.log(`Valor da compra: R$ ${valor}`);

} else if(modalidade >= 2 && modalidade <= 5) {

    console.log(`Valor da compra: R$ ${valor}`);
    valor = valor / modalidade;
    console.log(`Parcelas: ${modalidade}X de ${valor.toFixed(2)}`);

} else if(modalidade >= 6 && modalidade <= 10) {

    valor = valor + (valor * 0.06 * modalidade);
    console.log(`Valor da compra: R$ ${valor}`);
    valor = valor / modalidade;
    console.log(`Parecelas: ${modalidade}X de ${valor.toFixed(2)}`);

} else if(modalidade >= 11 && modalidade <= 15) {

    valor = valor + (valor * 0.13 * modalidade);
    console.log(`Valor da compra: R$ ${valor}`);
    valor = valor / modalidade;
    console.log(`Parecelas: ${modalidade}X de ${valor.toFixed(2)}`);

} else {

    console.log('Insira a forma de pagamento!');

};