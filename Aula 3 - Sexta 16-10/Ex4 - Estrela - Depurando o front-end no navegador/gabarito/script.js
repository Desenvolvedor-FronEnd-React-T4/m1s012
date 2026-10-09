// ============================================================
// script.js — GABARITO COMENTADO — 2 defeitos corrigidos
// ============================================================

// Pega o formulário pelo id (o id está no index.html: id="form-palpite").
const form = document.getElementById("form-palpite");

// *** BUG 2 (corrigido) — elemento não encontrado ***
// Antes: document.getElementById("resultados")   (com S no fim)
// No HTML o id é "resultado" (sem S). getElementById devolve null quando não acha,
// e a linha saida.textContent = ... lançava: TypeError: Cannot set properties of null (setting 'textContent').
// Como achar: breakpoint na linha do textContent -> Watch "saida" mostra null; ou "Pause on caught exceptions".
const saida = document.getElementById("resultado");

// Escuta o envio do formulário.
form.addEventListener("submit", function (evento) {
  // Impede que o navegador recarregue a página ao enviar.
  evento.preventDefault();

  // .value de um <input> SEMPRE devolve TEXTO, mesmo com type="number".
  const golsBrasil = document.getElementById("gols-brasil").value;
  const golsRival = document.getElementById("gols-rival").value;

  // *** BUG 1 (corrigido) — soma que concatena ***
  // Antes: const total = golsBrasil + golsRival;   ("2" + "3" = "23")
  // Dica de debugger: descomente a linha abaixo, abra o DevTools e recarregue; o navegador pausa aqui.
  // debugger;
  // CORREÇÃO: converter cada valor com Number() antes de somar.
  const total = Number(golsBrasil) + Number(golsRival);

  // Escreve o resultado na tela (textContent é seguro: trata o valor como texto, não como HTML).
  saida.textContent = "Total de gols no jogo: " + total;
});
