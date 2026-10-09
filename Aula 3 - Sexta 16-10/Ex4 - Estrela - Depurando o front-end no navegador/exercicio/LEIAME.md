# Ex4 — ⭐ ESTRELA: Depurando o front-end no navegador

**Aula 3 · sexta 16/10 · opcional** — o mesmo raciocínio do debugger, agora com HTML + JavaScript no navegador.

## Situação
No Bolão da Copa, ao clicar em **Calcular**, **nada aparece** (há um erro no Console). Quando você resolve isso, surge o segundo defeito: **"Total de gols no jogo: 23"** para 2 + 3.

## Três formas de depurar (escolha uma, depois teste as outras)
1. **DevTools do navegador** — `F12` › aba **Sources** › abra `script.js` › clique na canaleta para criar o breakpoint › clique no botão › observe *Scope* e *Watch*.
2. **Instrução `debugger;`** — escreva `debugger;` no código; com o DevTools **aberto**, o navegador pausa ali.
3. **VS Code** — instale o *Live Server*, clique em **Go Live**, crie `.vscode/launch.json` (cole de `colas/launch.json.txt`) e use **F5**: os breakpoints do VS Code pausam o código que roda no Edge/Chrome.

## Pronto quando
- [ ] Você achou **2 defeitos** com breakpoint (um é de tipo de dado; o outro, de seleção do elemento).
- [ ] A tela mostra **5** para 2 + 3.
- [ ] Você escreveu em 2 linhas por que `value` devolve texto.

Gabarito comentado: `../gabarito`.
