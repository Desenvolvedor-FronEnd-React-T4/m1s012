# Ex2 — Breakpoint condicional, logpoint e exceções (GUIADO — live coding)

**Aula 3 · sexta 16/10 · vídeo gravado** — pause o vídeo e acompanhe.

## Situação
O `auditor.js` lê **60 partidas** do Quiz (`resultados.js`) e calcula a média de acertos (cada partida vale de 0 a 10).
O resultado sai **absurdo**, e depois o programa quebra. Em 60 registros, **não dá** para parar em todos e olhar um a um.

## Ferramentas desta atividade
| Ferramenta | Para que serve aqui |
|------------|---------------------|
| **Breakpoint condicional** | Parar só quando uma condição for verdadeira (`typeof r.acertos !== "number"`) |
| **Logpoint** | Imprimir uma mensagem sem alterar o código e sem parar (`Registro {r.id}: {typeof r.acertos}`) |
| **Hit count** | Parar só na N-ésima passagem pelo breakpoint |
| **Watch** | Acompanhar `soma` e `typeof soma` a cada volta |
| **Pause on exceptions** | Parar exatamente na linha que lança o erro |

## Antes de começar
1. Abra a pasta `exercicio` no VS Code. **Não precisa de `npm install`** (não há pacotes).
2. `npm start` e observe a saída errada + o erro.

## Pronto quando
- [ ] Você descobriu **qual registro** estraga a soma, sem olhar o arquivo inteiro.
- [ ] Você sabe dizer **por que** a soma virou texto.
- [ ] A média sai coerente (entre 0 e 10) e o programa **não quebra**.

Gabarito comentado: `../gabarito`.
