// usar-cjs.cjs — consumidor em COMMONJS

// TODO 4 — importe o copa.cjs com require (caminho relativo, COM a extensão .cjs)
//          e desestruture saldoDeGols, golsPorJogo e SELECOES

console.log("typeof require:", typeof require);   // function — existe em CommonJS
console.log("typeof module :", typeof module);    // object
console.log("__dirname      :", __dirname);        // pasta deste arquivo — só existe em CommonJS

// TODO 5 — mostre saldoDeGols(12, 5) e golsPorJogo(172, 64)

// TODO 6 — CommonJS NÃO pode usar "import ... from" estático, mas pode usar import() DINÂMICO,
//          que devolve uma Promise. Dentro de uma função async:
//   async function usarEsm() {
//     const copaEsm = await import("./copa.mjs");
//     console.log(copaEsm.default());          // exportação default
//   }
//   usarEsm();
