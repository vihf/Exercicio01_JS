function exibirValor() {
  const valor = document.getElementById("meuInput").value;
  console.log(valor);
}

function alterarTexto() {
    const textoDigitado = document.getElementById("novoTexto").value;
    document.getElementById("meuParagrafo").textContent = textoDigitado;
}

function mudarCor() {
    const elemento = document.getElementById("meuElemento");
    elemento.style.backgroundColor = "lightblue";
}