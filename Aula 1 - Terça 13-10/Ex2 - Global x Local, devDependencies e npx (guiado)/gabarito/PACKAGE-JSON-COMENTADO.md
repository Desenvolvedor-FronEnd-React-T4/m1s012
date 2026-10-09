# `package.json` do Ex2 — o que mudou em relação ao Ex1

```json
  "scripts": {
    "start": "node saudacao.js",
    "dev": "nodemon saudacao.js"
  },
```
- **`start`** — roda o programa uma vez (uso normal). Pode ser chamado só como `npm start`.
- **`dev`** — roda com o **nodemon**, que reinicia a cada alteração salva. Como `dev` não é um nome especial, o comando é `npm run dev`.
- Dentro de `scripts` o npm acrescenta `node_modules/.bin` ao PATH — por isso `nodemon` funciona aqui **sem** estar instalado globalmente.

```json
  "devDependencies": {
    "nodemon": "^3.1.14"
  }
```
- **devDependencies** — pacotes necessários só para **desenvolver** (nodemon, testes, formatadores). Em produção, `npm install --omit=dev` ignora esta seção.
- Foi escrito pelo comando `npm install --save-dev nodemon` (`-D` é o apelido).
- Compare com **dependencies** (Ex1): lá ficam as bibliotecas que o código **usa para funcionar** (`chalk`, `prompt-sync`).

## Global × local — resumo
| | Global (`-g`) | Local (padrão) |
|---|---|---|
| Onde fica | Pasta do sistema (`npm root -g`) | `node_modules/` do projeto |
| Aparece no `package.json`? | **Não** | **Sim** |
| Colega que clona o projeto recebe? | **Não** | **Sim** (`npm install`) |
| Versão por projeto | Uma só para a máquina toda | Cada projeto tem a sua |
| Quando usar | Ferramenta pessoal usada em todo lugar | Quase sempre — é o padrão |
