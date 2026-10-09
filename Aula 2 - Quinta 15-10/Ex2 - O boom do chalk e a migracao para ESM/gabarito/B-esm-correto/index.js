// ============================================================
// index.js — ESM — GABARITO COMENTADO
// Pré-requisito: "type": "module" no package.json (é ele que DECLARA o sistema do projeto).
// ============================================================

// prompt-sync é um pacote CommonJS. O ESM o importa como "default" (o que o pacote colocou em module.exports).
// Isso se chama INTEROP CJS → ESM e funciona sem nenhum truque.
import promptSync from "prompt-sync";

// chalk 5+ é ESM puro: import default normal, sem .default e sem gambiarra.
import chalk from "chalk";

// Módulo local com exportação NOMEADA: chaves com o MESMO nome exportado.
// A extensão .js é OBRIGATÓRIA em arquivos locais no ESM do Node (sem ela: ERR_MODULE_NOT_FOUND).
import { perguntas } from "./perguntas.js";

// Duas exportações nomeadas importadas de uma vez.
import { verificar, mensagemFinal } from "./placar.js";

// Cria a função prompt() (antes era const prompt = promptSync(); no topo — a mesma ideia).
const prompt = promptSync();

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
