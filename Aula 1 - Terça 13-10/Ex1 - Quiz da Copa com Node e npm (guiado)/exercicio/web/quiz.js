import { perguntas } from "./perguntas.js";

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
