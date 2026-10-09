// ============================================================
// QUIZ DA COPA 2026 — Aula 1 (terça 13/10) — Ex1 (live coding)
// Arquivo: index.js
// Como usar: acompanhe o vídeo e o LEIAME.md. Os DADOS (perguntas)
// já estão prontos. O resto você escreve junto com o professor.
// ============================================================

// PASSO 4 — TODO: importar o prompt-sync (depois de: npm install prompt-sync)
//   dica: const promptSync = require("prompt-sync"); const prompt = promptSync();

// PASSO 7 — TODO: importar o chalk (depois de: npm install chalk@4)
//   dica: const chalk = require("chalk");

// ---------- 1) OS DADOS (prontos — não precisa digitar) ----------
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

// ---------- 2) AS REGRAS ----------
// PASSO 5 — TODO: function verificar(resposta, correta)  -> devolve true/false
//   lembre: o prompt devolve TEXTO ("3"), a resposta correta é NÚMERO (3)
// PASSO 5 — TODO: function mensagemFinal(acertos, total) -> devolve o texto do fim

// ---------- 3) O FLUXO ----------
// PASSO 5 — TODO: título do quiz e let acertos = 0
// PASSO 5 — TODO: for (let i = 0; i < perguntas.length; i++) { ... }
//   dentro do laço: mostrar a pergunta, as opções numeradas, ler a resposta,
//   chamar verificar() e mostrar "Acertou" ou "Errou"
// PASSO 7 — TODO: pintar as mensagens com chalk (verde = acerto, vermelho = erro)
// PASSO 5 — TODO: mostrar a mensagemFinal() depois do laço
