// EX 1

document.getElementById('atividade-1').addEventListener('click', () => {

    const produto = {

        descricao: 'Mouse',

        preco: 90

    };

    console.log(`Descrição: ${produto.descricao} \nPreço: ${produto.preco} reais`);

});

// EX 2

document.getElementById('atividade-2').addEventListener('click', () => {

    const notebook = {

        processador: 'i7',

        memoria: '16GB',

        preco: 5000,

        hd: '1TB',

        ssd: '256GB'

    };

    Object.keys(notebook).forEach((el) => {

        console.log(el, notebook[el]);

    });

});

// EX 3

document.getElementById('atividade-3').addEventListener('click', () => {

    const newList = [];
    let confirmacao = true;

        while(confirmacao) {

            const aluno = {

                nome: prompt('Nome do aluno:'),

                nota1: Number(prompt('Primeira nota:')),

                nota2: Number(prompt('Segunda nota:')),

            };

            confirmacao = confirm('Deseja continuar?');

            newList.push(aluno);

            console.log(newList);

        };

        let soma = 0;

        newList.forEach((el) => {

            soma = soma + (el.nota1 + el.nota2);

        });

        console.log(`Média: ${soma / newList.length}`);
});

// EX 4

document.getElementById('atividade-4').addEventListener('click', () => {

    const alunos = [

        {

            nome: 'Gabriel',

            idade: 25,

            skills: ['html', 'css', 'javascript']

        },

        {

            nome: 'Joao',

            idade: 27,

            skills: ['mysql', 'java']

        },

        {

            nome: 'Rafael',

            idade: 25,

            skills: ['react', 'node.js']

        },

        {

            nome: 'Maria',

            idade: 25,

            skills: ['html', 'css', 'javascript']

        },

        {

            nome: 'Carol',

            idade: 25,

            skills: ['html', 'css', 'javascript']

        }

    ];

    alunos.forEach(el => {

        const check = el.skills.filter(element => element === 'css');

        console.log(el.nome, check);

    });

});

// EX 5

document.getElementById('atividade-5').addEventListener('click', () => {

    let confirmacao = true;
    const desempregados = [];
    const salarioMenor = [];
    const salarioMaior = [];
    
        while(confirmacao) {
        
            const cadastro = {

            nome: prompt('Informe o nome:'),

            idade: Number(prompt('Informe a idade')),

            empregado: prompt('Está empregado?', 'sim ou nao'),

            salario: ''

            };

            if(cadastro.empregado === 'sim') {

                cadastro.salario = Number(prompt('Informe seu salário:'));

            };

            if(cadastro.empregado === 'nao') {

                desempregados.push(cadastro);

            } else if(cadastro.empregado === 'sim' && cadastro.salario <= 2500) {

                salarioMenor.push(cadastro);

            } else if(cadastro.empregado === 'sim' && cadastro.salario > 2500) {

                salarioMaior.push(cadastro);

            };

            confirmacao = confirm('Você deseja continuar?');

        };

        console.log(desempregados);
        console.log(salarioMenor);
        console.log(salarioMaior);

        
});
