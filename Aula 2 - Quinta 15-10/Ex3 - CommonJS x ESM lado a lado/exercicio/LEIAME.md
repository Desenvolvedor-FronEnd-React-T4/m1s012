# Ex3 — CommonJS × ESM lado a lado (micro-desafio)

**Aula 2 · quinta 15/10 · AO VIVO** — em duplas, ~25 min.

## Ideia
Dois módulos com as **mesmas funções**, um em cada sistema, e dois programas que os usam. Aqui **não há `package.json` com `"type"`**:
quem declara o sistema é a **extensão** do arquivo — `.cjs` = CommonJS, `.mjs` = ESM.

## Arquivos (já criados, com `TODO`)
| Arquivo | Sistema | Papel |
|---------|---------|-------|
| `copa.cjs` | CommonJS | módulo com `module.exports` |
| `copa.mjs` | ESM | o mesmo módulo com `export` nomeado + `export default` |
| `usar-cjs.cjs` | CommonJS | consome o `.cjs` com `require` e o `.mjs` com `import()` |
| `usar-esm.mjs` | ESM | consome o `.mjs`, o `.cjs` e usa `import.meta.url` |

## Rodar
```
node usar-cjs.cjs
node usar-esm.mjs
```

## Tarefas (siga os `TODO` nos arquivos)
1. Completar as exportações de `copa.cjs` e `copa.mjs`.
2. Em `usar-cjs.cjs`: `require` do `.cjs` e `import()` **dinâmico** do `.mjs` (é assíncrono: `await` dentro de `async function`).
3. Em `usar-esm.mjs`: import nomeado, import default, `import * as`, e o `.cjs` importado pelo ESM.
4. Recriar o `__dirname` no ESM com `import.meta.url` + `fileURLToPath`.
5. Registrar suas respostas na tabela de `RESPOSTAS.md`.

## Pronto quando
- [ ] Os dois programas rodam e imprimem os mesmos valores.
- [ ] Você sabe dizer por que `require` falha dentro do `.mjs` e `import ... from` falha dentro do `.cjs`.

Gabarito comentado: `../gabarito`.
