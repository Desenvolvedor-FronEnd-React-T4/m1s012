import promptSync from "prompt-sync";
import chalk from "chalk";
import { perguntas } from "./perguntas.js";
import { verificar, mensagemFinal } from "./placar.js";
// TODO 7 — importe salvarPontuacao e melhoresDoRanking de "./ranking.js"

const prompt = promptSync();

// TODO 8 — pergunte o nome da pessoa antes de começar: const nome = prompt("Seu nome: ");

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

// TODO 9 — salve a pontuação e mostre o TOP 5 em tabela:  console.table(melhoresDoRanking())
