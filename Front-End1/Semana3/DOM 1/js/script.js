document.getElementById('btn').addEventListener('click', () => {
    const nomeDoUsuario = prompt('Digite seu nome:');
    document.querySelector('p').innerHTML = `E ai ${nomeDoUsuario}! Você está deixando o seu site
    dinâmico.`;
});

let contClick = 0;

document.getElementById('btn-1').addEventListener('click', () => {
    contClick++;
    document.querySelector('#cont').style.display = 'block';
    document.querySelector('#cont').innerHTML = `Contador está com ${contClick} cliques`;
});

document.getElementById('btn-2').addEventListener('click', () => {
    contClick = 0;
    document.querySelector('#cont').style.display = 'none';
});