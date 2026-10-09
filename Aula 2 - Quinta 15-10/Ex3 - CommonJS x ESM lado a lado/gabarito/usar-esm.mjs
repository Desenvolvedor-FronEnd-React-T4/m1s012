// ============================================================
// usar-esm.mjs — CONSUMIDOR EM ESM — GABARITO COMENTADO
// ============================================================

// Módulos NATIVOS do Node (vêm com o Node, não precisam de npm install). O prefixo "node:" deixa isso explícito.
import { fileURLToPath } from "node:url";
import path from "node:path";

// TODO 7 resolvido: import NOMEADO — chaves, nomes iguais aos exportados, extensão obrigatória.
import { saldoDeGols, golsPorJogo } from "./copa.mjs";

// TODO 8 resolvido: import DEFAULT — sem chaves, nome livre (escolhemos "resumo").
import resumo from "./copa.mjs";

// TODO 9 resolvido: namespace — junta TODAS as exportações nomeadas num objeto "copa".
import * as copa from "./copa.mjs";

// TODO 10 resolvido: importando um módulo COMMONJS pelo ESM. O "default" é o module.exports inteiro.
import copaCjs from "./copa.cjs";

// Em ESM não existem require nem module. typeof não dá erro para nomes inexistentes: devolve "undefined".
console.log("typeof require:", typeof require);   // "undefined"
console.log("typeof module :", typeof module);    // "undefined"

// TODO 11 resolvido: import.meta.url é o endereço deste arquivo no formato file:///C:/.../usar-esm.mjs.
// fileURLToPath converte esse endereço em caminho normal; path.dirname tira o nome do arquivo.
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log("__dirname      :", __dirname);

// TODO 12 resolvido: usando tudo que foi importado.
console.log("Saldo (12 x 5)       :", saldoDeGols(12, 5));      // 7
console.log("Gols por jogo        :", golsPorJogo(172, 64));     // 2.6875
console.log("Default (resumo)     :", resumo());                 // Copa com 48 seleções
console.log("Namespace            :", copa.SELECOES);            // 48 (nomeada, via namespace)
console.log("Seleções (do CJS)    :", copaCjs.SELECOES);         // 48 (vindo do copa.cjs)
console.log("Saldo (do CJS)       :", copaCjs.saldoDeGols(3, 1)); // 2
