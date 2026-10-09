// ============================================================
// quiz.js — Quiz da Copa no NAVEGADOR (ESM) — GABARITO COMENTADO
// Carregado no HTML com <script type="module">, por isso podemos usar import/export.
// Módulos no navegador exigem HTTP (npm run web), nunca abrir o arquivo direto (file://).
// ============================================================

// IMPORTA a lista de perguntas. É o mesmo array do quiz do terminal, agora como módulo ESM.
// A extensão ".js" é OBRIGATÓRIA também no navegador.
import { perguntas } from "./perguntas.js";

// ---------- Elementos da página ----------
// getElementById procura no HTML o elemento com aquele id. Guardamos em constantes para não procurar toda hora.
const elProgresso = document.getElementById("progresso");   // texto "Pergunta 1 de 10"
const elBarra = document.getElementById("barra");           // barra verde que cresce
const elForm = document.getElementById("form-pergunta");    // formulário da pergunta
const elEnunciado = document.getElementById("enunciado");   // <legend> com o texto da pergunta
const elOpcoes = document.getElementById("opcoes");         // contêiner das alternativas
const elBotao = document.getElementById("botao");           // botão Responder/Próxima
const elFeedback = document.getElementById("feedback");     // mensagem Acertou/Errou (região aria-live)
const elFinal = document.getElementById("final");           // seção do resultado final
const elMensagem = document.getElementById("mensagem-final");
const elClasse = document.getElementById("classificacao");
const elRecomecar = document.getElementById("recomecar");   // botão Jogar de novo

// ---------- Estado do jogo ----------
let indice = 0;        // posição da pergunta atual no array (começa em 0)
let acertos = 0;       // quantos pontos já fez
let respondeu = false; // true depois de clicar em Responder (o próximo clique avança)

// ---------- Regras (as MESMAS do terminal) ----------
function verificar(resposta, correta) {
  // O value de um input é SEMPRE texto ("3"); correta é número (3). Number() converte antes do ===.
  return Number(resposta) === correta;
}

function mensagemFinal(total, certas) {
  // Template string: ${...} insere os valores no texto.
  return `Você acertou ${certas} de ${total}! 🏆`;
}

function classificar(pct) {
  if (pct >= 90) return "Craque";   // 90% ou mais
  if (pct >= 60) return "Titular";  // 60% a 89%
  if (pct >= 30) return "Reserva";  // 30% a 59%
  return "Torcedor";                // abaixo de 30%
}

// ---------- Tela ----------
function mostrarPergunta() {
  const q = perguntas[indice];                                   // pergunta da vez
  respondeu = false;                                             // ainda não respondeu esta
  elProgresso.textContent = `Pergunta ${indice + 1} de ${perguntas.length}`;   // +1: contagem humana
  elBarra.style.width = `${(indice / perguntas.length) * 100}%`; // largura proporcional ao progresso
  elEnunciado.textContent = q.pergunta;                          // textContent é seguro (não interpreta HTML)
  elOpcoes.innerHTML = "";                                       // limpa as alternativas antigas
  q.opcoes.forEach(function (texto, i) {                         // uma <label> com <input radio> por opção
    const rotulo = document.createElement("label");              // label inteira clicável
    rotulo.className = "opcao";                                  // classe do CSS
    const radio = document.createElement("input");
    radio.type = "radio";                                        // só uma escolha por vez
    radio.name = "opcao";                                        // mesmo name = mesmo grupo
    radio.value = String(i + 1);                                 // 1 a 4, igual ao quiz do terminal
    rotulo.appendChild(radio);                                   // coloca o radio dentro da label
    rotulo.appendChild(document.createTextNode(texto));          // e depois o texto
    elOpcoes.appendChild(rotulo);                                // e a label dentro do contêiner
  });
  elFeedback.textContent = "";                                   // apaga o feedback anterior
  elFeedback.className = "feedback";                             // remove as cores ok/nao
  elBotao.textContent = "Responder";
}

function mostrarFinal() {
  elForm.hidden = true;                                          // esconde o formulário
  elFeedback.textContent = "";
  elBarra.style.width = "100%";                                  // barra cheia
  const pct = Math.round((acertos / perguntas.length) * 100);    // aproveitamento arredondado
  elMensagem.textContent = mensagemFinal(perguntas.length, acertos);
  elClasse.textContent = `Aproveitamento: ${pct}% — ${classificar(pct)}`;
  elFinal.hidden = false;                                        // mostra o resultado
  elRecomecar.focus();                                           // leva o foco do teclado ao botão (acessibilidade)
}

// ---------- Eventos ----------
elForm.addEventListener("submit", function (evento) {
  evento.preventDefault();                                       // não deixa o navegador recarregar a página
  if (respondeu) {                                               // 2º clique: avançar
    indice++;
    if (indice < perguntas.length) mostrarPergunta();
    else mostrarFinal();
    return;                                                      // sai da função: nada mais a fazer
  }
  const marcada = elForm.querySelector("input[name=opcao]:checked");  // radio marcado (ou null)
  if (!marcada) {                                                // nada marcado: pede para escolher
    elFeedback.textContent = "Escolha uma opção antes de responder.";
    elFeedback.className = "feedback nao";
    return;
  }
  const q = perguntas[indice];
  const acertou = verificar(marcada.value, q.correta);           // true/false
  respondeu = true;
  if (acertou) acertos++;                                        // soma ponto
  elOpcoes.querySelectorAll(".opcao").forEach(function (rotulo, i) {
    const radio = rotulo.querySelector("input");
    radio.disabled = true;                                       // trava as opções
    if (i + 1 === q.correta) rotulo.classList.add("certa");      // destaca a certa em verde
    else if (radio.checked) rotulo.classList.add("errada");      // destaca a escolhida errada em vermelho
  });
  elFeedback.textContent = acertou ? "✅ Acertou!" : `❌ Errou! A resposta certa era a opção ${q.correta}.`;
  elFeedback.className = acertou ? "feedback ok" : "feedback nao";
  elBotao.textContent = indice + 1 < perguntas.length ? "Próxima pergunta" : "Ver resultado";
});

elRecomecar.addEventListener("click", function () {
  indice = 0;                  // volta ao início
  acertos = 0;
  elFinal.hidden = true;
  elForm.hidden = false;
  mostrarPergunta();
});

// Primeira pergunta ao carregar a página.
mostrarPergunta();
