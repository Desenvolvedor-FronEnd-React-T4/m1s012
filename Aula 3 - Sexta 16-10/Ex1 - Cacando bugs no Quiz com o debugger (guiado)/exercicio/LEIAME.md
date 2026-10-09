# Ex1 — Caçando bugs no Quiz com o debugger (GUIADO — live coding)

**Aula 3 · sexta 16/10 · vídeo gravado (1h30)** — pause o vídeo e faça cada passo junto com o professor.

## Situação
Este é o Quiz da Copa em **ESM**, mas alguém mexeu no código e **plantou defeitos**:
1. Mesmo digitando a opção certa, o quiz diz **❌ Errou!**
2. Quando você corrige isso, o programa **quebra no final** com um erro vermelho.

Você **não vai chutar**: vai usar o debugger para ver o que está acontecendo.

## Antes de começar
1. Abra no VS Code **a pasta `exercicio`** (File › Open Folder) — ela precisa ser a raiz do workspace.
2. `npm install`
3. Rode uma vez normalmente (`npm start`) e veja o defeito.

## Roteiro do vídeo
| Parte | O que fazemos |
|-------|----------------|
| A | **Plano A:** `JavaScript Debug Terminal` + breakpoint em `verificar` (arquivo `placar.js`) |
| B | Painel **Variables**, **Watch** e **Call Stack**: comparar `resposta` e `correta` |
| C | **Step over / into / out** e corrigir o 1º bug |
| D | Reexecutar: o 2º defeito aparece. **Pause on exceptions** e a Call Stack mostram a linha |
| E | **Plano B:** criar o `launch.json` (a "receita" do debug) — cole de `colas/launch.json.txt` |
| F | Breakpoint **condicional** (`i === 6`) e **logpoint** só para ver o fluxo |

## Pronto quando
- [ ] O quiz marca ✅ quando você acerta e termina mostrando a mensagem final.
- [ ] Você achou cada defeito **com breakpoint** (não com `console.log`).
- [ ] Você consegue explicar a diferença entre **Step over**, **Step into** e **Step out**.

## Se travar
- O breakpoint está cinza/oco → o arquivo não foi carregado ainda, ou você iniciou fora do depurador. Use o **JavaScript Debug Terminal**.
- O `prompt-sync` não aceita digitação no *Debug Console* → use `"console": "integratedTerminal"` no `launch.json` (já está na cola).
- Aba **Run and Debug** não mostra "Node.js" → abra um arquivo `.js` primeiro.

## Versão web (front-end)
A pasta `web/` é o **mesmo quiz no navegador, também com 2 defeitos** (sempre ❌; e nada acontece depois da 10ª pergunta, com `TypeError` no Console). Rode `npm run web` (http://127.0.0.1:5500) e depure com o **DevTools** (F12 › Sources) ou com o VS Code (configuração **Depurar Quiz WEB no Edge**, em `colas/launch.json.txt`). Passo a passo: `TESTAR-NO-TERMINAL.md` (na raiz).

Gabarito (com os bugs corrigidos e comentados): `../gabarito` · explicação dos defeitos: `../gabarito/GUIA-DOS-BUGS.md`.
