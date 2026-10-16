// ============================================================
// index.js — FLUXO DO PROGRAMA (ESM) — GABARITO COMENTADO
// Pré-requisito: "type": "module" no package.json (é ele que DECLARA o sistema do projeto).
// ============================================================

// 1) Módulos NATIVOS do Node: prefixo "node:", sem npm install.
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

// 2) Import DEFAULT: sem chaves, nome livre ("selecoes" é escolha nossa).
import selecoes from "./dados.js";

// 3) Import NOMEADO: chaves e o mesmo nome exportado. A extensão .js é OBRIGATÓRIA (sem ela: ERR_MODULE_NOT_FOUND).
import { classificar, VAGAS } from "./calculos.js";

// 4) Namespace: junta TODAS as exportações nomeadas num objeto (fmt.linha, fmt.destacar).
import * as fmt from "./formatar.js";

// 5) INTEROP: ESM importando um módulo CommonJS. O "default" é o module.exports inteiro.
import legado from "./legado.cjs";

// 6) __dirname não existe em ESM. Recriamos com import.meta.url (endereço deste arquivo) + fileURLToPath.
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// ---------- O FLUXO ----------
console.log(legado.titulo + "\n");

const tabela = classificar(selecoes);

// Guardamos o texto puro para gravar no arquivo; na tela vai colorido.
const linhas = [];
tabela.forEach(function (selecao, indice) {
  const texto = fmt.linha(selecao, indice + 1);
  linhas.push(texto);
  console.log(fmt.destacar(texto, indice < VAGAS));
});

// 7) TOP-LEVEL AWAIT: em ESM dá para usar await direto no arquivo, sem async function em volta.
const destino = path.join(__dirname, "classificacao.txt");
await writeFile(destino, linhas.join("\n") + "\n", "utf-8");
console.log("\nTabela salva em:", destino);
