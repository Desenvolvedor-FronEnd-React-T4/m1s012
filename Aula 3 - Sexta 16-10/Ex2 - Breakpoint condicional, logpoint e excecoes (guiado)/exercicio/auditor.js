import { resultados } from "./resultados.js";

function somarAcertos(lista) {
  let soma = 0;
  for (let i = 0; i < lista.length; i++) {
    const r = lista[i];
    soma += r.acertos;
  }
  return soma;
}

const total = somarAcertos(resultados);
const media = total / resultados.length;

console.log(`Partidas auditadas: ${resultados.length}`);
console.log(`Soma de acertos: ${total}`);
console.log(`Média de acertos: ${media.toFixed(2)}`);

const campeao = resultados.find(function (r) {
  return r.acertos === 10;
});
console.log(`Maior pontuação: ${campeao.jogador} (${campeao.acertos} acertos)`);
