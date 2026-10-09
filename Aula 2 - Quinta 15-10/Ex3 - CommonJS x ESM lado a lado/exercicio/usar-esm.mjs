// usar-esm.mjs — consumidor em ESM
import { fileURLToPath } from "node:url";   // "node:" marca um módulo NATIVO do Node
import path from "node:path";

// TODO 7 — importe (nomeado) saldoDeGols e golsPorJogo de "./copa.mjs" — a extensão é obrigatória
// TODO 8 — importe a exportação default de "./copa.mjs" com o nome resumo
// TODO 9 — importe tudo como namespace:  import * as copa from "./copa.mjs";
// TODO 10 — importe o módulo CommonJS:  import copaCjs from "./copa.cjs";
//           (o "default" de um módulo CJS é o seu module.exports)

console.log("typeof require:", typeof require);   // em ESM não existe -> "undefined"
console.log("typeof module :", typeof module);    // "undefined"

// TODO 11 — recriar o __dirname:
//   const __filename = fileURLToPath(import.meta.url);
//   const __dirname = path.dirname(__filename);
//   console.log("__dirname:", __dirname);

// TODO 12 — use as funções importadas e imprima também copaCjs.SELECOES
