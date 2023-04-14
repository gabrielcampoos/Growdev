document.getElementById('btnEntrar').addEventListener('click', (event)=>{
    event.preventDefault();
    const usuarioInput = document.querySelector('#usuarioInput');
    const senhaInput = document.querySelector('#senhaInput');
    
    if(localStorage.hasOwnProperty('usuarios')){
        usuarios = JSON.parse(localStorage.getItem('usuarios'));
     }else{
        alert('Crie uma conta!');
     };

     const validarCadastro = usuarios.some((el) => el.usuario === usuarioInput.value);
     const validarSenha = usuarios.some((el) => el.senha === senhaInput.value);

     if(validarCadastro && validarSenha){
        location.href = 'recados.html';
        usuarioInput.value = '';
        senhaInput.value = '';
        return;
     }else{
        alert('Usuário ou senha incorretos!');
        usuarioInput.value = '';
        senhaInput.value = '';
        return;
     };
});