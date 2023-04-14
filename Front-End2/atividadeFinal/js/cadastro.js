const floatingInputCadastro = document.getElementById('floatingInputCadastro');
const floatingPasswordCadastro = document.getElementById('floatingPasswordCadastro');
const btnCadastrar = document.getElementById('btnCadastrar');

btnCadastrar.addEventListener('click', (event) => {
    event.preventDefault();
    let usuarios = new Array();

    if(localStorage.hasOwnProperty('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    };

    const validarUsuarios = usuarios.some((el) => el.email === floatingInputCadastro.value);

    if(validarUsuarios) {
        alert('Usuário já cadastrado!');
        floatingInputCadastro.value = '';
        floatingPasswordCadastro.value = '';
        return;
    } else if(floatingInputCadastro.value === '' && floatingPasswordCadastro.value === '') {
        alert('Insira um e-mail e uma senha.');
        return;
    };

    usuarios.push(
        {
            id: new Date().getTime(),
            email: floatingInputCadastro.value,
            senha: floatingPasswordCadastro.value,
            recados: [],
        }
    );

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso!');
    floatingInputCadastro.value = '';
    floatingPasswordCadastro.value = '';
    location.href = 'index.html';
});