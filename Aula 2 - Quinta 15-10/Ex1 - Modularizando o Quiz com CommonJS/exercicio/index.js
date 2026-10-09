// ============================================================
// QUIZ DA COPA 2026 — Aula 2 · Ex1 — PONTO DE PARTIDA
// Este arquivo FUNCIONA, mas junta três coisas num lugar só:
//   DADOS (perguntas) + REGRAS (verificar, mensagemFinal) + FLUXO (o laço).
// Sua missão: separar em 3 arquivos (módulos) SEM quebrar o jogo.
// ============================================================
const promptSync = require("prompt-sync");
const prompt = promptSync();
const chalk = require("chalk");

const perguntas = [
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

function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

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

// TODO 1 — Recorte o array "perguntas" para o arquivo perguntas.js e exporte-o (module.exports).
// TODO 2 — Recorte verificar e mensagemFinal para placar.js e exporte as DUAS num objeto.
// TODO 3 — Aqui no index.js, importe com require("./perguntas") e require("./placar").
// TODO 4 — Rode npm start: o jogo deve funcionar IGUAL a antes.
