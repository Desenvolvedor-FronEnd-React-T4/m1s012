# Guia da investigação — Ex2 (auditor)

**Resultado esperado depois das correções:**
- Partidas auditadas: 60
- Soma de acertos: 390
- Média de acertos: 6.50
- Maior pontuação: Carla Pires (9 acertos)

## Passo a passo no VS Code
1. `npm start` → a média sai absurda (um número gigante, algo como 3.7e+24) → primeira pista: a **soma** está errada.
2. Breakpoint **normal** em `soma += r.acertos;` → F5 várias vezes… são 60 voltas. Inviável. Remova-o.
3. **Breakpoint condicional**: botão direito na canaleta › *Add Conditional Breakpoint…* › **Expression** › `typeof r.acertos !== "number"`.
   O programa para sozinho no registro **37**. Em *Variables*: `acertos: "7"` (aspas = texto).
4. **Watch**: adicione `soma`, `typeof soma`. Dê um *Step over* (F10) e veja `typeof soma` virar `"string"`.
5. **Logpoint** (alternativa que não para o programa): botão direito › *Add Logpoint…* › `Registro {r.id}: {typeof r.acertos}` → aparece no *Debug Console* sem editar o código. Procure a linha diferente.
6. **Hit count** (curiosidade): botão direito › *Edit Breakpoint…* › *Hit Count* › `37` → para exatamente na 37ª passagem.
7. Corrija com `Number(r.acertos)`.
8. Rode de novo → média coerente, mas o programa **quebra** com `TypeError ... (reading 'jogador')`.
9. Abra o painel *Breakpoints* e marque **Uncaught Exceptions** → o debugger para na linha do erro; `campeao` é `undefined` (ninguém fez 10).
10. Corrija procurando a maior pontuação real (`Math.max`).

## Conceitos para fixar
- **`+` com texto concatena** — `5 + "8"` é `"58"`.
- Um breakpoint **condicional** é um filtro; um **logpoint** é um `console.log` que não suja o código; **hit count** conta passagens.
- Pausar na **exceção** mostra o estado exato no momento do erro (Call Stack + Variables).
