const formulario = document.querySelector("#formulario-sorteio");
const campoInicial = document.querySelector("#numero-inicial");
const campoFinal = document.querySelector("#numero-final");
const resultado = document.querySelector("#resultado");

formulario.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const numeroInicial = Number(campoInicial.value);
  const numeroFinal = Number(campoFinal.value);

  if (!Number.isInteger(numeroInicial) || !Number.isInteger(numeroFinal)) {
    resultado.textContent = "Digite dois números inteiros.";
    return;
  }

  if (numeroInicial > numeroFinal) {
    resultado.textContent = "O primeiro número deve ser menor ou igual ao segundo.";
    return;
  }

  const numeroSorteado =
    Math.floor(Math.random() * (numeroFinal - numeroInicial + 1)) + numeroInicial;

  resultado.textContent = `Número sorteado: ${numeroSorteado}`;
});