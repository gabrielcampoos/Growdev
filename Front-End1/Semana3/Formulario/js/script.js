const pessoa = [];

document.getElementById('enviar').addEventListener('click', () => {
    const nome = document.getElementById('nome');
    const endereco = document.getElementById('endereco');
    const cidade = document.getElementById('cidade');
    const estado = document.getElementById('estado');

    const cargo = document.querySelector('input[name="cargo"]:checked'); 
 

    const areaDeInteresse = document.querySelectorAll('input[name="interesse"]:checked');
    const areaDeInteresseList = [];

    for (const listaInteresse of areaDeInteresse) {
        areaDeInteresseList.push(listaInteresse.value);
    };

    const miniCurriculo = document.getElementById('miniCurriculo');

    const newPessoa = {
        nome: nome.value,
        endereco: endereco.value,
        cidade: cidade.value,
        estado: estado.value,
        cargo: cargo.value,
        areaDeInteresse: areaDeInteresseList,
        miniCurriculo: miniCurriculo.value,
    };

    pessoa.push(newPessoa);

    console.log(newPessoa);
});