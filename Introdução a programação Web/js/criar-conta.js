const btnCriar = document.getElementById('loginInp');
const userInput = document.getElementById('user');
const passwordInput = document.getElementById('password');

btnCriar.addEventListener('click', (event) => {
    event.preventDefault();
    let usuarios = new Array();

    if(localStorage.hasOwnProperty('usuarios')){
       usuarios = JSON.parse(localStorage.getItem('usuarios'));
    };

    const validarUsuario = usuarios.some((el) => el.usuario === userInput.value);
    
    if(validarUsuario){
        alert('Usuário já cadastrado!');
        userInput.value = '';
        passwordInput.value = '';
        return;
    };

    usuarios.push(
        {
            usuario: userInput.value,
            senha: passwordInput.value,
            recados: [],
        }
    );
    
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuário cadastrado com sucesso!');
    userInput.value = '';
    passwordInput.value = '';
    location.href = 'index.html';
});