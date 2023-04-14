// EX 1

document.getElementById('atividade-1').addEventListener('click', () => {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    let newList = [];

    for(let i = 0; i < list.length; i++) {

        if(list[i] % 2 === 0) {

           newList.push(list[i]);

        };

    };

    console.log(`Lista dos pares: ${newList}`);

});

// EX 2

document.getElementById('atividade-2').addEventListener('click', () => {

    const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    soma = 0;

    for(let i = 0; i < list.length; i++) {

        soma = soma + list[i];

    };

    console.log(`Valor total da soma: ${soma}`);

});

// EX 3

document.getElementById('atividade-3').addEventListener('click', () => {

    function item03() {

        let lista = [];

        for(let i = 1; lista.length < 4; i++) {

            let somaDivisores = 0;

            for(let contador = 1; contador < i; contador++) {

                if(i % contador === 0) {

                    somaDivisores += contador;

                };

            };

            if(somaDivisores === i) {

                lista.push(i);

            };

        };

        console.log(lista);

    };

    item03();

});

// EX 4

document.getElementById('atividade-4').addEventListener('click', () => {

    function uniaoDasListas() {

        const lista1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const lista2 = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
        // let newList = [...lista1, ...lista2];
        let newList = lista1.concat(lista2);

        console.log(newList);

    };

    uniaoDasListas();

});

// EX 5

document.getElementById('atividade-5').addEventListener('click', () => {

    function verificarValor() {

        const array = [1, 5, 10, 54, 15, 65, 87, 71, 0, 35, 21];
        const check = (el) => el === 35;

        console.log(array.some(check));

    };

    verificarValor();

});

// EX 6

document.getElementById('atividade-6').addEventListener('click', () => {

    function listarNomes() {

        const listaNomes = [];

        for(let i = 0; i < 5; i++) {

            let nomes = prompt('Digite um nome');
            listaNomes.push(nomes);
            console.log(listaNomes);
        };

        console.log(listaNomes.reverse());

    };

    listarNomes();

});

// ARRAYS 2

