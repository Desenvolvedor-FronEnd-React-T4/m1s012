// ============================================================
// TAREFA DA AULA 1 — GABARITO COMENTADO (linha por linha)
// ============================================================

// Importa a função "fábrica" do prompt-sync (pacote em dependencies).
const promptSync = require("prompt-sync");
// Cria a função prompt() que lê do teclado de forma síncrona.
const prompt = promptSync();
// Importa o chalk@4 (CommonJS) para colorir o terminal.
const chalk = require("chalk");

// TODO 1 resolvido: as 10 perguntas originais + 5 novas (15 no total).
// Atenção ao campo "correta": é o NÚMERO da opção (1 a 4), não o texto.
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
  { pergunta: "Qual seleção venceu a Copa de 1994, disputada nos Estados Unidos?", opcoes: ["Itália", "Brasil", "Alemanha", "Suécia"], correta: 2 },
  { pergunta: "Qual país europeu sediou a Copa de 2018?", opcoes: ["Rússia", "França", "Inglaterra", "Espanha"], correta: 1 },
  { pergunta: "Quantos jogadores de cada time ficam em campo no futebol?", opcoes: ["9", "10", "11", "12"], correta: 3 },
  { pergunta: "Como se chama o troféu entregue ao campeão mundial?", opcoes: ["Taça Libertadores", "Taça Jules Rimet", "Copa do Mundo da FIFA", "Bola de Ouro"], correta: 3 },
  { pergunta: "Em que continente foi disputada a Copa de 2010, na África do Sul?", opcoes: ["Ásia", "Europa", "América do Sul", "África"], correta: 4 },
];

// Regra 1: confere a resposta. Number() converte o texto digitado em número antes do ===.
function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

// Regra 2: texto de encerramento.
function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

// TODO 2 resolvido: percentual.
function percentual(acertos, total) {
  // acertos / total dá uma fração (ex.: 0.7); * 100 vira porcentagem; Math.round tira as casas decimais.
  return Math.round((acertos / total) * 100);
}

// TODO 3 resolvido: classificação por faixa. Os if/else testam da faixa MAIS ALTA para a mais baixa.
function classificar(pct) {
  if (pct >= 90) {
    return "Craque";      // 90% ou mais
  } else if (pct >= 60) {
    return "Titular";     // de 60% a 89%
  } else if (pct >= 30) {
    return "Reserva";     // de 30% a 59%
  }
  return "Torcedor";      // abaixo de 30% (chega aqui se nenhum if acima retornou)
}

// Título do jogo em amarelo e negrito.
console.log(chalk.bold.yellow("=== QUIZ DA COPA 2026 ==="));
// Contador de acertos (let porque muda).
let acertos = 0;

// Um passo do laço para cada pergunta (agora são 15).
for (let i = 0; i < perguntas.length; i++) {
  // Pergunta da vez.
  const q = perguntas[i];
  // Mostra "1) texto..." em ciano. \n deixa uma linha em branco antes.
  console.log(chalk.cyan(`\n${i + 1}) ${q.pergunta}`));
  // Mostra as opções numeradas a partir de 1.
  q.opcoes.forEach(function (opcao, indice) {
    console.log(`   ${indice + 1}. ${opcao}`);
  });
  // Lê a resposta (sempre texto).
  const resposta = prompt("Sua resposta (1-4): ");
  // Se acertou, verde e soma ponto; se errou, vermelho e revela a certa.
  if (verificar(resposta, q.correta)) {
    console.log(chalk.green("✅ Acertou!"));
    acertos++;
  } else {
    console.log(chalk.red(`❌ Errou! A resposta certa era a opção ${q.correta}.`));
  }
}

// Mensagem final (já existia).
console.log(chalk.bold.yellow("\n" + mensagemFinal(acertos, perguntas.length)));

// TODO 4 resolvido: aproveitamento e classificação.
// Guardamos o percentual numa variável para usá-lo duas vezes (cálculo e classificação).
const pct = percentual(acertos, perguntas.length);
// Texto com o aproveitamento.
console.log(chalk.white(`Aproveitamento: ${pct}%`));
// Escolhe a cor conforme a faixa: verde para quem foi bem, amarelo para o meio, vermelho para quem foi mal.
const classe = classificar(pct);
const corDaClasse = pct >= 60 ? chalk.green : pct >= 30 ? chalk.yellow : chalk.red;
// corDaClasse é uma FUNÇÃO do chalk; chamamos ela com o texto para pintá-lo.
console.log(corDaClasse(`Sua classificação: ${classe}`));
