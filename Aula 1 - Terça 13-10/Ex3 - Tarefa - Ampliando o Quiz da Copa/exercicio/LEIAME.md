# Ex3 — TAREFA: Ampliando o Quiz da Copa (individual, para fazer em casa)

**Aula 1 · terça 13/10 · não é guiado** — entregue pelo AVA/monitoria conforme combinado com o professor.

## Ponto de partida
Esta pasta já traz o quiz **funcionando** (resultado do Ex1). Rode:
```
npm install
npm start
```

## O que fazer (siga os `TODO` do `index.js`)
1. Acrescentar **5 perguntas novas** ao array.
2. Criar `percentual(acertos, total)`.
3. Criar `classificar(percentual)` (Craque / Titular / Reserva / Torcedor).
4. Mostrar o aproveitamento e a classificação com **cores** diferentes (`chalk`).
5. ⭐ **Estrela (npm):** instale o `nodemon` como **devDependency** e crie o script `"dev": "nodemon index.js"`. (Atenção: o nodemon reinicia o programa a cada salvamento — para testar interativamente prefira `npm start`.)

## Pronto quando
- [ ] `npm start` roda com 15 perguntas.
- [ ] O fim do jogo mostra a mensagem, o percentual e a classificação coloridos.
- [ ] O `package.json` não tem pacotes a mais nem a menos (confira com `npm ls --depth=0`).

## Dúvidas
Leve para a aula ao vivo de quinta (15/10) ou para a monitoria.
