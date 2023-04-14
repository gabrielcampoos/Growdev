{
    let div1 = document.getElementById("idade");
    let idade = 25;

    div1.innerHTML = "Minha idade é:" + idade;
}

{
    let div2 = document.getElementById("soma");
    let x = 10;
    let y = 20;
    let z = x + y;

    div2.innerHTML = "O valor da soma de " + x + " e " + y + " é: " + z;
}

{
    let div3 = document.getElementById("parcelas");
    let div4 = document.getElementById("formaPg");
    let total = 219.90;
    let parcelas = 3;
    let valor = total / parcelas;
    // console.log(valor);
    div3.innerHTML = "O valor total da compra foi R$ " + total;
    div4.innerHTML = "Forma de pagamento " + parcelas +"x" + " de R$ " + valor;
}

{
    let div5 = document.getElementById("minutos");
    let minutos = 260;
    let segundos = minutos * 60;

    div5.innerHTML = minutos + " minutos equivale à " + segundos + " segundos";
}

{
    let div6 = document.getElementById("media");
    let nome = "Gabriel";
    let n1 = 10;
    let n2 = 5;
    let n3 = 7;
    let media = (n1 + n2 + n3) / 3;

    div6.innerHTML = "O aluno " + nome + " ficou com média " + parseInt(media);
}