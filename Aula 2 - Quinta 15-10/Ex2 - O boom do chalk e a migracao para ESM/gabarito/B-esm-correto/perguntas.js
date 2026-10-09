// ============================================================
// perguntas.js — MÓDULO DOS DADOS (ESM) — GABARITO COMENTADO
// ============================================================

// "export const" publica a constante com NOME. Quem importar precisa usar o mesmo nome entre chaves.
// (No CommonJS era: module.exports = perguntas;)
export const perguntas = [
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
