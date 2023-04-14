// Ex 1

const peso = 40;
    const altura = 1.8;
    let status = '';
    const imc = peso/(altura*altura);

    if (imc < 18.5) {
        status = 'Você está abaixo da faixa de peso ideal';
    } else if(imc >= 18.5 && imc <= 24.99) {
        status = 'Você está dentro da faixa de peso ideal';
    } else {
        status = 'Você está acima da faixa de peso ideal';
    }
    console.log(imc);
    console.log(status);

    // Ex 2

    let num1 = 2;
    let num2 = 10;

    // Ex 3 
    
    // Faça um algoritmo que simule um caixa eletrônico. Nesse algoritmo
    // a conta do usuário deve ser criada já com um saldo positivo. O
    // usuário precisa informar a quantidade de dinheiro que deseja
    // retirar, esse valor deve ser um número positivo, múltiplo de 5 e
    // menor do que o saldo. Cada saque eletrônico cobra uma taxa de
    // R$4.50. Ao final deve ser informado o saldo da conta caso dê tudo
    // certo com o saque, e se o usuário informar um valor maior que o

    // saldo deve ser informado ao usuário que o mesmo não tem dinheiro
    // suficiente em conta para realizar o saque.
    // OBS: Na verificação se o valor do saque é maior que o saldo deve
    // ser considerado e também contabilizado o valor da taxa a ser
    // cobrada pelo saque. Ou seja, o valor a ser sacado somado ao valor
    // da taxa do saque não pode ser maior que o saldo disponível.

    // let conta = 3000;
    // const qtdSaque = 1000;
    // const taxa = 4.50;

    // if(qtdSaque + taxa <= conta && qtdSaque % 5 === 0 && qtdSaque > 0) {
    //     conta = (conta - qtdSaque) - taxa;
    //     document.write(`Você fez um saque de ${qtdSaque}, valor atual: ${conta}`);
    // } else if(qtdSaque % 5 != 0 || qtdSaque < 0) {
    //     document.write("Saque deve ser múltiplo de cinco ou positivo!");
    // } else {
    //     document.write  ("Você está pobre!");
    // };

    // Ex 4

    // const idade = 25;
    // const peso = 40;

    //     if (idade <= 12) {
    //         console.log('Categoria: Infantil');
    //     } else if (idade >= 13 && idade <= 16) {
    //         if (peso <= 40) {
    //             console.log('Categoria: Juvenil Leve');
    //         } else {
    //             console.log('Categoria: Juvenil Pesado');
    //         }
    //     }else if (idade >= 17 && idade <= 24) {
    //         if (peso <= 45) {
    //             console.log('Categoria: Sênior Leve');
    //         } else if (peso > 45 && peso <= 60) {
    //             console.log('Categoria: Sênior Médio');
    //         } else {
    //             console.log('Categoria: Sênior Pesado');
    //         }
    //     } else {
    //         console.log('Categoria: Veterano');
    //     }

    // Ex 5

// Escreva um programa que pergunte a velocidade de um carro. Caso
// ultrapasse 80Km/h, exiba uma mensagem dizendo que o usuário foi
// multado. Nesse caso, exiba o valor da multa, cobrando R$5 por cada
// km acima da velocidade permitida.

// const velocidade = 60;
// const velocidadePermitida = 80;
// let multa = (velocidadePermitida - velocidade) * 5;

// if(velocidade > velocidadePermitida) {
//     document.write(`Você ultrapassou o limite de velocidade em: ${velocidadePermitida - velocidade}, sua multa é de: ${multa} `);
// } else {
//     document.write(`Você está no limite de velocidade!`);
// };


