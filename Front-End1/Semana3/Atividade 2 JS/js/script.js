// EX 1

{
    let div1 = document.getElementById("ex1");
    let a = 10;
    let b = 20;
    let aux = a;

    a = b;
    b = aux;
    // console.log(a, b)

    div1.innerHTML = "Valor de A é " + a + " e o de B é " + b;
    div1.style.color = "white";
    div1.style.textAlign = "center";
    div1.style.fontSize = "30px";
}

// EX 2

{   
    let div2 = document.getElementById("ex2");
    let brancos = 754;
    let nulos = 876;
    let validos = 15743;
    let total = brancos + nulos + validos;

    let xBrancos = (brancos / total) * 100;
    let xNulos = (nulos / total) * 100;
    let xValidos = (validos / total) * 100;
    
    div2.innerHTML = `Brancos: ${xBrancos.toFixed(2)}, Nulos: ${xNulos.toFixed(2)}, Validos: ${xValidos.toFixed(2)}`;
    div2.style.color = "white";
    div2.style.textAlign = "center";
    div2.style.fontSize = "30px";
}

// EX 3

{
    let div3 = document.getElementById("ex3");
    let custoFabrica = 45000;
    let imposto = custoFabrica * 0.45;
    let custoDistribuidor = custoFabrica * 0.28;

    console.log(`Valor: ${imposto}`);
    console.log(`Custo do distribuidor: ${custoDistribuidor}`);

    let precoFinal = custoDistribuidor + imposto + custoFabrica;

    console.log(`Preço final: ${precoFinal}`);

    div3.innerHTML = `Valor: ${imposto.toFixed(2)}, Custo do distribuidor: ${custoDistribuidor.toFixed(2)}, Preço final: ${precoFinal.toFixed(2)}`;
    div3.style.color = "white";
    div3.style.textAlign = "center";
    div3.style.fontSize = "30px";
}

// EX 4

{
    let div4 = document.getElementById("ex4");
    const salarioFixo = 1500;
    let carrosVendidos = 10;
    let comissaoFixa = 200 * carrosVendidos;
    let valorDeVendas = 200000;
    let comissao = 0.05 * valorDeVendas;
    let salarioFinal = salarioFixo + comissaoFixa + comissao;

    div4.innerHTML = `Salário final do vendedor: ${salarioFinal} reais`;
    div4.style.color = "white";
    div4.style.textAlign = "center";
    div4.style.fontSize = "30px";
}

// EX 5

{
    let div5 = document.getElementById("ex5");
    let celcius = 30;
    let fahrenheit = (celcius * 9/5) + 32;

    div5.innerHTML = `Graus em Celcius: ${celcius} graus, Fahrenheit: ${fahrenheit} graus`;
    div5.style.color = "white";
    div5.style.textAlign = "center";
    div5.style.fontSize = "30px";
}

// EX 6

{
    let div6 = document.getElementById("ex6");
    let num1 = 50;
    let num2 = 55;

    if(num1 > num2) {
        div6.innerHTML = `O primeiro número é maior!`;
        div6.style.color = "white";
        div6.style.textAlign = "center";
        div6.style.fontSize = "30px";
    } else if(num1 < num2) {
        div6.innerHTML = `O segundo número é maior!`;
        div6.style.color = "white";
        div6.style.textAlign = "center";
        div6.style.fontSize = "30px";
    } else {
        div6.innerHTML = `Os números são iguais!`;
        div6.style.color = "white";
        div6.style.textAlign = "center";
        div6.style.fontSize = "30px";
    }
}

// EX 7

{
    let btn = document.getElementById("btnEx7");
    let ex7 = document.getElementById("ex7Text");
    let number = document.getElementById("inputEx7");
    const precoUm = 0.30;
    const precoDois = 0.25;
    
    btn.addEventListener("click", (e) => {
        if(number.value < 12) {
            let valor = precoUm * number.value;
            ex7.innerHTML = `O valor da compra é de: ${valor} reais`;
        } else if(number.value >= 12) {
            valor = precoDois * number.value;
            ex7.innerHTML = `O valor da compra é de: ${valor} reais`;
        }
        number.value = "";
    });
};

// EX 8

{
    let nome = document.getElementById("inputNome");
    let idade = document.getElementById("inputIdade");
    let ano = document.getElementById("inputAno");
    let btn = document.getElementById("btnEx8");

    btn.addEventListener("click", (e) => {
        let cont = document.getElementById("inputNome").value;
        console.log(`Nome: ${nome.value} \n Letras: ${cont.length} letras \n Idade: ${idade.value} anos \n Data de nascimento: ${ano.value}`);
    });
};

// EX 9

{
    let numero = document.getElementById("inputNumero");
    let btn = document.getElementById("btnEx9");

    btn.addEventListener("click", (e) => {
        if(numero.value % 2 === 0) {
            alert("Número é par!");
        } else {
            alert("Número é impar!");
        };
        numero.value = "";
    });
};

// EX 10

{
    let anoAtual = document.getElementById("anoAtual");
    let anoNasc = document.getElementById("anoNasc");
    let alfabetizacaoOpt = document.getElementById("alfabetizacaoOpt").value;
    let select = document.getElementById("alfabetizacao");
    let opt1 = document.getElementById("opt1").value;
    let opt2 = document.getElementById("opt2").value;
    let btn = document.getElementById("btnEx10");

    btn.addEventListener("click", (e) => {
        let idade = anoAtual.value - anoNasc.value;

        if(idade >= 17 && select.value === opt1) {
            console.log("Pode votar!");
        } else if(idade >= 17 && select.value === opt2) {
            console.log("Não pode votar!");
        } else {
            console.log("Não pode votar!");
        };
        anoAtual.value = "";
        anoNasc.value = "";
        select.value = alfabetizacaoOpt;
    });
};