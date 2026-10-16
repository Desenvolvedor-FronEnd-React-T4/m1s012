# Guia da gravação — Ex4 ⭐: Depurando o front-end no navegador

Roteiro para o professor. **Grave na pasta `exercicio`**. Os números de linha são do `exercicio/script.js`.
É HTML + JavaScript puro (sem Node e sem `npm install`).

## Comando para abrir a pasta e rodar
Este exercício **não tem `package.json`**, então não existe `npm start`. O comando equivalente sobe um servidor local na porta 5500 (use este em vez do Live Server se preferir):

```powershell
cd "C:\Users\l.faria.pinheiro\Desktop\Senai\m1s012\m1s012\Aula 3 - Sexta 16-10\Ex4 - Estrela - Depurando o front-end no navegador\exercicio"; code .
```
```powershell
npx -y http-server . -p 5500 -c-1
```
Depois abra `http://127.0.0.1:5500/index.html` no Edge. Para mostrar o resultado final, troque `\exercicio` por `\gabarito`.

## 0. Antes de apertar o REC
- [ ] VS Code aberto **na pasta `exercicio`**.
- [ ] Extensão **Live Server** instalada (Ritwick Dey). Plano B logo abaixo.
- [ ] Edge ou Chrome instalado.
- [ ] Nenhum `.vscode/launch.json` ainda (você cria na Parte D).

**Plano B para abrir a página** (sem Live Server): na pasta `exercicio`, rode `npx -y http-server . -p 5500 -c-1` e abra `http://127.0.0.1:5500/index.html`. Como o `script.js` é um script comum (não é módulo), até dar duplo clique no `index.html` funciona para a Parte A.

## Mapa dos bugs
| Bug | Arquivo:linha | Causa | Correção |
|-----|---------------|-------|----------|
| 1 | `script.js:2` | `getElementById("resultados")` (com **S**), mas o id no HTML é `resultado` (sem S). Devolve `null` e o `saida.textContent` da linha 12 estoura | `getElementById("resultado")` |
| 2 | `script.js:10` | `.value` de um `<input>` é **sempre texto**: `"2" + "3"` = `"23"` | `Number(golsBrasil) + Number(golsRival)` |

Ordem natural do que o aluno vê: primeiro **nada aparece** (bug 1); ao corrigir, aparece **23** (bug 2).

## Parte A — Reproduzir e DevTools: Sources (≈8 min)
1. Clique em **Go Live** (barra de status do VS Code). A página abre em `127.0.0.1:5500` com os campos 2 e 3 já preenchidos.
2. Clique **Calcular total de gols**. **Nada aparece.**
3. `F12` › aba **Console**: erro vermelho `Uncaught TypeError: Cannot set properties of null (setting 'textContent')` em `script.js:12`.
4. Fale: "o erro diz *null*. Algo que eu esperava encontrar não foi encontrado."
5. Aba **Sources** › abra `script.js` › clique na canaleta da **linha 10** (`const total = golsBrasil + golsRival;`).
6. Clique **Calcular** de novo. A página congela com "Paused in debugger".
7. Painel **Scope** (à direita): `golsBrasil: "2"` e `golsRival: "3"` (**com aspas**).
8. No **Watch** (`+`): `typeof golsBrasil` → `"string"`.
9. **Step over** (`F10`) até a linha 12 e passe o mouse sobre `saida`: valor `null`. Aí está o bug 1.
10. Pare e corrija `script.js:2` para `getElementById("resultado")`. Salve (o Live Server recarrega a página).
11. Clique **Calcular**: agora aparece, mas **"Total de gols no jogo: 23"**. Segundo bug.

## Parte B — Corrigir o bug 2 e validar (≈3 min)
1. Com o breakpoint da linha 10 ainda ativo, clique **Calcular**. No **Scope**, `golsBrasil` e `golsRival` continuam texto.
2. No **Console** do DevTools (aba Console, com a página pausada), digite:
   - `golsBrasil + golsRival` → `"23"`
   - `Number(golsBrasil) + Number(golsRival)` → `5`
3. Corrija `script.js:10` para `const total = Number(golsBrasil) + Number(golsRival);`
4. Recarregue e clique **Calcular**: **"Total de gols no jogo: 5"**.
5. Teste de variação: troque para 0 e 7 e confira **7**.

Explique em 2 linhas: "`value` devolve texto, porque tudo o que o usuário digita em um formulário é texto. `type="number"` só ajuda o teclado e a validação, mas o valor continua sendo uma string."

## Parte C — A instrução `debugger;` (≈3 min)
1. Antes da linha 10, escreva `debugger;` e salve.
2. Com o **DevTools aberto** (`F12`), clique **Calcular**: o navegador pausa sozinho nessa linha, sem precisar clicar na canaleta.
3. Atenção: com o DevTools **fechado** a instrução é ignorada (não pausa nada).
4. Remova o `debugger;` antes de entregar o código.

## Parte D — Depurar pelo VS Code com F5 (≈6 min)
1. Deixe o Live Server rodando (`127.0.0.1:5500`).
2. `Ctrl+Shift+D` › **create a launch.json file** › cole o conteúdo de `exercicio/colas/launch.json.txt`.
3. Aponte as 3 linhas:
   - `"type": "msedge"` (ou `"chrome"`): qual navegador abre.
   - `"url": "http://127.0.0.1:5500/index.html"`: a página.
   - `"webRoot": "${workspaceFolder}"`: liga os arquivos do navegador aos da pasta, para os breakpoints do VS Code casarem.
4. Volte o código ao estado com defeito se já tiver corrigido (para a demonstração) e coloque um breakpoint em `script.js:10` **dentro do VS Code**.
5. Escolha **Depurar no Edge (Live Server)** e aperte **F5**. O Edge abre; clique **Calcular**.
6. O **VS Code** pausa na linha 10. Mostre Variables, Watch (`typeof golsBrasil`) e Step over, igual ao Node.

Se o breakpoint ficar oco/cinza: confira se o Live Server está na porta 5500 (se for outra, ajuste a URL) e se a pasta aberta é a `exercicio`.

## Comparativo para fechar (≈2 min)
- **DevTools**: não precisa configurar nada, é o jeito mais rápido.
- **`debugger;`**: pausa sem clicar, mas exige lembrar de remover.
- **VS Code (F5)**: o mesmo debugger do Node, dentro do editor, com a configuração do `launch.json`.

## Resultado final
Tela com os valores 2 e 3: **"Total de gols no jogo: 5"**. Código corrigido e comentado em `gabarito/script.js`.

## Checklist de fechamento
- [ ] Os 2 defeitos achados com breakpoint (um de seleção do elemento, outro de tipo de dado).
- [ ] A tela mostra **5** para 2 + 3.
- [ ] Mostrou as 3 formas: DevTools, `debugger;` e VS Code.
- [ ] Explicou por que `value` devolve texto.
