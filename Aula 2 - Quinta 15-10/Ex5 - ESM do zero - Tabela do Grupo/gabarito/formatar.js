// ============================================================
// formatar.js — MÓDULO DA APARÊNCIA (ESM) — GABARITO COMENTADO
// ============================================================

// Pacote do npm: sem "./" e sem extensão. O chalk 5+ é ESM puro, então o import default é normal.
import chalk from "chalk";

// Um módulo também pode IMPORTAR outro módulo seu. Arquivo local: "./" e ".js" são obrigatórios.
import { saldoDeGols } from "./calculos.js";

// Texto puro de uma linha da tabela (sem cor, serve para tela e para arquivo).
export function linha(selecao, posicao) {
  const saldo = saldoDeGols(selecao);
  const sinal = saldo > 0 ? "+" : "";
  return `${posicao}. ${selecao.nome.padEnd(10)} ${String(selecao.pontos).padStart(2)} pts   saldo ${sinal}${saldo}`;
}

// Só a cor: verde para quem avança, vermelho para quem cai.
export function destacar(texto, avanca) {
  return avanca ? chalk.green(texto) : chalk.red(texto);
}
