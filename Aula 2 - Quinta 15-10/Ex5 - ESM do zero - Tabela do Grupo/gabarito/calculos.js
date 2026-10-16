// ============================================================
// calculos.js — MÓDULO DAS REGRAS (ESM) — GABARITO COMENTADO
// ============================================================

// Exportação NOMEADA de uma constante: "export" na frente da declaração.
export const VAGAS = 2;

// Exportação NOMEADA de função. Quem importa usa chaves e o MESMO nome: { saldoDeGols }.
export function saldoDeGols(selecao) {
  return selecao.golsPro - selecao.golsContra;
}

// Ordena por pontos; se empatar, desempata pelo saldo de gols.
// [...selecoes] faz uma CÓPIA: sort() altera o array original, e não queremos mexer nos dados importados.
export function classificar(selecoes) {
  return [...selecoes].sort(function (a, b) {
    return b.pontos - a.pontos || saldoDeGols(b) - saldoDeGols(a);
  });
}
