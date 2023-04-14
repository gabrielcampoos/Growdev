const floatingInput = document.getElementById('floatingInput');
const floatingPassword = document.getElementById('floatingPassword');
const btnLogin = document.getElementById('btnLogin');

btnLogin.addEventListener('click', (event) => {
    event.preventDefault();
    
    if(localStorage.hasOwnProperty('usuarios')) {
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
    };

    const validarUsuarios = usuarios.some((el) => floatingInput.value === el.email);

    if(validarUsuarios) {
        location.href = 'lista.html';
    } else {
        alert('Usuário não cadastrado.');
        floatingInput.value = '';
        floatingPassword.value = '';
    };
});