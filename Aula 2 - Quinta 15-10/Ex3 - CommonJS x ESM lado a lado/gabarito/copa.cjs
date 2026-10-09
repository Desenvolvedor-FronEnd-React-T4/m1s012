// ============================================================
// copa.cjs — MÓDULO EM COMMONJS — GABARITO COMENTADO
// A extensão .cjs diz ao Node: "trate este arquivo como CommonJS", não importa o package.json.
// ============================================================

// Saldo de gols = gols marcados menos gols sofridos.
function saldoDeGols(golsPro, golsContra) {
  return golsPro - golsContra;
}

// Média de gols por jogo (divisão simples).
function golsPorJogo(totalGols, jogos) {
  return totalGols / jogos;
}

// Constante do módulo (número de seleções da Copa de 2026).
const SELECOES = 48;

// TODO 1 resolvido: UM objeto entrega tudo. É o jeito CommonJS de ter "várias exportações".
module.exports = { saldoDeGols, golsPorJogo, SELECOES };
