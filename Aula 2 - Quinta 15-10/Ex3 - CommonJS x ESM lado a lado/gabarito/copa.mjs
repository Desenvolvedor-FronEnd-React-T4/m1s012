// ============================================================
// copa.mjs — O MESMO MÓDULO EM ESM — GABARITO COMENTADO
// A extensão .mjs diz ao Node: "trate este arquivo como módulo ES".
// ============================================================

// TODO 2 resolvido: "export" na frente da declaração = exportação NOMEADA.
export function saldoDeGols(golsPro, golsContra) {
  return golsPro - golsContra;
}

export function golsPorJogo(totalGols, jogos) {
  return totalGols / jogos;
}

// Constantes também podem ser exportadas.
export const SELECOES = 48;

// TODO 3 resolvido: função que será a exportação DEFAULT do arquivo.
function resumo() {
  return `Copa com ${SELECOES} seleções`;
}

// Só PODE haver UM "export default" por arquivo; quem importa escolhe o nome que quiser.
export default resumo;
