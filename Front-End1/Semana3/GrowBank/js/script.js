// Informar o saldo atual do usuário e as seguintes opções:

// [Seu saldo é: R$ xxx,xx]

// 1 - Depósito
// 2 - Saque
// 3 - Transferência
// 0 - Sair



// Enquanto o usuário selecionar uma das opções diferentes de 0, o algoritmo deve rodar a instrução selecionada pelo usuário;

// [Utilizar Switch-case]

// Caso opção 1 seja selecionada:
//     Solicitar um valor a ser depositado; (valor maior que zero)
//     Incrementar no saldo 
//     Retornar para o menu anterior

// Caso opção 2 seja selecionada:
//     Solicitar um valor a ser sacado; (valor maior que zero e menor que o saldo disponível na conta);
//     Deve ser apresentado mensagem de erro ao usuário;
//     Decrementar o valor sacado do saldo;
//     Retornar para o menu anterior;

// Caso opção 3 seja selecionada
//     Solicitar um valor a ser transferido (valor maior que zero e menor que o saldo disponível)
// Deve ser apresentado mensagem de erro ao usuário;
//     Decrementar o valor do saldo
//     Solicitar para quem deve ser transferido (transferência usando e-mail)
//     Retornar ao menu anterior

// Caso a opção selecionada seja 0
//     Encerrar algoritmo;



let saldoAtual = 7000;
let menu;


while(menu != 0) {

    menu = prompt(`Seu saldo é: R$ ${saldoAtual}
    1 - Depósito
    2 - Saque
    3 - Transferência
    0 - Sair`);

    switch(menu) {

        case '1':
            
            let deposito = Number(prompt(`Qual o valor a ser depósitado?`));
            
            if(deposito > 0) {
                saldoAtual += deposito;
            };

            break;

        case '2':

            let saque = Number(prompt(`Informe o valor do saque:`));

            if(saque > 0 && saque <= saldoAtual) {
                saldoAtual -= saque;
            } else {
                alert('Saque é maior que o valor atual!');
            };

            break;

        case '3':

            let transferencia = Number(prompt(`Insira o valor a ser transferido:`));

            if(transferencia > 0 && transferencia <= saldoAtual) {
                saldoAtual -= transferencia;
            };

            let msg = prompt(`Digite o e-mail a ser recebido:`);

            break;
    };
};