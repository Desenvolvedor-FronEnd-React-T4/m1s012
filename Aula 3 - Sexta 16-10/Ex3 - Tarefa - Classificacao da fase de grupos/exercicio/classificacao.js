import { jogos } from "./jogos.js";

const tabela = {};

function registrar(nome) {
  if (!tabela[nome]) {
    tabela[nome] = { nome: nome, pontos: 0, jogos: 0, gp: 0, gc: 0 };
  }
  return tabela[nome];
}

for (let i = 0; i < jogos.length; i++) {
  const jogo = jogos[i];
  const timeA = registrar(jogo.a);
  const timeB = registrar(jogo.b);

  timeA.jogos++;
  timeB.jogos++;
  timeA.gp += jogo.golsA;
  timeA.gc += jogo.golsB;
  timeB.gp += jogo.golsB;
  timeB.gc += jogo.golsA;

  if (jogo.golsA >= jogo.golsB) {
    timeA.pontos += 3;
  }
  if (jogo.golsB > jogo.golsA) {
    timeB.pontos += 3;
  }
}

function saldo(time) {
  return time.gc - time.gp;
}

const lista = Object.values(tabela);

lista.sort(function (x, y) {
  return y.pontos > x.pontos;
});

console.log("Pos  Seleção   P  J  GP  GC  SG");
lista.forEach(function (t, indice) {
  const sg = saldo(t);
  const sgTexto = (sg > 0 ? "+" : "") + sg;
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
