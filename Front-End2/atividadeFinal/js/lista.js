let listaRecados = [];
const formAdicionar = document.getElementById('idFormAdicionar');
const floatingInputGrid = document.getElementById('floatingInputGrid');
const row = document.getElementById('listaRecados');
const modalAdicionar = new bootstrap.Modal('#modalAdicionar');

if(localStorage.hasOwnProperty('usuarios')) {
    usuarios = JSON.parse(localStorage.getItem('usuarios'));
};

usuarios.forEach(element => {
    if(element.id === element.id) {
        floatingInputGrid.value = element.email;
    };
});

formAdicionar.addEventListener('submit', (ev) => {
    ev.preventDefault();
    
    const tituloRecado = document.getElementById('tituloRecado');
    tituloRecado.value = 'Recado';
    const recado = document.getElementById('recado').value;

    const novoRecado = {
        id: new Date().getTime(),
        tituloRecado: tituloRecado.value,
        recado,
    };

    listaRecados.push(novoRecado);
    formAdicionar.reset();
    adicionarRecado(novoRecado);
    modalAdicionar.hide();
});

function adicionarRecado(novoRecado) {
/* 
    <div class="row">
        <div class="card m-5 col-4">
            <h5 class="card-header">Nome</h5>
            <div class="card-body">
                <h5 class="card-title">Recado</h5>
                <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <div class="btn-group" role="group" aria-label="Basic example">
                    <button type="button" class="btn btn-primary m-1"><i class="bi bi-pencil-square"></i></button>
                    <button type="button" class="btn btn-primary m-1"><i class="bi bi-trash3"></i></button>
                </div>
            </div>
        </div>
    </div><!-- container -->
*/
    const col = document.createElement('div');
    col.setAttribute('class', 'row');

    const card = document.createElement('div');
    card.setAttribute('class', 'card m-5 col-11');

    const h5 = document.createElement('h5');
    h5.setAttribute('class', 'card-header');
    h5.innerHTML = `ID do recado: ${novoRecado.id}`;

    const cardBody = document.createElement('div');
    const cardTitle = document.createElement('h5');
    const cardText = document.createElement('p');
    const btnGroup = document.createElement('div');
    const btnEditar = document.createElement('button');
    const btnExcluir = document.createElement('button');

    cardBody.setAttribute('class', 'card-body');

    cardTitle.setAttribute('class', 'card-title');
    cardTitle.innerHTML = novoRecado.tituloRecado;

    cardText.setAttribute('class', 'card-text');
    cardText.innerHTML = novoRecado.recado;

    btnGroup.setAttribute('class', 'btn-group')
    btnGroup.setAttribute('role', 'group')
    btnGroup.setAttribute('aria-label', 'Basic example');

    btnEditar.setAttribute('class', 'btn btn-primary m-1');
    btnEditar.setAttribute('type', 'button');
    btnEditar.innerHTML = `<i class="bi bi-pencil-square"></i>`;

    btnExcluir.setAttribute('type', 'button');
    btnExcluir.setAttribute('class', 'btn btn-primary m-1');
    btnExcluir.innerHTML = `<i class="bi bi-trash3"></i>`;

    btnGroup.appendChild(btnEditar);
    btnGroup.appendChild(btnExcluir);

    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    cardBody.appendChild(btnGroup);

    card.appendChild(h5);
    card.appendChild(cardBody);

    col.appendChild(card);

    row.appendChild(col);
};
