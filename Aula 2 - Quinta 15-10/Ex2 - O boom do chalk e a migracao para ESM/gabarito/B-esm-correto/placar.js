// ============================================================
// placar.js — MÓDULO DAS REGRAS (ESM) — GABARITO COMENTADO
// ============================================================

// "export" antes da declaração publica a função com o seu nome. Cada função é uma exportação NOMEADA.
// (No CommonJS havia um único module.exports = { verificar, mensagemFinal } no fim do arquivo.)
export function verificar(resposta, correta) {
  // Number() converte o texto digitado ("3") em número (3) antes da comparação estrita.
  return Number(resposta) === correta;
}

// Segunda exportação nomeada. Um arquivo ESM pode ter quantas quiser.
export function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}
