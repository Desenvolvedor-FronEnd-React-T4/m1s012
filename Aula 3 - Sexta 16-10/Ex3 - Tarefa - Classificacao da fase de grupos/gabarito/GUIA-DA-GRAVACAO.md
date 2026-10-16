# Guia da gravação — Ex3: Classificação da fase de grupos

Roteiro para o professor demonstrar a resolução da tarefa. **Grave na pasta `exercicio`**. Os números de linha são do `exercicio/classificacao.js`.
Não precisa de `npm install`. Dados **fictícios**.

## Comando para abrir a pasta e rodar
Cole no terminal (PowerShell). O `code .` abre o VS Code já nessa pasta; depois é só `npm start`.

```powershell
cd "C:\Users\l.faria.pinheiro\Desktop\Senai\m1s012\m1s012\Aula 3 - Sexta 16-10\Ex3 - Tarefa - Classificacao da fase de grupos\exercicio"; code .
```
```powershell
npm start
```
Sem `npm install` (não há pacotes). Para mostrar o resultado final, troque `\exercicio` por `\gabarito`.

## 0. Antes de apertar o REC
- [ ] VS Code aberto **na pasta `exercicio`**.
- [ ] `RESULTADO-ESPERADO.txt` aberto em uma aba lateral.
- [ ] Não abra o gabarito antes: o objetivo é mostrar o **método** de descoberta.

Regras: vitória = 3 pts, empate = 1 pt para cada, derrota = 0. Desempate: **pontos**, depois **saldo** (gols pró − gols contra), depois **gols pró**.

## Mapa dos 3 bugs
| Bug | Linha | Código com defeito | Correção |
|-----|-------|--------------------|----------|
| 1 | `24-29` | `if (golsA >= golsB)` dá 3 pontos ao time A **no empate**, e o B fica com 0 | `>` para vitória do A, `else if` para vitória do B, `else` dá 1 ponto a cada |
| 2 | `33` | `return time.gc - time.gp;` (saldo invertido) | `return time.gp - time.gc;` |
| 3 | `39` | O `sort` devolve um **booleano** (`y.pontos > x.pontos`) e ignora saldo e gols pró | Comparador numérico com 3 critérios |

## Parte A — Reproduzir e comparar (≈2 min)
1. `npm start`. Saída com defeitos:
   ```
   Pos  Seleção   P  J  GP  GC  SG
   1    Brasil    6  3  3   3   0
   2    Japão     6  3  4   3   -1
   3    México    3  3  3   3   0
   4    Egito     3  3  3   4   +1
   ```
2. Compare com `RESULTADO-ESPERADO.txt`:
   ```
   1    Japão     4  3  4   3   +1
   2    Brasil    4  3  3   3   0
   3    Egito     4  3  3   4   -1
   4    México    3  3  3   3   0
   ```
3. Aponte as pistas:
   - Brasil com **6 pontos** (ganhou 1, empatou 1, perdeu 1 → o certo é 4).
   - Japão com saldo **−1**, mas gols pró 4 e contra 3 (deveria ser +1).
   - Ordem diferente da esperada.
4. Estratégia: um defeito por vez, rodando a cada correção.

## Parte B — Bug 1: empate dando 3 pontos (≈6 min)
1. Breakpoint **condicional** em `classificacao.js:24` com a expressão:
   ```
   jogo.golsA === jogo.golsB
   ```
   (para só nos 3 empates: México×Egito, Brasil×México, Japão×México).
2. Rode com **Debug: JavaScript Debug Terminal** + `npm start` (ou F5 com Node.js).
3. **Watch**: `timeA.nome`, `timeA.pontos`, `timeB.nome`, `timeB.pontos`, `jogo.golsA`, `jogo.golsB`.
4. Na 1ª parada (México 1×1 Egito): `timeA.pontos = 0`. Dê **F10** duas vezes e veja `timeA.pontos` virar **3** e `timeB.pontos` ficar **0**. Um empate deu 3 pontos para um lado.
5. Conserto (linhas 24-29):
   ```js
   if (jogo.golsA > jogo.golsB) {
     timeA.pontos += 3;
   } else if (jogo.golsB > jogo.golsA) {
     timeB.pontos += 3;
   } else {
     timeA.pontos += 1;
     timeB.pontos += 1;
   }
   ```
