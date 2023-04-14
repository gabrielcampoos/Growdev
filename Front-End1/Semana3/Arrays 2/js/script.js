// EX 1

document.getElementById('atividade-1').addEventListener('click', () => {

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

    let index = salarios.findIndex(salarios => salarios > 7500.00);

    console.log(index);

});

// EX 2

document.getElementById('atividade-2').addEventListener('click', () => {

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];
    
    salarios.sort((a, b) => {

        if(a > b) {

            return 1;

        } else if(a < b) {

            return -1;

        } else {

            return 0;

        };

    });

    console.log(salarios);

});

// EX 3

document.getElementById('atividade-3').addEventListener('click', () => {

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

    salarios.sort((a, b) => {

        if(a > b) {

            return -1;

        } else if(a < b) {

            return 1;

        } else {

            return 0;

        };

    });

    console.log(salarios);

});

// EX 4

document.getElementById('atividade-4').addEventListener('click', () => {

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

    const check = (el) => el > 10000.00;

    console.log(salarios.some(check));

});

// EX 5

document.getElementById('atividade-5').addEventListener('click', () => {

    const salarios = [5000.00, 5460.50, 3452.00, 6900.00, 7590.10, 8012.99, 1290.00, 15000.00];

    const newList = salarios.filter(salario => salario > 8000.00);

    console.log(newList);

});

// ATIVIDADE 2
// EX 1

document.getElementById('atividade-6').addEventListener('click', () => {

    const rainbow = ["Vermelho", "Laranja", "Preto", "Azul"];

    rainbow.splice(2, 1);
    
    rainbow.splice(2, 0, 'Amarelo', 'Verde');
    
    rainbow.splice(5, 0, 'Roxo');

    console.log(rainbow);

});