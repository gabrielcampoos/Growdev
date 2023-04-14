// EX 1

document.getElementById('atividade-1').addEventListener('click', () => {

let nota1 = Number(prompt('Informe a primeira nota:'));
let nota2 = Number(prompt('Informe a segunda nota:'));
let nota3 = Number(prompt('Informe a terceira nota:'));
let letra = prompt('Informe a letra:');

function calcularMedia(nota1, nota2, nota3, letra) {

    let media;
    if(letra === 'A' || letra === 'a') {
        media = (nota1 + nota2 + nota3) / 3;
        console.log(media);
    } else {
        media = (nota1 * 5 + nota2 * 3 + nota3 * 2) / 10;
        console.log(media);
    };

};

calcularMedia(nota1, nota2, nota3, letra);

});

// EX 2

document.getElementById('atividade-2').addEventListener('click', () => {

    let valor = Number(prompt('Insira um valor inteiro:'));

    function validarValor(valor) {

        if(valor > 0) {

            if(valor % 2 === 0) {

                alert(`${valor} é um número par!`);
                
            } else {

                alert(`${valor} é um número ímpar!`);

            };

        } else {

            alert('Digite um valor inteiro!');

        };

    };

    validarValor(valor);

});

// EX 3

document.getElementById('atividade-3').addEventListener('click', () => {

    let valor = Number(prompt('Insira um valor inteiro:'));

    function ePrimo(valor) {

        let divisores = 0;

        for(let i = 1; i <= valor; i++) {

            if(valor % i === 0) {

                divisores++;
                console.log(valor, divisores)

            };

        };

        if(divisores === 2) {

            alert(`${valor} é um número primo!`);

        } else {

            alert(`${valor} não é um número primo!`);

        };

    };

    ePrimo(valor);

});

// EX 4

document.getElementById('atividade-4').addEventListener('click', () => {

let tempo = Number(prompt('Digite quanto tempo tem de duração:'));

function calcularTempo(tempo) {
  
    let horas = 0;
    let minutos = 0;
    let segundos = 0;

    while(tempo >= 3600) {

        tempo = tempo - 3600;
        horas++;

    };

    while(tempo >= 60) {

        tempo = tempo - 60;
        minutos++;

    };

    segundos = parseInt(tempo);

    console.log(`${horas} Horas, ${minutos} Minutos, ${segundos} Segundos`);

};

calcularTempo(tempo);

});

// EX 5

document.getElementById('atividade-5').addEventListener('click', () => {

    let numero = Number(prompt('Digite um numero:'));

    function numeroPerfeito(numero) {

        let divisores = 0;

        for(let i = 0; i < numero; i++) {

            if(numero % i === 0) {

                divisores = i;
                console.log(divisores)

            };

        };

        if(divisores + divisores === numero) {

            alert(`${numero} é um número perfeito.`);

        } else {

            alert(`${numero} não é um número perfeito.`);

        };

    };

    numeroPerfeito(numero)

});

// EX 6

document.getElementById('atividade-6').addEventListener('click', () => {

    function acessoAoSite() {

        alert('Bem vindo ao site');
        
    };

    acessoAoSite();

});

// EX 7

document.getElementById('atividade-7').addEventListener('click', () => {

    function mostrarMensagem() {

        let saveTheDate = 'saveTheDate';
        
        console.log(`Acesso à aplicação ${saveTheDate}`);

        alert(`Bem vindo à aplicação ${saveTheDate}`);

    };

    mostrarMensagem();

});

// EX 8

document.getElementById('atividade-8').addEventListener('click', () => {

    let num = Number(prompt('Digite um número:'));

    if(parseInt(num)) {

        mostrarDobro(num);

        function mostrarDobro(num) {

            alert(`O dobro de ${num} é: ${num * 2}`);

        };

    } else {

        alert('Digite um número inteiro!');

    };

});

// EX 9

document.getElementById('atividade-9').addEventListener('click', () => {
    
    let nota1 = Number(prompt('Insira a primeira nota:'));
    let nota2 = Number(prompt('Insira a segunda nota:'));
    let nota3 = Number(prompt('Insira a terceira nota:'));
    let nome = prompt('Insira o nome do aluno:');

    function calcularMedia(nota1, nota2, nota3, nome) {

        alert(`${nome} sua média é: ${parseInt((nota1 + nota2 + nota3) / 3)}`);

        console.log(`nota 1: ${nota1} \nnota 2: ${nota2} \nnota 3: ${nota3}`);

    };

    calcularMedia(nota1, nota2, nota3, nome);

});
