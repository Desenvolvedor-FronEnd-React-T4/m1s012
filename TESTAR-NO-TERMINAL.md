# Como testar tudo pelo terminal (terça, quinta e sexta)

Use o **terminal integrado do VS Code** (`Ctrl + '`), em **Prompt de Comando** ou **Git Bash** (evita a trava `npm.ps1` do PowerShell).
Os comandos são os mesmos para você (Node 20.18) e para os alunos. Substitua `<PASTA>` pelo caminho da pasta indicada.

> Regra de ouro: **sempre `cd` para a pasta do projeto antes**. Confira com `cd` (cmd) ou `pwd` (Git Bash).

---

## 0. Pré-teste (1 minuto)

```
node --version
npm --version
```
Deve aparecer um número de versão nos dois. (No seu computador: `v20.18.0` e `10.8.2`.)

---

## 1. Quiz no terminal (Node) — qualquer exercício com `package.json`

```
cd "<PASTA>\gabarito"        # ou \exercicio, quando já estiver completo
npm install                  # só na 1ª vez (cria node_modules)
npm start                    # joga o quiz; responda de 1 a 4 e Enter
```
**Esperado:** 10 perguntas, ✅/❌ coloridos e `Você acertou X de 10! 🏆`. Parar no meio: `Ctrl + C`.

Teste do clone (terça): apague a pasta `node_modules`, rode `npm start` (deve dar `Cannot find module`) e depois `npm install` e `npm start` (volta a funcionar).

---

## 2. Quiz no NAVEGADOR (as três versões `web/`)

Os módulos (`import`/`export`) **não funcionam abrindo o HTML com duplo clique** (`file://`). Por isso é preciso servir por HTTP.

### 2.1 Subir o servidor
```
cd "<PASTA>"                 # a pasta que CONTÉM a subpasta web (veja a tabela abaixo)
npm run web
```
**Esperado:** aparece `Starting up http-server, serving web` e `Available on: http://127.0.0.1:5500`. Deixe esse terminal aberto.
Na primeira vez o `npx -y` baixa o `http-server` (precisa de internet; leva alguns segundos).

### 2.2 Abrir no navegador
Abra **http://127.0.0.1:5500** (Edge ou Chrome). Responda as 10 perguntas.

### 2.3 Parar o servidor
No terminal do servidor: `Ctrl + C`.

### 2.4 Qual pasta usar em cada dia

| Dia | O que testar | `<PASTA>` (rode `npm run web` aqui) | O que deve acontecer |
|-----|--------------|--------------------------------------|----------------------|
| **Terça** | Quiz web pronto (HTML + CSS + JS) | `Aula 1 - Terça 13-10\Ex1 - Quiz da Copa com Node e npm (guiado)\gabarito` | Quiz completo; no fim: nota, percentual e classificação |
| **Quinta** — ponto de partida | Script **clássico** (tudo num arquivo) | `Aula 2 - Quinta 15-10\Ex2 - O boom do chalk e a migracao para ESM\exercicio` | Funciona. Depois você separa em módulos (TODO 1 a 5) e ele deve continuar igual |
| **Quinta** — resultado | **Módulos ESM** (`perguntas.js`, `placar.js`, `quiz.js`) | `Aula 2 - Quinta 15-10\Ex2 - O boom do chalk e a migracao para ESM\gabarito\B-esm-correto` | Funciona igual ao ponto de partida |
| **Sexta** — com defeitos | Quiz web **bugado** | `Aula 3 - Sexta 16-10\Ex1 - Cacando bugs no Quiz com o debugger (guiado)\exercicio` | Sempre ❌ (bug 1); depois da 10ª pergunta **nada acontece** e o Console (F12) mostra `TypeError ... (reading 'pergunta')` (bug 2) |
| **Sexta** — corrigido | Quiz web corrigido | `Aula 3 - Sexta 16-10\Ex1 - Cacando bugs no Quiz com o debugger (guiado)\gabarito` | Funciona; a tela final aparece |

No seu **PROJETO DO PROFESSOR**: `etapa-1-npm-commonjs`, `etapa-3-esm`, `etapa-4-debugger\quiz-bugado` e `etapa-4-debugger\quiz-corrigido` já têm o script `web` (rode `npm run web` dentro de cada uma).

> **Atenção:** só um servidor por vez na porta 5500. Para testar dois ao mesmo tempo, troque a porta: `npx -y http-server web -p 5501 -c-1`.

### 2.5 Conferir o servidor sem abrir o navegador (opcional)
Com o servidor rodando, em **outro** terminal:
```
curl -I http://127.0.0.1:5500/index.html
curl -I http://127.0.0.1:5500/quiz.js
```
**Esperado:** `HTTP/1.1 200 OK` e, no `quiz.js`, `Content-Type: application/javascript`. Se aparecer `404`, você está na pasta errada (o comando precisa rodar na pasta que **contém** `web/`).

---

## 3. Depurar o quiz web na sexta (VS Code + Edge)

1. Abra no VS Code a pasta `...\Ex1 - Cacando bugs no Quiz com o debugger (guiado)\exercicio` (**File › Open Folder**).
2. Terminal 1: `npm install` (só na 1ª vez) e depois `npm run web` (deixe rodando).
3. Crie o `.vscode\launch.json` colando de `colas\launch.json.txt` (já tem a configuração **Depurar Quiz WEB no Edge**).
4. Em `web\quiz.js`, clique na canaleta ao lado de `return resposta === correta;` (breakpoint).
5. `Ctrl + Shift + D` › escolha **Depurar Quiz WEB no Edge** › `F5`. O Edge abre; responda uma pergunta: o VS Code pausa. Em **Variables**: `resposta: "3"` (texto) e `correta: 3` (número).
6. Alternativa sem VS Code: no navegador, `F12` › **Sources** › `quiz.js` › breakpoint na mesma linha.
7. Parar: `Shift + F5` e `Ctrl + C` no terminal do servidor.

Corrija (`Number(resposta) === correta` e `indice < perguntas.length`), recarregue (`F5` no navegador) e teste de novo. O `gabarito` mostra as duas correções comentadas.

---

## 4. Problemas comuns

| Mensagem / sintoma | Causa e solução |
|--------------------|-----------------|
| `npm ERR! missing script: web` | Você está numa pasta sem o script. Vá para a pasta da tabela acima (a que tem o `package.json` com `"web"`). |
| `EADDRINUSE` / porta em uso | Outro servidor está na 5500. Feche o terminal anterior (`Ctrl + C`) ou use outra porta (`-p 5501`). Para achar quem usa: `netstat -ano \| findstr :5500` e `taskkill /PID <número> /F`. |
| Página em branco e erro de CORS/módulo no Console | Você abriu o HTML direto (`file://`). Use `http://127.0.0.1:5500`. |
| `404` ao abrir a página | O servidor foi iniciado na pasta errada (precisa ser a que contém `web/`). |
| `npx` pedindo confirmação | Faltou o `-y` no script. Rode `npm run web` (já tem `-y`). |
| Sem internet | O `npx` não consegue baixar o `http-server` na 1ª vez. Alternativa: extensão **Live Server** do VS Code (botão **Go Live** com a pasta `web` aberta). |
