let lampadaQuebrada = false;

function acenderLampada() {

    if(!lampadaQuebrada) {

        const lampada = document.getElementById('imgLampada');

        lampada.src = '../imagens/lampada_acessa.jpg';

    };

};

function apagarLampada() {

    if(!lampadaQuebrada) {

        const lampada = document.getElementById('imgLampada');

        lampada.src = '../imagens/lampada_apagada.jpg';
    
    };
    
};

function quebrarLampada() {

    const lampada = document.getElementById('imgLampada');

    lampada.src = '../imagens/lampada_quebrada.jpg';

    lampadaQuebrada = true;

    const botaoRestaurar = document.createElement('button');
    botaoRestaurar.innerText = 'Restaurar Lampada';

    const divContainer = document.querySelector('.container');
    divContainer.appendChild(botaoRestaurar).addEventListener('click', () => {
        lampada.src = '../imagens/lampada_apagada.jpg';
        botaoRestaurar.remove();
    });

};