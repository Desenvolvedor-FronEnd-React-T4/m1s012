# Ex2 — Instalação global × local, devDependencies e npx (GUIADO — live coding)

**Aula 1 · terça 13/10 · vídeo gravado** — pause o vídeo e execute cada comando junto com o professor.

## Objetivo
Entender **onde** o npm instala as coisas (global × local), o que é `devDependencies` e para que serve o `npx`.
Usaremos o **nodemon** (reinicia o programa quando você salva o arquivo) como exemplo de ferramenta.

## O que já está pronto
- `saudacao.js` — um programa de 1 linha de saída. É nele que vamos mexer para ver o nodemon agir.
- `ROTEIRO-COMANDOS.md` — a lista de todos os comandos, na ordem, com a saída esperada.

## Passo a passo (resumo)
1. **Olhar o global:** `npm ls -g --depth=0` · `npm root -g` · `npm config get prefix`
2. **Instalar globalmente:** `npm install -g nodemon` → rodar `nodemon saudacao.js` e editar o arquivo.
3. **Mostrar o problema:** `npm init -y` → o `package.json` **não menciona** o nodemon (quem clonar o projeto não o terá).
4. **Instalar localmente como dependência de desenvolvimento:** `npm install --save-dev nodemon` (ou `-D`).
5. **Criar o script `dev`** no `package.json`: `"dev": "nodemon saudacao.js"` → `npm run dev`.
6. **npx:** `npx nodemon --version` (usa a cópia local) e `npx cowsay "Copa 2026"` (roda sem instalar nada).
7. **Limpar:** `npm uninstall -g nodemon`.

## Regra de bolso (preencha com suas palavras ao final)
| Situação | Instalar |
|----------|----------|
| Biblioteca que o **código** usa (`chalk`, `prompt-sync`) | local, `dependencies` |
| Ferramenta usada **só no desenvolvimento** (`nodemon`) | local, `devDependencies` (`-D`) |
| Comando que você roda **uma vez** ou raramente | `npx` (sem instalar) |
| Ferramenta de linha de comando de **uso pessoal**, em todos os projetos | global (`-g`) — com parcimônia |

## Pronto quando
- [ ] Você viu o nodemon reiniciar sozinho ao salvar o `saudacao.js`.
- [ ] O `package.json` tem `nodemon` em **devDependencies** e o script `dev`.
- [ ] Você sabe explicar por que o global **não** resolve para o colega que clonar o projeto.

## Se travar
- `EACCES` / `permission denied` ao usar `-g`: **não** use `sudo`/administrador; pule o passo 2 e siga só com o local (`-D`) — o objetivo da aula é igual.
- `'nodemon' não é reconhecido` logo após o `-g` → feche e reabra o terminal (o PATH é lido ao abrir).
- `npm.ps1 ... running scripts is disabled` → veja o LEIAME do Ex1.
