let listaVeiculos = [];

function init() {
  let opcao = prompt(` Escolha uma das opções para interagir com o sistema:
  No Momento o sistema tem ${listaVeiculos.length} carros cadastrados
\n1: Cadastrar | 2: Listar | 3: Filtrar veículos por marca | 4: Atualizar Veículo | 5: Remover Veículo | 6: Sair`);

  switch (opcao) {
    case "1":
      cadastrarVeiculo();
      break;
    case "2":
      listarVeiculos();
      break;
    case "3":
      filtrarVeiculos();
      break;
    case "4":
      atualizarVeiculo();
      break;
    case "5":
      removerVeiculo();
      break;

    default:
      alert("Obrigado por usar o sistema");
  }
}

function cadastrarVeiculo() {
  let modelo = prompt("Digite o modelo do carro");
  let marca = prompt("Digite a marca do carro");
  let ano = prompt("Digite o ano do carro");
  let cor = prompt("Digite a cor do carro");
  let preco = Number(prompt("Digite o preco do carro"));

  let carro = {
    id: parseInt(Math.random() * 5000),
    modelo: modelo,
    marca: marca,
    ano: ano,
    cor: cor,
    preco: preco,
  };

  listaVeiculos.push(carro);

  init();
}

function listarVeiculos() {
  listaVeiculos.forEach((carro) => {
    alert(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Marca: ${carro.marca} | Ano : ${carro.ano} | Cor: ${carro.cor} | Preço: R$${carro.preco}`
    );
  });

  init();
}

function filtrarVeiculos() {
  let marcaFiltrada = prompt("Digite a marca desejada");

  const listaFiltrada = listaVeiculos.filter((carro) => {
    if (carro.marca.includes(marcaFiltrada)) {
      return carro;
    }
  });

  listaFiltrada.forEach((carro) => {
    alert(
      `ID: ${carro.id} | Modelo: ${carro.modelo} | Cor: ${carro.cor} | Preço: ${carro.preco}`
    );
  });

  init();
}

function atualizarVeiculo() {
  const id = Number(prompt("Digite o Identificador do veículo"));

  let indiceCarro = listaVeiculos.findIndex((carro) => carro.id === id);

  if (indiceCarro > -1) {
    let novaCor = prompt("Digite uma nova cor para o veículo");
    let novoPreco = prompt("Digite um novo preço para o veículo");

    listaVeiculos[indiceCarro].cor = novaCor;
    listaVeiculos[indiceCarro].preco = novoPreco;
  } else {
    alert("Veículo não encontrado");
  }

  init();
}

function removerVeiculo() {
  const id = Number(prompt("Digite o Identificador do veículo"));

  let indiceCarro = listaVeiculos.some((carro) => carro.id === id);

  if (indiceCarro) {
    listaVeiculos.splice(index, 1);
  } else {
    alert("Veículo não encontrado");
  }

  init();
};