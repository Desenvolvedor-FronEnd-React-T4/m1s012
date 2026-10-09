# Ex2 — O boom do chalk e a migração para ESM

**Aula 2 · quinta 15/10 · AO VIVO**

## Situação
O quiz está modularizado em **CommonJS** e usa o `chalk@4`. O professor pede: *"atualize o chalk para a versão mais nova"*.

## Parte A — Provocar o erro
1. `npm install` e `npm start` — o jogo funciona.
2. `npm install chalk@latest` (hoje instala a 6.x; a 5.x já era assim também).
3. `npm start` → 💥 **TypeError** logo na primeira linha do fluxo. Leia a mensagem inteira (não tem `Cannot find module`: o pacote **foi encontrado**).
4. No `index.js`, temporariamente: `console.log(chalk);` — o que aparece? Onde está a função `chalk`?

## Parte B — Os dois consertos
**Conserto 1 (band-aid):** `const chalk = require("chalk").default;` — roda, mas o projeto continua "mentindo" que é CommonJS.
**Conserto 2 (o certo):** assumir ESM.
1. No `package.json`: `"type": "module"`.
2. `index.js`: `require` → `import` (veja o quadro abaixo).
3. `perguntas.js` e `placar.js`: `module.exports` → `export`.
4. Em todo `import` de arquivo **seu**, a extensão `.js` é obrigatória.

| CommonJS | ESM |
|----------|-----|
| `const x = require("pacote")` | `import x from "pacote"` |
| `const { a, b } = require("./arq")` | `import { a, b } from "./arq.js"` |
| `module.exports = valor` | `export default valor` |
| `module.exports = { a, b }` | `export function a() {}` / `export const b = 1` |

## Pronto quando
- [ ] `npm start` roda o quiz com o chalk **novo**.
- [ ] Nenhum `require` nem `module.exports` sobrou nos três arquivos.
- [ ] Você explica, com as suas palavras, por que o primeiro erro foi um `TypeError` e não `Cannot find module`.

## Se o erro for diferente do esperado
- Em versões **antigas** do Node (anteriores à 22.12 / 20.19) o erro é `ERR_REQUIRE_ESM` — o motivo é o mesmo: o pacote é ESM e o `require` não o carrega. Confira com `node --version`.
- O chalk 6 exige **Node 22 ou mais novo**. Com Node mais antigo, o npm só **avisa** (`EBADENGINE`) — ou use `npm install chalk@5` (também ESM).
- **Seu Node é 20.x (ex.: 20.18)?** Sem opção você verá `ERR_REQUIRE_ESM`. Para ver o **mesmo `TypeError` da turma** rode `node --experimental-require-module index.js` (Node 20.17 ou mais novo; aparece um aviso experimental, é normal).
- Para instalar/atualizar o Node em 1 passo: `winget install OpenJS.NodeJS.LTS` (veja o Guia de Instalação com fluxogramas).

## Parte web (ESM no navegador)
A pasta `web/` tem o quiz em HTML + CSS + JS como **script clássico** (tudo em `quiz.js`). Siga os `TODO` do topo do `quiz.js`: separe em `perguntas.js` e `placar.js` (módulos ESM), troque o `<script>` por `<script type="module">` e rode `npm run web` (http://127.0.0.1:5500). Abrir o HTML direto (`file://`) **não** funciona com módulos. Passo a passo: `TESTAR-NO-TERMINAL.md` (na raiz).

Gabarito comentado: `../gabarito` (`A-band-aid-require-default` e `B-esm-correto`, que traz também `web/`).
