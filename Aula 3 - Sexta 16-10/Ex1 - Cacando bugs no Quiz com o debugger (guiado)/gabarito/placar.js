// ============================================================
// placar.js (ESM) — GABARITO COMENTADO
// ============================================================

// *** BUG A (corrigido) ***
// Sintoma: o quiz dizia "Errou!" mesmo quando a pessoa acertava.
// Como o debugger mostrou: breakpoint aqui -> painel Variables: resposta = "3" (string, aspas!) e correta = 3 (number).
// "3" === 3 é false, porque === compara VALOR E TIPO. Antes: return resposta === correta;
export function verificar(resposta, correta) {
  // CORREÇÃO: converte o texto digitado em número antes de comparar.
  return Number(resposta) === correta;
}

// Monta o texto final. Nenhum defeito aqui.
export function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}
