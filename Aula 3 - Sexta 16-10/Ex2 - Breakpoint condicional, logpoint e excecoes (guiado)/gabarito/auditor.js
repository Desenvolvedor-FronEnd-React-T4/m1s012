// ============================================================
// auditor.js (ESM) — GABARITO COMENTADO — defeitos corrigidos
// ============================================================
import { resultados } from "./resultados.js";

function somarAcertos(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    const r = lista[i];
    // *** BUG 1 (corrigido) ***
    // Antes: soma += r.acertos;
    // Quando r.acertos é TEXTO ("7"), o operador + deixa de somar e passa a CONCATENAR:
    //   número + texto  ->  texto   (ex.: 200 + "7" vira "2007")
    // e todas as voltas seguintes continuam concatenando. A "soma" vira um texto enorme.
    // Como achar: breakpoint CONDICIONAL na linha da soma com a condição  typeof r.acertos !== "number"
    // -> para só no registro 37. Watch: typeof soma muda de "number" para "string" depois dele.
    // CORREÇÃO: Number() converte para número ANTES de somar (e funciona com número também).
    soma += Number(r.acertos);
  }
  return soma;
}

const total = somarAcertos(resultados);
// Divide a soma pelo número de partidas.
const media = total / resultados.length;

console.log(`Partidas auditadas: ${resultados.length}`);
console.log(`Soma de acertos: ${total}`);
// toFixed(2) mostra 2 casas decimais.
console.log(`Média de acertos: ${media.toFixed(2)}`);

// *** BUG 2 (corrigido) ***
// Antes: resultados.find(r => r.acertos === 10)  -> ninguém fez 10, então find devolve undefined,
// e a linha seguinte lançava: TypeError: Cannot read properties of undefined (reading 'jogador').
// Como achar: "Pause on uncaught exceptions" (painel Breakpoints) -> para na linha do erro; campeao = undefined.
// CORREÇÃO: descobrir a MAIOR pontuação real em vez de assumir que existe um 10.
const maior = Math.max(...resultados.map(function (r) { return Number(r.acertos); }));
// Agora o find procura a pontuação que de fato existe (comparando como número).
const campeao = resultados.find(function (r) {
  return Number(r.acertos) === maior;
});
// Segurança extra: se a lista estiver vazia, não quebrar.
if (campeao) {
  console.log(`Maior pontuação: ${campeao.jogador} (${campeao.acertos} acertos)`);
} else {
  console.log("Nenhuma partida encontrada.");
}
