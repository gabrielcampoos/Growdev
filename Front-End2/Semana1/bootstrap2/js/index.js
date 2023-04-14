const btnSim = document.getElementById('btnSim');
const btnNao = document.getElementById('btnNao');
const show = document.getElementById('show');

btnSim.addEventListener('click', () => {
    console.log('Exclusão de dados confirmada.');

    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-success position-absolute top-0');
    div.setAttribute('role', 'alert');

    const divMensagem = document.createElement('div');
    divMensagem.innerHTML = 'Apagado com sucesso!';

    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn-close m-3');
    btn.setAttribute('data-bs-dismiss', 'alert');
    btn.setAttribute('aria-label', 'Close');

    divMensagem.appendChild(btn);
    div.appendChild(divMensagem);

    show.appendChild(div);
});

btnNao.addEventListener('click', () => {
    console.log('Exclusão de dados não confirmada.');

    const div = document.createElement('div');
    div.setAttribute('class', 'alert alert-danger position-absolute top-0');
    div.setAttribute('role', 'alert');

    const divMensagem = document.createElement('div');
    divMensagem.innerHTML = 'Exclusão não confirmada!';

    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.setAttribute('class', 'btn-close m-3');
    btn.setAttribute('data-bs-dismiss', 'alert');
    btn.setAttribute('aria-label', 'Close');

    divMensagem.appendChild(btn);
    div.appendChild(divMensagem);

    show.appendChild(div);
});

const listaObjetos = [
    {
        codigo: '1',
        nome: 'Lavar louça',
        detalhamento: 'Lavar toda a louça meio dia',
    },
    {
        codigo: '2',
        nome: 'Lavar roupa',
        detalhamento: 'Lavar toda a roupa meio dia',
    },
    {
        codigo: '3',
        nome: 'Lavar casa',
        detalhamento: 'Lavar toda a casa meio dia',
    }
];

const btn1 = document.getElementById('btn-1');
const text1 = document.getElementById('text-1');

const btn2 = document.getElementById('btn-2');
const text2 = document.getElementById('text-2');

const btn3 = document.getElementById('btn-3');
const text3 = document.getElementById('text-3');

listaObjetos.forEach((element) => {
    if(element.codigo === '1') {
        btn1.innerHTML = `${element.nome} #${element.codigo}`;
        text1.innerHTML = element.detalhamento;
    } else if(element.codigo === '2') {
        btn2.innerHTML = `${element.nome} #${element.codigo}`;
        text2.innerHTML = element.detalhamento;
    } else {
        btn3.innerHTML = `${element.nome} #${element.codigo}`;
        text3.innerHTML = element.detalhamento;
    };
});

