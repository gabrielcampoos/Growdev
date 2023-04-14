const data = [
    {
    nome: 'Roger Medeiros',
    sexo: 'M',
    salario: 3250,
    },
    {
    nome: 'Carolina Silva',
    sexo: 'F',
    salario: 1200,
    },
    {
    nome: 'Cristina Avila',
    sexo: 'F',
    salario: 8100,
    },
    {
    nome: 'Gustavo Hoffman',
    sexo: 'M',
    salario: 5200.35,
    },
    {
    nome: 'Eva Trindade',
    sexo: 'F',
    salario: 2501,
    },
    {
    nome: 'Andre Mathias',
    sexo: 'M',
    salario: 1750,
    },
    {
    nome: 'Joice Castro da Silva',
    sexo: 'F',
    salario: 3350.25,
    }
];

// EX 1

console.log(`Quantidade total de pessoas: ${data.length}`);

// EX 2

console.log(`Quantidade de pessoas do sexo feminino: ${data.filter(pessoa => pessoa.sexo === 'F').length}`);

// EX 3

let soma = 0;

data.forEach(funcionario => {

    soma = soma + funcionario.salario;

});

console.log(`A soma total dos salários é: ${soma}`);

// EX 4

let media;
media = soma / data.length;

console.log(`A média dos salários é: ${(media).toFixed(2)}`);

// EX 5

let somaSalarioMasc = 0;
let contMasc = 0;

data.forEach(el => {

    if(el.sexo === 'M') {

        somaSalarioMasc += el.salario;
        contMasc++;

    };

});

console.log(`A soma dos salários masculinos é: ${somaSalarioMasc}`);

// EX 6

console.log(`A média dos salários masculinos é: ${(somaSalarioMasc / contMasc).toFixed(2)}`);

// EX 7

const check = data.some(el => el.salario > 7000);

console.log(check);

// EX 8

const checkName = data.findIndex(el => el.nome === 'Eva Trindade');

console.log(`Posição do objeto: ${checkName}`);

// EX 9

const checkSilva = data.filter(el => el.nome.includes('Silva'));

console.log(checkSilva);

// EX 10

const retornoMap = data.map(element => element);

console.log(retornoMap);