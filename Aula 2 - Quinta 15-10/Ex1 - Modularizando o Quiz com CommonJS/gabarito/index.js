// ============================================================
// index.js — ARQUIVO PRINCIPAL (CommonJS) — GABARITO COMENTADO
// Agora só orquestra: importa os módulos e conduz o jogo.
// ============================================================

// Pacote de terceiros: o Node procura em node_modules (por isso NÃO começa com ./).
const promptSync = require("prompt-sync");
// Cria a função prompt() para ler do teclado.
const prompt = promptSync();
// Pacote de terceiros que pinta o terminal (versão 4 = CommonJS).
const chalk = require("chalk");

// Módulo LOCAL: o "./" diz "procure na mesma pasta deste arquivo". Em CommonJS a extensão .js é opcional.
// Recebe exatamente o que perguntas.js colocou em module.exports (o array).
const perguntas = require("./perguntas");

// Módulo LOCAL que exportou um objeto: usamos desestruturação para pegar só as duas funções.
// É o mesmo que: const placar = require("./placar"); const verificar = placar.verificar; ...
const { verificar, mensagemFinal } = require("./placar");

// ---------- O FLUXO (só ele sobrou no index.js) ----------
// Título em amarelo e negrito.
console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));

// Contador de acertos; "let" porque o valor muda.
let acertos = 0;

// Um passo do laço para cada pergunta do array importado.
for (let i = 0; i < perguntas.length; i++) {
  // Pergunta da vez.
  const q = perguntas[i];
  // Mostra "1) texto" em ciano; \n deixa uma linha em branco antes.
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));
  // Lista as opções numeradas a partir de 1.
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });
  // Lê a resposta digitada (sempre texto).
  const resposta = prompt("Sua resposta (1-4): ");
  // verificar() agora vem do módulo placar — o index.js só CHAMA a regra.
  if (verificar(resposta, q.correta)) {
    console.log(chalk.green("✅ Acertou!"));
    acertos++;
  } else {
    console.log(chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`));
  }
}

// mensagemFinal() também vem do módulo placar.
console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));
