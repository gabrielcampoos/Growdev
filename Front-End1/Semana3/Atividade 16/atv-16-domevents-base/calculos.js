/* Desenvolva aqui a rotina */
const valorBase = document.getElementById('valorBase');
const valorTransporte = document.getElementById('valorTransporte');
const valorAlimentacao = document.getElementById('valorAlimentacao');
const receitaTotal = document.getElementById('receitaTotal');
const valorAutomovel = document.getElementById('valorAutomovel');
const faltas = document.getElementById('faltas');
const totalDescontos = document.getElementById('totalDescontos');
const valorTotal = document.getElementById('valorTotal');

document.getElementById('btnCalcular').addEventListener('click', (event) => {
    event.preventDefault();
    let valor = new Array();

    if(localStorage.hasOwnProperty('valor')){
        valor = JSON.parse(localStorage.getItem('valor'));
    };

    receitaTotal.value = Number(valorBase.value) + Number(valorTransporte.value) + Number(valorAlimentacao.value);
    totalDescontos.value = Number(valorAutomovel.value) + Number(faltas.value);
    valorTotal.value = receitaTotal.value - totalDescontos.value;

    valor.push(
        {
        valorBase: valorBase.value,
        valorTransporte: valorTransporte.value,
        valorAlimentacao: valorAlimentacao.value,
        receitaTotal: receitaTotal.value,
        valorAutomovel: valorAutomovel.value,
        faltas: faltas.value,
        totalDescontos: totalDescontos.value,
        valorTotal: valorTotal.value,
        }
    );

    localStorage.setItem('valor', JSON.stringify(valor));
});

if(localStorage.hasOwnProperty('valor')){
    valor = JSON.parse(localStorage.getItem('valor'));

    for (const newList of valor) {
        valorBase.value = newList.valorBase;
        valorTransporte.value = newList.valorTransporte;
        valorAlimentacao.value = newList.valorAlimentacao;
        receitaTotal.value = newList.receitaTotal;
        valorAutomovel.value = newList.valorAutomovel;
        faltas.value = newList.faltas;
        totalDescontos.value = newList.totalDescontos;
        valorTotal.value = newList.valorTotal;
      };
};