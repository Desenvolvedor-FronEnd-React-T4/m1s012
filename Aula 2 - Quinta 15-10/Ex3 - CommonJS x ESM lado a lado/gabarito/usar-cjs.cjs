// ============================================================
// usar-cjs.cjs — CONSUMIDOR EM COMMONJS — GABARITO COMENTADO
// ============================================================

// TODO 4 resolvido: require traz o module.exports do outro arquivo.
// Aqui a extensão .cjs é necessária porque o arquivo não termina em .js.
const { saldoDeGols, golsPorJogo, SELECOES } = require("./copa.cjs");

// Em CommonJS, require, module e __dirname EXISTEM em todo arquivo.
console.log("typeof require:", typeof require);   // "function"
console.log("typeof module :", typeof module);    // "object"
console.log("__dirname      :", __dirname);        // caminho da pasta deste arquivo

// TODO 5 resolvido: usando o que veio do require.
console.log("Saldo (12 x 5)       :", saldoDeGols(12, 5));       // 7
console.log("Gols por jogo        :", golsPorJogo(172, 64));      // 2.6875
console.log("Seleções (CJS)       :", SELECOES);                  // 48

// TODO 6 resolvido: "import ... from" estático é proibido em CommonJS,
// mas import() é uma FUNÇÃO e funciona em qualquer lugar. Ela devolve uma Promise,
// por isso usamos async/await (assunto da S06).
async function usarEsm() {
  // await espera o módulo ESM ser carregado; copaEsm é o "objeto do módulo".
  const copaEsm = await import("./copa.mjs");
  // A exportação default fica na propriedade .default do objeto do módulo.
  console.log("Default do .mjs      :", copaEsm.default());
  // As exportações nomeadas ficam com os seus nomes.
  console.log("Saldo (ESM, 9 x 9)   :", copaEsm.saldoDeGols(9, 9));
}
usarEsm();
