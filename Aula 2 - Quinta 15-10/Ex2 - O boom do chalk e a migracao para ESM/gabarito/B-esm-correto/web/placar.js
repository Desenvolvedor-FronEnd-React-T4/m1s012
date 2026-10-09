// ============================================================
// placar.js — módulo das REGRAS (ESM) — GABARITO COMENTADO
// Três funções, três exportações NOMEADAS (uma palavra export na frente de cada).
// ============================================================

// ---------- Regras (as MESMAS do terminal) ----------
export function verificar(resposta, correta) {
  // O value de um input é SEMPRE texto ("3"); correta é número (3). Number() converte antes do ===.
  return Number(resposta) === correta;
}

export function mensagemFinal(total, certas) {
  // Template string: ${...} insere os valores no texto.
  return `Você acertou ${certas} de ${total}! 🏆`;
}

export function classificar(pct) {
  if (pct >= 90) return "Craque";   // 90% ou mais
  if (pct >= 60) return "Titular";  // 60% a 89%
  if (pct >= 30) return "Reserva";  // 30% a 59%
  return "Torcedor";                // abaixo de 30%
}
