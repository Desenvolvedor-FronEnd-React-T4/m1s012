// ============================================================
// index.js — QUIZ COM RANKING (ESM) — GABARITO COMENTADO
// ============================================================
import promptSync from "prompt-sync";
import chalk from "chalk";
import { perguntas } from "./perguntas.js";
import { verificar, mensagemFinal } from "./placar.js";
// TODO 7 resolvido: duas exportações nomeadas do módulo novo (extensão .js obrigatória).
import { salvarPontuacao, melhoresDoRanking } from "./ranking.js";

const prompt = promptSync();

// TODO 8 resolvido: o nome vem do teclado. trim() tira espaços; "Anônimo" é o valor padrão se vier vazio.
const nome = prompt("Seu nome: ").trim() || "Anônimo";

console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));
let acertos = 0;

for (let i = 0; i < perguntas.length; i++) {
  const q = perguntas[i];
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });
  const resposta = prompt("Sua resposta (1-4): ");
  if (verificar(resposta, q.correta)) {
    console.log(chalk.green("✅ Acertou!"));
    acertos++;
  } else {
    console.log(chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`));
  }
}

console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));

// TODO 9 resolvido: grava o resultado e mostra o TOP 5.
salvarPontuacao(nome, acertos);
console.log(chalk.bold("\nTOP 5:"));
// console.table desenha um array de objetos como tabela no terminal.
console.table(melhoresDoRanking());
