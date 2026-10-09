// ============================================================
// TAREFA DA AULA 1 — Ampliando o Quiz da Copa
// Este arquivo FUNCIONA (é o resultado do Ex1). Sua missão está nos TODO.
// Antes de começar: npm install   |   Para rodar: npm start
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

// TODO 1 — Acrescente MAIS 5 perguntas ao array acima (tema livre: Copa do Mundo).
//          Cuidado: "correta" é o número da opção (1 a 4).

function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

// TODO 2 — Crie a função percentual(acertos, total) que devolve o aproveitamento
//          em porcentagem, arredondado (ex.: 7 de 10 -> 70).
//          Dica: Math.round((acertos / total) * 100)

// TODO 3 — Crie a função classificar(percentual) que devolve:
//          "Craque" (90 ou mais), "Titular" (60 a 89), "Reserva" (30 a 59) ou "Torcedor" (abaixo de 30).

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

// TODO 4 — Mostre também o aproveitamento e a classificação, com cores diferentes
//          (ex.: "Craque" em verde, "Torcedor" em vermelho).
