// ============================================================
// placar.js — MÓDULO DAS REGRAS (CommonJS) — GABARITO COMENTADO
// Responsabilidade única: decidir se acertou e montar a mensagem final.
// ============================================================

// Recebe a resposta digitada (TEXTO) e o número da opção correta (NÚMERO).
function verificar(resposta, correta) {
  // Number() converte "3" em 3; só então o === compara valor E tipo corretamente.
  return Number(resposta) === correta;
}

// Recebe quantos pontos a pessoa fez e quantas perguntas existiam.
function mensagemFinal(acertos, total) {
  // Template string: ${...} é substituído pelo valor da variável.
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

// Este módulo tem DUAS funções para entregar, então exportamos um OBJETO com as duas.
// { verificar, mensagemFinal } é a forma abreviada de { verificar: verificar, mensagemFinal: mensagemFinal }.
module.exports = { verificar, mensagemFinal };
