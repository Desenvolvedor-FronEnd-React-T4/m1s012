# Respostas esperadas — Ex3

| Pergunta | Resposta |
|----------|----------|
| O que imprime `typeof require` dentro de `usar-esm.mjs`? | `"undefined"` — o ESM não tem `require`; `typeof` não lança erro com nomes inexistentes. Usar `require(...)` direto daria `ReferenceError: require is not defined in ES module scope`. |
| O que imprime `typeof module` dentro de `usar-cjs.cjs`? | `"object"` — em CommonJS todo arquivo recebe `module`, `exports`, `require`, `__filename` e `__dirname`. |
| Qual é a diferença entre `export` e `export default`? | `export` publica itens com **nome** (pode haver vários; quem importa usa `{ nome }`). `export default` publica **um** valor principal (só um por arquivo); quem importa escolhe o nome. |
| Por que `import()` devolve uma Promise? | Carregar um módulo ESM é **assíncrono** (o ESM pode ter `await` no topo). Por isso a forma dinâmica devolve uma Promise — e é a única forma de o CommonJS usar um módulo ESM. |
| Como recriar o `__dirname` no ESM? | `const __dirname = path.dirname(fileURLToPath(import.meta.url));` |

## Quadro-resumo CommonJS × ESM
| | CommonJS | ESM |
|---|---|---|
| Importar | `require("x")` | `import x from "x"` |
| Exportar | `module.exports = ...` | `export` / `export default` |
| Carregamento | síncrono | assíncrono |
| Extensão do arquivo local | opcional (`.js` pode ser omitido) | **obrigatória** |
| `__dirname` / `__filename` | existem | não existem (`import.meta.url`) |
| `import()` dinâmico | disponível | disponível |
| `await` no topo do arquivo | não | sim (top-level await) |
| Onde nasceu | Node (2009) | padrão da linguagem (ES2015); funciona também no navegador |
| Como o Node reconhece | `.cjs` ou `.js` sem `"type":"module"` | `.mjs` ou `.js` com `"type":"module"` |
