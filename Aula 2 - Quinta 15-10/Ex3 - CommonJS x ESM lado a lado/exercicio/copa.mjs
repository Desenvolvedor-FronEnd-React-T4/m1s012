// copa.mjs — o MESMO módulo em ESM (a extensão .mjs já declara o sistema)

// TODO 2 — acrescente "export" antes de cada declaração (exportações NOMEADAS)
function saldoDeGols(golsPro, golsContra) {
  return golsPro - golsContra;
}

function golsPorJogo(totalGols, jogos) {
  return totalGols / jogos;
}

const SELECOES = 48;

// TODO 3 — crie uma exportação DEFAULT: uma função resumo() que devolve o texto
//          `Copa com ${SELECOES} seleções` e exporte com:  export default resumo;
