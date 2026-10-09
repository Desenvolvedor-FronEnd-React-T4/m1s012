# Ex1 — Quiz da Copa com Node e npm (GUIADO — live coding)

**Aula 1 · terça 13/10 · vídeo gravado (1h30)** — pause o vídeo e faça cada passo junto com o professor.

## O que você vai construir
Um quiz de 10 perguntas sobre a Copa do Mundo que roda **no terminal**, com `prompt-sync` (ler a resposta)
e `chalk` (cores), iniciado com `npm start`.

## O que já está pronto
- `index.js` com as **10 perguntas** (os dados) e os `TODO` marcando onde você escreve.
- `.gitignore` para a pasta `node_modules/`.
- **`web/`** — o Quiz da Copa em **HTML + CSS + JavaScript** (prontos, não precisa digitar): `index.html`, `style.css`, `quiz.js` e `perguntas.js` (as mesmas 10 perguntas).

## Passo a passo
| # | Passo | Comando / ação |
|---|-------|----------------|
| 1 | Abrir a pasta `exercicio` no VS Code e o terminal | `Ctrl + '` (ou Terminal › Novo Terminal) |
| 2 | Conferir o ambiente | `node --version` e `npm --version` |
| 3 | Criar o `package.json` | `npm init -y` |
| 4 | Instalar o primeiro pacote | `npm install prompt-sync` e importar no `index.js` |
| 5 | Escrever as **regras** e o **fluxo** do quiz | `verificar`, `mensagemFinal`, laço `for` |
| 6 | Rodar | `node index.js` |
| 7 | Instalar o `chalk` na **versão 4** e pintar as mensagens | `npm install chalk@4` |
| 8 | Criar o script `start` no `package.json` | `"start": "node index.js"` → `npm start` |
| 9 | Teste do clone: apagar `node_modules` e recriar | `npm install` |
| 10 | ⭐ Bônus: o **mesmo quiz no navegador** (a pasta `web/` já está pronta: HTML + CSS + JS) | `"web": "npx -y http-server web -p 5500 -c-1"` → `npm run web` → http://127.0.0.1:5500 |

## Pronto quando
- [ ] `npm start` roda o quiz do começo ao fim.
- [ ] Acerto aparece em **verde** com ✅ e erro em **vermelho** com ❌.
- [ ] O `package.json` lista `prompt-sync` e `chalk` em `dependencies` e tem o script `start`.
- [ ] Você apagou a pasta `node_modules`, rodou `npm install` e o quiz voltou a funcionar.

## Se travar
- `'node' não é reconhecido` → feche e reabra o terminal; se persistir, instale a versão **LTS** em um passo: `winget install OpenJS.NodeJS.LTS` (depois feche e reabra o terminal). Fluxograma no *Guia de Instalação*.
- `npm.ps1 ... running scripts is disabled` (PowerShell) → use o **Prompt de Comando** ou o **Git Bash** no terminal do VS Code, ou rode uma vez:
  `Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned`.
- `Cannot find module 'prompt-sync'` → faltou `npm install` (ou você está na pasta errada: confira com `pwd`).
- O quiz marca tudo como errado → o `prompt` devolve **texto**; compare com `Number(resposta)`.

Gabarito comentado linha por linha: pasta `../gabarito`.
