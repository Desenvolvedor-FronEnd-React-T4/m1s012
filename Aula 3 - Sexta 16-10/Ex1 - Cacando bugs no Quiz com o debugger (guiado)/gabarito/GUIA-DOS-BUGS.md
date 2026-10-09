# Guia dos bugs — Ex1 (Quiz da Copa)

| # | Arquivo | Sintoma | Causa | Como o debugger revela | Correção |
|---|---------|---------|-------|------------------------|----------|
| A | `placar.js` | Sempre "❌ Errou!" | `resposta === correta` compara texto (`"3"`) com número (`3`) | Breakpoint em `verificar` → Variables mostra `resposta: "3"` (com aspas) e `correta: 3` → Watch `resposta === correta` = `false` | `Number(resposta) === correta` |
| B | `index.js` | `TypeError: Cannot read properties of undefined (reading 'pergunta')` ao fim | Laço com `<=` roda uma volta a mais | **Pause on uncaught exceptions** → `i = 10`, `q = undefined`; Call Stack aponta a linha | `i < perguntas.length` |

## Roteiro de investigação (o "método científico" do debug)
1. **Reproduzir** — rodar e ver o defeito sempre do mesmo jeito.
2. **Hipótese** — "acho que a comparação está falsa".
3. **Isolar** — breakpoint na linha que decide (`return resposta === correta`).
4. **Observar** — Variables / Watch / Call Stack.
5. **Corrigir uma coisa por vez** — e rodar de novo.
6. **Validar** — jogar o quiz inteiro.

## Atalhos do VS Code (Windows)
| Ação | Atalho |
|------|--------|
| Continue / Iniciar | `F5` |
| Step over (passa pela linha sem entrar) | `F10` |
| Step into (entra na função chamada) | `F11` |
| Step out (sai da função atual) | `Shift + F11` |
| Reiniciar | `Ctrl + Shift + F5` |
| Parar | `Shift + F5` |
| Alternar breakpoint | `F9` |
