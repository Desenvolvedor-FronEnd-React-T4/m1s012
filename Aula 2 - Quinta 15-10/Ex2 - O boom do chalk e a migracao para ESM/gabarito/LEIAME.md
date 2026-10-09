# Gabarito do Ex2 — duas pastas

- `A-band-aid-require-default/` — CommonJS com `chalk@latest` lido por `.default` (socorro rápido). **Só roda em Node 22.12+ (ou 20.17+ com `node --experimental-require-module index.js`);** no Node 20 sem a opção o resultado é `ERR_REQUIRE_ESM`.
- `B-esm-correto/` — projeto convertido para **ESM** (`"type": "module"`, `import`/`export`, `.js` nos imports). **É o que seguimos.**

Rode cada uma com `npm install` e `npm start`.

## Diferenças do conserto B, linha a linha
| Arquivo | Antes (CommonJS) | Depois (ESM) |
|---------|------------------|--------------|
| `package.json` | (sem `type`) | `"type": "module"` |
| `index.js` | `const chalk = require("chalk")` | `import chalk from "chalk"` |
| `index.js` | `const perguntas = require("./perguntas")` | `import { perguntas } from "./perguntas.js"` |
| `index.js` | `const { verificar, mensagemFinal } = require("./placar")` | `import { verificar, mensagemFinal } from "./placar.js"` |
| `perguntas.js` | `module.exports = perguntas` | `export const perguntas = [...]` |
| `placar.js` | `module.exports = { verificar, mensagemFinal }` | `export function verificar...` / `export function mensagemFinal...` |
