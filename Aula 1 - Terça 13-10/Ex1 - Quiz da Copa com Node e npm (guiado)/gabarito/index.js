// ============================================================
// QUIZ DA COPA 2026 — GABARITO COMENTADO (Aula 1 · Ex1)
// Versão "tudo num arquivo só": dados + regras + fluxo juntos.
// Sistema de módulos: CommonJS (require / module.exports).
// Para rodar: npm install  e depois  npm start
// ============================================================

// require("prompt-sync") procura o pacote na pasta node_modules e traz o que ele exporta.
const promptSync = require("prompt-sync");

// O pacote exporta uma FÁBRICA de funções; chamá-la com () devolve a função prompt() pronta para usar.
const prompt = promptSync();

// Traz o chalk, instalado com "npm install chalk@4" (versão 4 = CommonJS, funciona com require).
// A versão 4 foi FIXADA de propósito: na quinta veremos o que acontece com a versão mais nova.
const chalk = require("chalk");

// ---------- 1) OS DADOS ----------
// "const" porque a lista não será reatribuída; o nome no plural deixa claro que é uma coleção.
const perguntas = [
  // Cada pergunta é um OBJETO com 3 propriedades:
  //   pergunta -> o texto exibido | opcoes -> a lista de alternativas | correta -> o NÚMERO (1 a 4) da opção certa
  { pergunta: "Quantos países sediam a Copa do Mundo de 2026?", opcoes: ["1", "2", "3", "4"], correta: 3 },
  { pergunta: "Quantas seleções disputam a Copa de 2026?", opcoes: ["40", "48", "56", "64"], correta: 2 },
  { pergunta: "Qual país sediou a Copa do Mundo de 2022?", opcoes: ["Rússia", "Catar", "Brasil", "Alemanha"], correta: 2 },
  { pergunta: "Quantas vezes o Brasil foi campeão mundial de seleções masculinas?", opcoes: ["5", "4", "3", "6"], correta: 1 },
  { pergunta: "Em que país foi disputada a primeira Copa do Mundo, em 1930?", opcoes: ["Uruguai", "Brasil", "Itália", "França"], correta: 1 },
  { pergunta: "Qual seleção foi campeã da Copa de 2022?", opcoes: ["França", "Croácia", "Brasil", "Argentina"], correta: 4 },
  { pergunta: "Quantas partidas tem a Copa de 2026, com 48 seleções?", opcoes: ["64", "80", "104", "128"], correta: 3 },
  { pergunta: "Qual estádio da Cidade do México recebeu a abertura da Copa de 2026?", opcoes: ["Maracanã", "Estádio Azteca", "Wembley", "Camp Nou"], correta: 2 },
  { pergunta: "Qual seleção foi campeã da Copa de 2002, disputada no Japão e na Coreia do Sul?", opcoes: ["Alemanha", "Turquia", "Itália", "Brasil"], correta: 4 },
  { pergunta: "Em qual país fica o MetLife Stadium, palco da final da Copa de 2026?", opcoes: ["México", "Canadá", "Estados Unidos", "Brasil"], correta: 3 },
];
// Fim do array: 10 objetos. Para acrescentar uma pergunta basta copiar uma linha e editar os textos.

// ---------- 2) AS REGRAS ----------
// Função que decide se a resposta digitada está certa.
function verificar(resposta, correta) {
  // prompt() SEMPRE devolve texto ("3"); "correta" é número (3). Com === "3" e 3 são diferentes.
  // Number("3") converte o texto em número 3, então a comparação funciona.
  return Number(resposta) === correta;
}

// Função que monta o texto do fim do jogo.
function mensagemFinal(acertos, total) {
  // Template string (crase): ${...} insere o valor das variáveis no texto.
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

// ---------- 3) O FLUXO ----------
// Título em amarelo e negrito: chalk.bold.yellow(...) encadeia estilos.
console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));

// Contador de pontos. "let" porque o valor vai mudar (acertos++ mais abaixo).
let acertos = 0;

// Laço clássico: i vai de 0 até perguntas.length - 1 (um passo por pergunta).
for (let i = 0; i < perguntas.length; i++) {
  // Guarda a pergunta atual numa variável para não repetir perguntas[i] o tempo todo.
  const q = perguntas[i];

  // "\n" pula uma linha em branco; i + 1 mostra "1)", "2)"... (a contagem humana começa em 1).
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));

  // Percorre as opções; "indice" começa em 0, por isso mostramos indice + 1.
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });

  // Pausa o programa e espera a pessoa digitar + Enter. O resultado é uma STRING.
  const resposta = prompt("Sua resposta (1-4): ");

  // Chama a regra criada acima; devolve true ou false.
  if (verificar(resposta, q.correta)) {
    // Verde para acerto.
    console.log(chalk.green("✅ Acertou!"));
    // Soma 1 ponto (equivale a acertos = acertos + 1).
    acertos++;
  } else {
    // Vermelho para erro, revelando qual era a opção certa.
    console.log(chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`));
  }
}

// Depois do laço: mensagem final em amarelo/negrito. O "\n" separa do resto.
console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));
