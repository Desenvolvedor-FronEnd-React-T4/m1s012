const form = document.getElementById("form-palpite");
const saida = document.getElementById("resultados");

form.addEventListener("submit", function (evento) {
  evento.preventDefault();

  const golsBrasil = document.getElementById("gols-brasil").value;
  const golsRival = document.getElementById("gols-rival").value;

  const total = golsBrasil + golsRival;

  saida.textContent = "Total de gols no jogo: " + total;
});
