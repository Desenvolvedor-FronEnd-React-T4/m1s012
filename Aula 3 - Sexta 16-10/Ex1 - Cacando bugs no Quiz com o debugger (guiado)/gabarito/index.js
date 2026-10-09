// ============================================================
// index.js (ESM) — GABARITO COMENTADO — bugs A e B corrigidos
// ============================================================
import promptSync from "prompt-sync";
import chalk from "chalk";
import { perguntas } from "./perguntas.js";
import { verificar, mensagemFinal } from "./placar.js";

const prompt = promptSync();

console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));
let acertos = 0;

// *** BUG B (corrigido) ***
// Sintoma: depois da 10ª pergunta o programa quebrava com
//   TypeError: Cannot read properties of undefined (reading 'pergunta')
// Como o debugger mostrou: "Pause on uncaught exceptions" parou na linha console.log(... q.pergunta ...);
// no painel Variables: i = 10 e q = undefined; na Call Stack o erro nasceu aqui, no laço.
// Causa: o índice do array vai de 0 a length - 1. Com "<=", o laço ainda rodava com i = 10 (posição que não existe).
// Antes: for (let i = 0; i <= perguntas.length; i++)
for (let i = 0; i < perguntas.length; i++) {      // CORREÇÃO: "<" em vez de "<="
  // Pergunta da vez (com o laço certo, nunca fica undefined).
  const q = perguntas[i];
  // Mostra o enunciado numerado (i + 1 porque a contagem humana começa em 1).
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));
  // Lista as opções.
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });
  // Lê a resposta (texto).
  const resposta = prompt("Sua resposta (1-4): ");
  // Dica de debugger: breakpoint CONDICIONAL aqui com  i === 6  para parar só na 7ª pergunta.
  if (verificar(resposta, q.correta)) {
    console.log(chalk.green("✅ Acertou!"));
    acertos++;
  } else {
    console.log(chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`));
  }
}

console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));
