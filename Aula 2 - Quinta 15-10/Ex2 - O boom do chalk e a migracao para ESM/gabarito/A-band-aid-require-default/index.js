// ============================================================
// CONSERTO A (BAND-AID) — continua CommonJS, mas lê o chalk novo por .default
// ============================================================
const promptSync = require("prompt-sync");
const prompt = promptSync();

// O chalk 5+ é um módulo ESM. Quando um módulo ESM é carregado com require(), o que volta é o
// OBJETO DO MÓDULO: { default: [função chalk], ... }. A função que queremos está em .default.
// Sem o .default, "chalk" aponta para o objeto do módulo, "chalk.bold" é undefined e
// "chalk.bold.yellow" estoura: TypeError: Cannot read properties of undefined (reading 'yellow').
const chalk = require("chalk").default;

// Daqui para baixo nada muda.
const perguntas = require("./perguntas");
const { verificar, mensagemFinal } = require("./placar");

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

// POR QUE É "BAND-AID": roda, mas o projeto segue declarando CommonJS (não há "type" no package.json)
// enquanto usa uma biblioteca que é ESM. Vale como socorro; o conserto certo é o B.
