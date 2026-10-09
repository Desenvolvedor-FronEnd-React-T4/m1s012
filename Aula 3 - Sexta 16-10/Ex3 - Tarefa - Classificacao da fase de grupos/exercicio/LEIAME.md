# Ex3 — TAREFA: Classificação da fase de grupos (debug autônomo)

**Aula 3 · sexta 16/10 · tarefa individual** — use o debugger (não vale só olhar o código e chutar!).

## Situação
`classificacao.js` calcula a tabela de um grupo com 4 seleções (dados **fictícios**). Ele roda, mas a tabela **não bate** com o `RESULTADO-ESPERADO.txt`.
Regras do futebol: vitória = 3 pontos, empate = 1 ponto para cada, derrota = 0. Desempate: **pontos**, depois **saldo de gols** (gols pró − gols contra), depois **gols pró**.

## O que fazer
1. Abra a pasta `exercicio` no VS Code. Não precisa de `npm install`.
2. `npm start` e compare com `RESULTADO-ESPERADO.txt`.
3. Use **breakpoints**, **Watch** e **Step over/into** para achar **3 defeitos**.
4. Corrija um de cada vez, rodando a cada correção.
5. Preencha o `RELATORIO-DEBUG.md` com um bloco por defeito (com *print*).

## Pronto quando
- [ ] A saída é idêntica ao `RESULTADO-ESPERADO.txt`.
- [ ] O relatório tem os 3 defeitos explicados com evidência do debugger.

## Dicas
- Um breakpoint **dentro do `for`**, com condição `jogo.a === "Brasil"`, mostra só os jogos do Brasil.
- *Watch* sugeridos: `timeA.pontos`, `timeB.pontos`, `jogo.golsA`, `jogo.golsB`.
- Para o desempate, pare logo **depois** do `sort` e observe a ordem de `lista`.
