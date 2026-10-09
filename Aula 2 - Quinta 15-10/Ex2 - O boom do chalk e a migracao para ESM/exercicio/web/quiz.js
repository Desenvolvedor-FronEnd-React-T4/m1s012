// ============================================================
// QUIZ DA COPA NO NAVEGADOR — Aula 2 · Ex2 (parte web) — PONTO DE PARTIDA
// Este arquivo FUNCIONA como script clássico: dados + regras + tela juntos (como o index.js de terça).
// MISSÃO: separar em MÓDULOS ESM e carregar com <script type="module">:
//   TODO 1 — perguntas.js : mover o array e usar  export const perguntas = [...]
//   TODO 2 — placar.js    : mover verificar, mensagemFinal e classificar com  export function ...
//   TODO 3 — quiz.js      : ficar só com a tela e importar:
//            import { perguntas } from "./perguntas.js";
//            import { verificar, mensagemFinal, classificar } from "./placar.js";   // .js obrigatório!
//   TODO 4 — index.html   : trocar  <script src="quiz.js">  por  <script type="module" src="quiz.js">
//   TODO 5 — rodar por HTTP:  npm run web  (abra http://127.0.0.1:5500). Abrir o arquivo direto (file://) NÃO funciona com módulos.
// ============================================================

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

const elProgresso = document.getElementById("progresso");
const elBarra = document.getElementById("barra");
const elForm = document.getElementById("form-pergunta");
const elEnunciado = document.getElementById("enunciado");
const elOpcoes = document.getElementById("opcoes");
const elBotao = document.getElementById("botao");
const elFeedback = document.getElementById("feedback");
const elFinal = document.getElementById("final");
const elMensagem = document.getElementById("mensagem-final");
const elClasse = document.getElementById("classificacao");
const elRecomecar = document.getElementById("recomecar");

let indice = 0;
let acertos = 0;
let respondeu = false;

function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

function mensagemFinal(total, certas) {
  return `Você acertou ${certas} de ${total}! 🏆`;
}

function classificar(pct) {
  if (pct >= 90) return "Craque";
  if (pct >= 60) return "Titular";
  if (pct >= 30) return "Reserva";
  return "Torcedor";
}

function mostrarPergunta() {
  const q = perguntas[indice];
  respondeu = false;
  elProgresso.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;
  elBarra.style.width = `${(indice / perguntas.length) * 100}%`;
  elEnunciado.textContent = q.pergunta;
  elOpcoes.innerHTML = "";
  q.opcoes.forEach(function (texto, i) {
    const rotulo = document.createElement("label");
    rotulo.className = "opcao";
    const radio = document.createElement("input");
    radio.type = "radio";
    radio.name = "opcao";
    radio.value = String(i + 1);
    rotulo.appendChild(radio);
    rotulo.appendChild(document.createTextNode(texto));
    elOpcoes.appendChild(rotulo);
  });
  elFeedback.textContent = "";
  elFeedback.className = "feedback";
  elBotao.textContent = "Responder";
}

function mostrarFinal() {
  elForm.hidden = true;
  elFeedback.textContent = "";
  elBarra.style.width = "100%";
  const pct = Math.round((acertos / perguntas.length) * 100);
  elMensagem.textContent = mensagemFinal(perguntas.length, acertos);
  elClasse.textContent = `Aproveitamento: ${pct}% — ${classificar(pct)}`;
  elFinal.hidden = false;
  elRecomecar.focus();
}

elForm.addEventListener("submit", function (evento) {
  evento.preventDefault();
  if (respondeu) {
    indice++;
    if (indice < perguntas.length) mostrarPergunta();
    else mostrarFinal();
    return;
  }
  const marcada = elForm.querySelector("input[name=opcao]:checked");
  if (!marcada) {
    elFeedback.textContent = "Escolha uma opção antes de responder.";
    elFeedback.className = "feedback nao";
    return;
  }
  const q = perguntas[indice];
  const acertou = verificar(marcada.value, q.correta);
  respondeu = true;
  if (acertou) acertos++;
  elOpcoes.querySelectorAll(".opcao").forEach(function (rotulo, i) {
    const radio = rotulo.querySelector("input");
    radio.disabled = true;
    if (i + 1 === q.correta) rotulo.classList.add("certa");
    else if (radio.checked) rotulo.classList.add("errada");
  });
  elFeedback.textContent = acertou ? "✅ Acertou!" : `❌ Errou! A resposta certa era a opção ${q.correta}.`;
  elFeedback.className = acertou ? "feedback ok" : "feedback nao";
  elBotao.textContent = indice + 1 < perguntas.length ? "Próxima pergunta" : "Ver resultado";
});

elRecomecar.addEventListener("click", function () {
  indice = 0;
  acertos = 0;
  elFinal.hidden = true;
  elForm.hidden = false;
  mostrarPergunta();
});

mostrarPergunta();
