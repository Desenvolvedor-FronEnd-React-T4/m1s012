# Ex4 — TAREFA ⭐ Ranking do Quiz com `node:fs` (ESM)

**Aula 2 · quinta 15/10 · tarefa para casa** (opcional, vale como prática de módulos).

## Ponto de partida
O Quiz da Copa já está em **ESM** (resultado do Ex2, conserto B). Rode `npm install` e `npm start`.

## O que fazer (siga os `TODO` de `ranking.js` e `index.js`)
1. Criar o módulo `ranking.js` com **exportações nomeadas** (`carregarRanking`, `salvarPontuacao`, `melhoresDoRanking`).
2. Usar os módulos **nativos** `node:fs`, `node:path` e `node:url`.
3. Persistir o ranking em `ranking.json` (texto JSON — o mesmo `JSON.stringify`/`JSON.parse` da semana passada).
4. Perguntar o nome no início e mostrar o **TOP 5** no fim com `console.table`.

## Pronto quando
- [ ] Jogar duas vezes com nomes diferentes e ver as duas pontuações na tabela.
- [ ] Fechar e abrir o programa de novo e o ranking continuar lá.
- [ ] Apagar o `ranking.json` e o jogo não quebrar (1ª execução → lista vazia).
- [ ] O programa funciona iniciado de **outra pasta** (`node caminho/para/index.js`) — por isso o caminho vem de `import.meta.url`.

Gabarito comentado: `../gabarito`.