6. Rode: os pontos já batem (Brasil 4, Japão 4, Egito 4, México 3), mas a ordem e o saldo ainda não:
   ```
   1    Brasil    4  3  3   3   0
   2    Japão     4  3  4   3   -1
   3    México    3  3  3   3   0
   4    Egito     4  3  3   4   +1
   ```

## Parte C — Bug 2: saldo de gols invertido (≈4 min)
1. Breakpoint **normal** em `classificacao.js:44` (`const sg = saldo(t);`).
2. **Watch**: `t.nome`, `t.gp`, `t.gc`, `t.gp - t.gc`.
3. A 1ª parada é o Brasil (`gp = 3`, `gc = 3`, saldo 0, que não revela nada). Aperte `F5` e na 2ª parada, o Japão: `gp = 4`, `gc = 3`. O saldo correto seria `+1`.
4. Dê **F11** (Step into) em `saldo(t)`: cai na `classificacao.js:33` e mostra `return time.gc - time.gp;`. A subtração está ao contrário.
5. **Shift+F11** para sair, e corrija a linha 33: `return time.gp - time.gc;`
6. Rode: o saldo (SG) agora está certo, falta só a ordem:
   ```
   1    Brasil    4  3  3   3   0
   2    Japão     4  3  4   3   +1
   3    México    3  3  3   3   0
   4    Egito     4  3  3   4   -1
   ```

## Parte D — Bug 3: ordenação sem desempate (≈5 min)
1. Breakpoint em `classificacao.js:39` (`return y.pontos > x.pontos;`), dentro do `sort`.
2. **Watch**: `x.nome`, `y.nome`, `x.pontos`, `y.pontos`, `y.pontos > x.pontos`, `typeof (y.pontos > x.pontos)`.
3. Mostre que o comparador devolve `true`/`false` (`typeof` = `"boolean"`). O `sort` espera um **número**: negativo, zero ou positivo. Boolean vira só 1 ou 0, nunca negativo, e o desempate (saldo, gols pró) nem existe.
4. Pare logo depois do `sort` (breakpoint na linha 42) e no **Watch** veja a ordem: `lista.map(t => t.nome + " " + t.pontos)`.
5. Conserto (linhas 38-40), com os 3 critérios:
   ```js
   lista.sort(function (x, y) {
     if (y.pontos !== x.pontos) return y.pontos - x.pontos;
     if (saldo(y) !== saldo(x)) return saldo(y) - saldo(x);
     return y.gp - x.gp;
   });
   ```
6. Rode: a saída fica idêntica ao `RESULTADO-ESPERADO.txt`.

## Resultado final
```
Pos  Seleção   P  J  GP  GC  SG
1    Japão     4  3  4   3   +1
2    Brasil    4  3  3   3   0
3    Egito     4  3  3   4   -1
4    México    3  3  3   3   0
```
Japão fica na frente do Brasil pelo **saldo** (+1 contra 0). Egito (−1) vem à frente do México porque tem 4 pontos contra 3.

## Parte E — Relatório de debug (≈2 min)
Mostre o `RELATORIO-DEBUG.md`: um bloco por defeito com sintoma, hipótese, onde pôs o breakpoint e de que tipo, o que viu no Variables/Watch, a causa e a correção. Exemplo de preenchimento do defeito 1 para os alunos:
- Sintoma: Brasil com 6 pontos em vez de 4.
- Hipótese: o empate está sendo contado como vitória.
- Breakpoint: `classificacao.js:24`, condicional `jogo.golsA === jogo.golsB`.
- Watch: `timeA.pontos` foi de 0 para 3 num jogo 1×1.
- Causa: `>=` inclui o empate.
- Correção: `>=` → `>` e `else` com 1 ponto para cada.

## Checklist de fechamento
- [ ] Os 3 defeitos achados com breakpoint, um por vez.
- [ ] A saída final é idêntica ao `RESULTADO-ESPERADO.txt`.
- [ ] Usou ao menos: breakpoint condicional, Watch e Step into.
- [ ] Explicou o relatório que os alunos devem entregar (com print).
