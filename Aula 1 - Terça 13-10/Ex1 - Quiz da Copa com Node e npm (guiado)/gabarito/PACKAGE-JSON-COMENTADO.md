# `package.json` do Quiz da Copa — explicado linha por linha

O JSON não aceita comentários dentro do arquivo; por isso a explicação fica aqui.

```json
{
  "name": "quiz-copa",
```
**name** — nome do projeto (minúsculas, sem espaços). `npm init -y` usa o nome da pasta.
```json
  "version": "1.0.0",
```
**version** — versão do SEU projeto, no formato `MAIOR.MENOR.CORREÇÃO` (semver).
```json
  "description": "Quiz da Copa do Mundo 2026 no terminal (M1S12)",
```
**description** — uma frase que diz o que o projeto faz (aparece no `npm search` e no GitHub).
```json
  "main": "index.js",
```
**main** — arquivo de entrada do pacote. Não é o que o `npm start` executa (isso é o `scripts.start`).
```json
  "scripts": {
    "start": "node index.js"
  },
```
**scripts** — atalhos de comando. `npm start` executa `node index.js`. (Outros nomes são rodados com `npm run nome`.)
`"web"` serve a pasta `web/` por HTTP (`npm run web`, abra http://127.0.0.1:5500). O `npx -y` baixa o `http-server` só para esta execução (sem instalar nada no projeto) — o `-y` aceita a confirmação automaticamente. O quiz web usa `<script type="module">`, que **não funciona** abrindo o HTML direto (`file://`).
```json
  "keywords": [],
  "author": "",
  "license": "ISC",
```
**keywords / author / license** — metadados. `ISC` é a licença padrão que o `npm init` sugere.
```json
  "dependencies": {
    "chalk": "^4.1.2",
    "prompt-sync": "^4.2.0"
  }
}
```
**dependencies** — pacotes de que o projeto precisa **para rodar**. O `npm install <pacote>` escreve aqui sozinho.
O `^4.1.2` significa: "aceito 4.1.2 ou qualquer 4.x mais novo, mas nunca a 5". É por isso que o `chalk@4` ficou preso na versão 4.

## Os outros dois arquivos que o npm cria
- **`package-lock.json`** — "foto exata" de todas as versões instaladas (inclusive dependências das dependências). Vai para o Git: garante que todo mundo instale o mesmo.
- **`node_modules/`** — onde os pacotes de fato ficam. **Nunca** vai para o Git (está no `.gitignore`); é recriada com `npm install`.
