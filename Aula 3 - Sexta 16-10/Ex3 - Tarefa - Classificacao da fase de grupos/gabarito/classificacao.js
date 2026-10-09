// ============================================================
// classificacao.js (ESM) — GABARITO COMENTADO — 3 defeitos corrigidos
// ============================================================
import { jogos } from "./jogos.js";

// Objeto-dicionário: a chave é o nome da seleção e o valor é a linha da tabela dela.
const tabela = {};

// Devolve a linha da seleção; cria a linha zerada se for a primeira vez que ela aparece.
function registrar(nome) {
  if (!tabela[nome]) {
    tabela[nome] = { nome: nome, pontos: 0, jogos: 0, gp: 0, gc: 0 };
  }
  return tabela[nome];
}

// Percorre todos os jogos do grupo.
for (let i = 0; i < jogos.length; i++) {
  const jogo = jogos[i];
  // Pega (ou cria) a linha de cada time deste jogo.
  const timeA = registrar(jogo.a);
  const timeB = registrar(jogo.b);

  // Cada time jogou mais uma partida.
  timeA.jogos++;
  timeB.jogos++;
  // Gols pró (gp) e gols contra (gc): o que um marca, o outro sofre.
  timeA.gp += jogo.golsA;
  timeA.gc += jogo.golsB;
  timeB.gp += jogo.golsB;
  timeB.gc += jogo.golsA;

  // *** BUG 1 (corrigido) — pontos do empate ***
  // Antes: if (jogo.golsA >= jogo.golsB) { timeA.pontos += 3; }
  // Com ">=", um EMPATE dava 3 pontos ao time A e nenhum ao B.
  // Como achar: breakpoint com condição  jogo.golsA === jogo.golsB  -> Watch timeA.pontos / timeB.pontos.
  if (jogo.golsA > jogo.golsB) {
    timeA.pontos += 3;               // vitória do A: 3 pontos
  } else if (jogo.golsB > jogo.golsA) {
    timeB.pontos += 3;               // vitória do B: 3 pontos
  } else {
    timeA.pontos += 1;               // empate: 1 ponto para cada
    timeB.pontos += 1;
  }
}

// *** BUG 2 (corrigido) — saldo de gols com o sinal invertido ***
// Antes: return time.gc - time.gp;   (gols contra MENOS gols pró)
// Saldo = o que marcou MENOS o que sofreu.
// Como achar: Watch saldo(t) para um time que marcou mais do que sofreu e ver o número NEGATIVO.
function saldo(time) {
  return time.gp - time.gc;
}

// Object.values transforma o dicionário num array de linhas, que podemos ordenar.
const lista = Object.values(tabela);

// *** BUG 3 (corrigido) — comparador do sort ***
// Antes: return y.pontos > x.pontos;   (devolve true/false)
// sort() espera um NÚMERO: negativo (x vem antes), positivo (y vem antes) ou 0 (empate).
// true vira 1 e false vira 0 — nunca negativo — então a ordem sai errada/instável.
// Como achar: breakpoint logo APÓS o sort e Watch lista.map(t => t.nome + ":" + t.pontos).
lista.sort(function (x, y) {
  // 1º critério: mais pontos primeiro (y - x = ordem decrescente).
  if (y.pontos !== x.pontos) {
    return y.pontos - x.pontos;
  }
  // 2º critério (empate em pontos): maior saldo de gols.
  if (saldo(y) !== saldo(x)) {
    return saldo(y) - saldo(x);
  }
  // 3º critério: mais gols pró.
  return y.gp - x.gp;
});

// Cabeçalho da tabela.
console.log("Pos  Seleção   P  J  GP  GC  SG");
// Uma linha por seleção; "indice + 1" é a posição.
lista.forEach(function (t, indice) {
  const sg = saldo(t);
  // Sinal de + para saldo positivo (o negativo já traz o "-").
  const sgTexto = (sg > 0 ? "+" : "") + sg;
  // padEnd(n) completa com espaços à direita até n caracteres, alinhando as colunas.
  console.log(
    String(indice + 1).padEnd(4) + " " +
    t.nome.padEnd(9) + " " +
    String(t.pontos).padEnd(2) + " " +
    String(t.jogos).padEnd(2) + " " +
    String(t.gp).padEnd(3) + " " +
    String(t.gc).padEnd(3) + " " +
    sgTexto
  );
});
