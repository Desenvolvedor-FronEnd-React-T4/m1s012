# Guia da gravação — Ex1: Caçando bugs no Quiz com o debugger

Roteiro para o professor. **Grave sempre na pasta `exercicio`** (é ela que tem os bugs). O `gabarito` serve para mostrar o resultado final.
Os números de linha abaixo são do código da pasta `exercicio`.

## Comando para abrir a pasta e rodar
Cole no terminal (PowerShell). O `code .` abre o VS Code já nessa pasta; depois é só `npm start`.

```powershell
cd "C:\Users\l.faria.pinheiro\Desktop\Senai\m1s012\m1s012\Aula 3 - Sexta 16-10\Ex1 - Cacando bugs no Quiz com o debugger (guiado)\exercicio"; code .
```
```powershell
npm start
```
Para a versão web (outro terminal, na mesma pasta): `npm run web`.
Para mostrar o resultado final, troque `\exercicio` por `\gabarito` e rode `npm install` uma vez antes do `npm start`.

## 0. Antes de apertar o REC
- [ ] VS Code aberto **na pasta `exercicio`** (File › Open Folder). Ela precisa ser a raiz do workspace.
- [ ] `npm install` já rodado (a pasta `node_modules` existe).
- [ ] Nenhum `.vscode/launch.json` na pasta ainda (você vai criá-lo ao vivo na Parte E).
- [ ] Zoom do editor em 150% e terminal visível.
- [ ] Respostas certas anotadas, para digitar rápido: **3 2 2 1 1 4 3 2 4 3**
- [ ] Teste de segurança, sem gravar: `npm start`, digite `3` na 1ª pergunta e veja o `❌ Errou!` (bug A confirmado).

Observação: o `prompt-sync` só lê o teclado em terminal de verdade. Por isso o jogo roda no terminal integrado, nunca no *Debug Console*.

## Mapa dos bugs
| Bug | Arquivo:linha | Código com defeito | Correção |
|-----|---------------|--------------------|----------|
| A | `placar.js:2` | `return resposta === correta;` | `return Number(resposta) === correta;` |
| B | `index.js:11` | `i <= perguntas.length` | `i < perguntas.length` |

## Parte A — Plano A: JavaScript Debug Terminal (≈5 min)
1. `Ctrl+Shift+P` › digite **Debug: JavaScript Debug Terminal** › Enter. Abre um terminal com a faixa de depuração.
2. Abra `placar.js` e clique na **canaleta** (à esquerda do número) da **linha 2** (`return resposta === correta;`). Aparece a bolinha vermelha. (Atalho: cursor na linha e `F9`.)
3. No terminal novo: `npm start`.
4. Na 1ª pergunta digite **3** e Enter.
5. O VS Code pausa na linha 2, destacada em amarelo. Nada foi executado ainda nessa linha.

Fale: "o programa congelou *antes* de decidir. Agora eu posso olhar o estado."

## Parte B — Variables, Watch e Call Stack (≈5 min)
1. **Variables** (painel esquerdo, seção *Locals*): mostre `resposta: "3"` (com **aspas** = texto) e `correta: 3` (sem aspas = número).
2. **Watch** › botão `+` › adicione, um de cada vez:
   - `resposta === correta` → `false`
   - `typeof resposta` → `"string"`
   - `typeof correta` → `"number"`
   - `Number(resposta) === correta` → `true`
3. **Call Stack**: mostre `verificar` (placar.js) chamada por `index.js`. Clique na linha de baixo e o editor pula para o `index.js:18`.

Conclusão para falar: "`"3"` e `3` são valores diferentes para o `===`."

## Parte C — Step over / into / out e 1º conserto (≈7 min)
1. Pare o programa (`Shift+F5`) e coloque um 2º breakpoint em `index.js:18` (`if (verificar(resposta, q.correta)) {`).
2. Rode de novo (`npm start` no Debug Terminal), digite `3`. Pausa no `index.js:18`.
3. **Step over** (`F10`): a chamada `verificar(...)` executa inteira e a linha seguinte vai para o `else` (❌).
4. Reinicie (`Ctrl+Shift+F5`), digite `3` e desta vez use **Step into** (`F11`): o cursor **entra** em `placar.js:2`.
5. **Step out** (`Shift+F11`): sai de `verificar` e volta ao `index.js`.
6. Corrija `placar.js:2` para `return Number(resposta) === correta;` e salve.
7. Rode de novo e digite `3`: agora aparece **✅ Acertou!**

Fixar:
- `F10` Step over: passa pela linha sem entrar na função.
- `F11` Step into: entra na função chamada.
- `Shift+F11` Step out: sai da função atual.

