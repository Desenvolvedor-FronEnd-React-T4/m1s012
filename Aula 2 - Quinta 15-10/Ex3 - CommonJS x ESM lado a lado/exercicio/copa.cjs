// copa.cjs — módulo em COMMONJS (a extensão .cjs já declara o sistema)

function saldoDeGols(golsPro, golsContra) {
  return golsPro - golsContra;
}

function golsPorJogo(totalGols, jogos) {
  return totalGols / jogos;
}

const SELECOES = 48;

// TODO 1 — exporte as duas funções e a constante num OBJETO com module.exports
