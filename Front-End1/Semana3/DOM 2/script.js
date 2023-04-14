const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.setAttribute('style', 'background-color: #e16e0e');
});

const titulos = document.querySelectorAll('.titulo-card');
titulos.forEach(titulo => {
    titulo.innerHTML = 'Meu card';
    titulo.style.color = '#2b385b';
    titulo.style.marginBottom = '1.5em';
});

const descricao = document.querySelectorAll('.descricao-card');
descricao.forEach(descricao => {
    descricao.innerHTML = 'Descrição modificada pelo Javascript';
    descricao.style.color = '#fff';
    descricao.style.width = '160px';
    descricao.style.marginBottom = '2em';
});

const btnEditar = document.querySelectorAll('.botao-editar');
btnEditar.forEach(btnEditar => {
    btnEditar.style.backgroundColor = '#008000';
    btnEditar.style.padding = '8px';
    btnEditar.style.borderRadius = '8px';
    btnEditar.style.border = 'none';
    btnEditar.style.color = '#fff';
    btnEditar.style.cursor = 'pointer';

    btnEditar.addEventListener('click', () => {
        alert('Clicou no editar!');
    });
});

const btnApagar = document.querySelectorAll('.botao-apagar');
btnApagar.forEach(btnApagar => {
    btnApagar.style.backgroundColor = '#FF0000';
    btnApagar.style.padding = '8px';
    btnApagar.style.borderRadius = '8px';
    btnApagar.style.border = 'none';
    btnApagar.style.color = '#fff';
    btnApagar.style.cursor = 'pointer';

    btnApagar.addEventListener('click', () => {
        const check = confirm('Tem certeza da exclusão?');
        check === true ? alert('Confirmado') : alert('Cancelou');
    });
});