## Parte D — 2º bug: erro no final + Pause on exceptions (≈7 min)
1. Remova os breakpoints (painel **Breakpoints** › ícone "remove all").
2. No painel **Breakpoints** (canto inferior esquerdo do Run and Debug), marque **Uncaught Exceptions**.
3. `npm start` e responda as 10 perguntas: `3 2 2 1 1 4 3 2 4 3`.
4. Depois da 10ª pergunta o debugger **para sozinho** em `index.js:13` (`q.pergunta`), com a mensagem `TypeError: Cannot read properties of undefined (reading 'pergunta')`.
5. Mostre:
   - **Variables**: `i = 10` e `q = undefined`.
   - **Watch**: `perguntas.length` → `10`. O array vai do índice 0 ao 9, então `perguntas[10]` não existe.
   - **Call Stack**: aponta a linha exata.
6. Corrija `index.js:11` para `i < perguntas.length` e rode de novo: termina com `Você acertou 10 de 10! 🏆`.

Fale: "o erro aparece na linha 13, mas a **causa** está na linha 11."

## Parte E — Plano B: criar o launch.json (≈5 min)
1. `Ctrl+Shift+D` (Run and Debug) › link **create a launch.json file** › escolha **Node.js**.
2. Apague o conteúdo gerado e cole o de `exercicio/colas/launch.json.txt`.
3. Aponte as 3 linhas que importam:
   - `"program": "${workspaceFolder}/index.js"` (qual arquivo iniciar)
   - `"console": "integratedTerminal"` (sem isso o `prompt-sync` não consegue ler o teclado)
   - `"skipFiles": ["<node_internals>/**"]` (o Step into não se perde dentro do Node)
4. No topo do painel escolha **Depurar Quiz da Copa** e aperte **F5**.
5. Coloque um breakpoint em `index.js:13` para confirmar que também pausa por aqui.

Se travar: aba Run and Debug sem a opção Node.js → abra um arquivo `.js` primeiro.

## Parte F — Breakpoint condicional e logpoint (≈6 min)
Com os dois bugs já corrigidos:
1. **Condicional**: botão direito na canaleta do `index.js:17` (`const resposta = prompt(...)`) › **Add Conditional Breakpoint…** › Expression › `i === 6`.
   Rode (F5): o jogo passa direto pelas 6 primeiras perguntas e **só pausa na 7ª**, com `i = 6` no Variables.
2. **Logpoint**: botão direito na canaleta do `index.js:13` › **Add Logpoint…** › `Pergunta {i + 1}: correta = {q.correta}`.
   Não pausa e não altera o código; a mensagem aparece no **Debug Console** a cada volta.
3. Compare: *breakpoint* para o programa, *logpoint* só imprime, *condicional* para só quando a condição é verdadeira.

## Parte G — Versão web, mesmos 2 bugs (≈8 min)
Pasta `exercicio/web`.
1. Em outro terminal: `npm run web` (abre o servidor em `http://127.0.0.1:5500`; precisa de internet na 1ª vez, por causa do `npx`).
   - Plano B sem internet: abra `web/index.html` com a extensão **Live Server** (Go Live) e use a porta que ela informar.
2. No navegador: `F12` › **Sources** › `quiz.js`.
3. **Bug A** (sempre ❌): breakpoint em `quiz.js:83` (`const acertou = verificar(marcada.value, q.correta);`). Marque uma opção e clique **Responder**.
   - Painel **Scope**: `marcada.value` é `"3"` (texto) e `q.correta` é `3`.
   - Console: `typeof marcada.value` → `"string"`.
   - Correção: `quiz.js:20` → `return Number(resposta) === correta;`
4. **Bug B** (trava depois da 10ª): responda até o fim e clique **Ver resultado**. Nada acontece. No **Console** (vermelho): `TypeError: Cannot read properties of undefined (reading 'pergunta')` em `quiz.js:39`.
   - Breakpoint em `quiz.js:72` (`if (indice <= perguntas.length) ...`): `indice = 10`, `perguntas.length = 10`, e `10 <= 10` é `true`.
   - Correção: `quiz.js:72` → `indice < perguntas.length`.
5. (Opcional) No VS Code: cole a config **Depurar Quiz WEB no Edge** do `launch.json` (já está na cola) com `npm run web` rodando, e aperte F5.

## Checklist de fechamento
- [ ] Quiz marca ✅ ao acertar e termina com a mensagem final.
- [ ] Os dois bugs achados com breakpoint, sem `console.log`.
- [ ] Os alunos viram a diferença entre Step over / into / out.
- [ ] Mostrou o `gabarito` (corrigido e comentado) e o `GUIA-DOS-BUGS.md` no final.
