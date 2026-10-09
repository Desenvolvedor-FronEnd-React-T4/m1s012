# Ex1 — Modularizando o Quiz da Copa com CommonJS

**Aula 2 · quinta 15/10 · AO VIVO** — fazemos juntos em sala.

## Situação
O `index.js` cresceu e mistura **dados**, **regras** e **fluxo**. Achar e mudar algo já está difícil — imagine com 50 perguntas.

## Passo a passo
1. `npm install` e `npm start` — confirme que o jogo funciona **antes** de mexer.
2. **Dados:** recorte o array `perguntas` para `perguntas.js` e termine com `module.exports = perguntas;`
3. **Regras:** recorte `verificar` e `mensagemFinal` para `placar.js` e termine com `module.exports = { verificar, mensagemFinal };`
4. No `index.js`, importe:
   ```js
   const perguntas = require("./perguntas");
   const { verificar, mensagemFinal } = require("./placar");
   ```
5. `npm start` de novo — deve funcionar **igual**.

## Pronto quando
- [ ] `index.js` ficou só com os `require` e o fluxo do jogo.
- [ ] `perguntas.js` só tem dados e `placar.js` só tem regras.
- [ ] O jogo roda como antes.

## Perguntas para pensar
- O que acontece se você esquecer o `module.exports` em `placar.js`? (Dica: leia o erro.)
- Por que `require("./perguntas")` começa com `./`, mas `require("chalk")` não?

Gabarito comentado: `../gabarito`.
