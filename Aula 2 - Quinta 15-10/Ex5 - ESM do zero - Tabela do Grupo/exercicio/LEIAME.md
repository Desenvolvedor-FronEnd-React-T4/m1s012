# Ex5 — ESM do zero: Tabela do Grupo

**Aula 2 · quinta 15/10 · AO VIVO** — digitamos juntos, ~25 min. Resumo de tudo que vimos hoje, num projeto novo e pequeno.

## O que vamos construir
Uma tabela de classificação de um grupo da Copa (dados fictícios), em **ESM**, dividida em módulos:

| Arquivo | Papel | O que treina |
|---------|-------|--------------|
| `dados.js` | os dados | `export default` |
| `calculos.js` | as regras | `export` nomeado |
| `formatar.js` | a aparência | importar pacote (`chalk`) + importar módulo seu |
| `legado.cjs` | módulo antigo | CommonJS importado pelo ESM |
| `index.js` | o fluxo | todos os `import`, `import.meta.url`, `node:`, `await` no topo |

## Passo a passo

### 1. Declarar ESM
`npm install` e, no `package.json`, adicione (depois de `"main"`):
```json
"type": "module",
```

### 2. `dados.js` — exportação DEFAULT
```js
export default [
  { nome: "Escócia", pontos: 3, golsPro: 3, golsContra: 4 },
  { nome: "Brasil", pontos: 7, golsPro: 6, golsContra: 2 },
  { nome: "Haiti", pontos: 1, golsPro: 2, golsContra: 6 },
  { nome: "Marrocos", pontos: 4, golsPro: 4, golsContra: 3 },
];
```

### 3. `calculos.js` — exportações NOMEADAS
```js
export const VAGAS = 2;

export function saldoDeGols(selecao) {
  return selecao.golsPro - selecao.golsContra;
}

export function classificar(selecoes) {
  return [...selecoes].sort(function (a, b) {
    return b.pontos - a.pontos || saldoDeGols(b) - saldoDeGols(a);
  });
}
```

### 4. `formatar.js` — pacote + módulo seu
```js
import chalk from "chalk";
import { saldoDeGols } from "./calculos.js";

export function linha(selecao, posicao) {
  const saldo = saldoDeGols(selecao);
  const sinal = saldo > 0 ? "+" : "";
  return `${posicao}. ${selecao.nome.padEnd(10)} ${String(selecao.pontos).padStart(2)} pts   saldo ${sinal}${saldo}`;
}

export function destacar(texto, avanca) {
  return avanca ? chalk.green(texto) : chalk.red(texto);
}
```

### 5. `legado.cjs` — CommonJS dentro do projeto ESM
```js
module.exports = {
  titulo: "GRUPO X — COPA 2026 (fictício)",
};
```

### 6. `index.js` — juntar tudo
```js
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import selecoes from "./dados.js";
import { classificar, VAGAS } from "./calculos.js";
import * as fmt from "./formatar.js";
import legado from "./legado.cjs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

console.log(legado.titulo + "\n");

const tabela = classificar(selecoes);

const linhas = [];
tabela.forEach(function (selecao, indice) {
  const texto = fmt.linha(selecao, indice + 1);
  linhas.push(texto);
  console.log(fmt.destacar(texto, indice < VAGAS));
});

const destino = path.join(__dirname, "classificacao.txt");
await writeFile(destino, linhas.join("\n") + "\n", "utf-8");
console.log("\nTabela salva em:", destino);
```

### 7. Rodar
`npm start` — Brasil e Marrocos em **verde**, Escócia e Haiti em **vermelho**, e o arquivo `classificacao.txt` criado ao lado do `index.js`.

## Quebre de propósito (2 min cada) e leia o erro
| Faça | Erro esperado | Por quê |
|------|---------------|---------|
| Apague `"type": "module"` | `SyntaxError: Cannot use import statement outside a module` | sem a declaração, o Node trata `.js` como CommonJS |
| Troque `"./calculos.js"` por `"./calculos"` | `ERR_MODULE_NOT_FOUND` | em ESM a extensão é obrigatória |
| Troque `import selecoes from` por `import { selecoes } from` | `does not provide an export named 'selecoes'` | `dados.js` tem export **default**, não nomeado |
| Escreva `console.log(__dirname)` sem recriá-lo | `ReferenceError: __dirname is not defined` | `__dirname` é coisa do CommonJS |

## Pronto quando
- [ ] `npm start` imprime a tabela colorida e cria `classificacao.txt`.
- [ ] Você sabe dizer qual linha do projeto é **default** e quais são **nomeadas**.
- [ ] Você explica por que `import chalk from "chalk"` não tem `./` nem `.js`, e `import ... from "./calculos.js"` tem.
- [ ] Você explica para que serve `import.meta.url` neste projeto.

## Desafio extra (1 min)
Em `calculos.js`, mude `VAGAS` para `3` e rode de novo. Só **uma** linha mudou, e o resultado na tela mudou. Isso é modularizar.

Gabarito comentado: `../gabarito`.
