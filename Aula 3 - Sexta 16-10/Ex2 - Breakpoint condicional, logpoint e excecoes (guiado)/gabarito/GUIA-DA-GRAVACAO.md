# Guia da gravação — Ex2: Breakpoint condicional, logpoint e exceções

Roteiro para o professor. **Grave na pasta `exercicio`** (tem os bugs). Os números de linha são do `exercicio/auditor.js`.
Não precisa de `npm install` (não há pacotes) e não há digitação, então o *Debug Console* padrão serve.

## Comando para abrir a pasta e rodar
Cole no terminal (PowerShell). O `code .` abre o VS Code já nessa pasta; depois é só `npm start`.

```powershell
cd "C:\Users\l.faria.pinheiro\Desktop\Senai\m1s012\m1s012\Aula 3 - Sexta 16-10\Ex2 - Breakpoint condicional, logpoint e excecoes (guiado)\exercicio"; code .
```
```powershell
npm start
```
Sem `npm install` (não há pacotes). Para mostrar o resultado final, troque `\exercicio` por `\gabarito`.

## 0. Antes de apertar o REC
- [ ] VS Code aberto **na pasta `exercicio`**.
- [ ] Nenhum `.vscode/launch.json` ainda.
- [ ] `resultados.js` fechado (a graça é **não** olhar o arquivo).
- [ ] Resultado final esperado anotado: 60 partidas · soma **390** · média **6.50** · maior pontuação **Carla Pires (9 acertos)**.

## Mapa dos bugs
| Bug | Arquivo:linha | Causa | Correção |
|-----|---------------|-------|----------|
| 1 | `auditor.js:7` | O registro `id: 37` (`resultados.js:40`) tem `acertos: "7"` (texto). `soma += "7"` **concatena** em vez de somar | `soma += Number(r.acertos);` |
| 2 | `auditor.js:19-22` | Ninguém fez 10 acertos, então `find` devolve `undefined` e `campeao.jogador` quebra | Achar o máximo real com `Math.max` e checar se existe |

## Parte A — Reproduzir (≈2 min)
1. Terminal: `npm start`.
2. Saída esperada **errada**:
   ```
   Partidas auditadas: 60
   Soma de acertos: 224799888669888567896534964
   Média de acertos: 3.7466648111648095e+24
   TypeError: Cannot read properties of undefined (reading 'jogador')
   ```
3. Fale: "média de acertos de 0 a 10 não pode ser 3,7 × 10²⁴. A primeira pista é a **soma**."

## Parte B — Por que o breakpoint normal não serve (≈2 min)
1. Breakpoint normal em `auditor.js:7` (`soma += r.acertos;`) e F5 (`Run and Debug › Node.js`, ou **Debug: JavaScript Debug Terminal** + `npm start`).
2. Aperte `F5` (Continue) 3 ou 4 vezes e mostre o contador `id` subindo de 1 em 1. São 60 voltas.
3. Fale: "olhar um por um não escala. Preciso de um filtro."

## Parte C — Breakpoint condicional (≈5 min)
1. Clique com o botão direito no breakpoint da linha 7 › **Edit Breakpoint…** (ou remova e use **Add Conditional Breakpoint…**).
2. Tipo **Expression**, texto:
   ```
   typeof r.acertos !== "number"
   ```
3. `Ctrl+Shift+F5` (reiniciar). O programa para **sozinho** no registro 37.
4. Mostre:
   - **Variables** › `r`: `id: 37`, `jogador: "Vera Souza"`, `acertos: "7"` (**com aspas**).
   - **Variables** › `soma`: `224`.
5. Fale: "sem olhar o arquivo, o debugger achou o registro culpado."

## Parte D — Watch: ver a soma virar texto (≈3 min)
1. **Watch** › `+` › adicione `soma` e `typeof soma`.
2. Com o programa pausado em `id: 37`, `typeof soma` mostra `"number"`.
3. **Step over** (`F10`): `soma` vira `"2247"` e `typeof soma` vira `"string"`.
4. Explique: `224 + "7"` dá `"2247"`. O operador `+` com texto **concatena**. Dali em diante a "soma" é só texto grudado, e `/ 60` produz o número gigante.

## Parte E — Logpoint (≈4 min)
Alternativa que não para o programa.
1. Remova o breakpoint condicional.
2. Botão direito na canaleta da linha 7 › **Add Logpoint…** › texto:
   ```
   Registro {r.id}: {typeof r.acertos}
   ```
3. Rode (F5). O **Debug Console** enche de linhas `Registro 1: number`, `Registro 2: number`…
4. Role até achar a diferente: `Registro 37: string`.
5. Fale: "logpoint é um `console.log` que **não suja o código** e some quando eu removo."

## Parte F — Hit count (curiosidade, ≈2 min)
1. Botão direito no breakpoint › **Edit Breakpoint…** › **Hit Count** › `37`.
2. Rode: para exatamente na 37ª passagem. É útil quando você já sabe *quando* o problema aparece.

## Parte G — 1º conserto (≈1 min)
1. `auditor.js:7` → `soma += Number(r.acertos);`
2. `npm start`: agora a soma é **390** e a média **6.50**, mas o programa ainda quebra no final com `TypeError ... (reading 'jogador')`.

## Parte H — 2º bug: Pause on exceptions (≈4 min)
1. Painel **Breakpoints** › marque **Uncaught Exceptions**.
2. Reinicie. O debugger para em `auditor.js:22`.
3. Mostre:
   - **Variables**: `campeao` é `undefined`.
   - **Watch**: `resultados.length` → `60`; adicione `resultados.filter(r => Number(r.acertos) === 10).length` → `0`. Ninguém fez 10.
4. Conclusão: a linha 19-21 procura quem fez **exatamente 10**; esse jogador não existe.
5. Corrija procurando o **maior valor real** (`Math.max`) e tratando o caso de não achar. Código completo em `gabarito/auditor.js`.

## Parte I — Criar o launch.json (opcional, ≈2 min)
`Ctrl+Shift+D` › create a launch.json › cole `exercicio/colas/launch.json.txt`. Aqui **não** precisa de `"console": "integratedTerminal"`, porque não há digitação.

## Resultado final (conferir antes de encerrar)
```
Partidas auditadas: 60
Soma de acertos: 390
Média de acertos: 6.50
Maior pontuação: Carla Pires (9 acertos)
```

## Checklist de fechamento
- [ ] Achou o registro 37 **sem** abrir `resultados.js`.
- [ ] Mostrou condicional, logpoint e hit count.
- [ ] Explicou por que a soma virou texto.
- [ ] Mostrou Pause on exceptions parando na linha 22 com `campeao = undefined`.
