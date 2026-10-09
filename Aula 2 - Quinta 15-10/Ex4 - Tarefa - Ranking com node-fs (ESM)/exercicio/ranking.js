// ranking.js — módulo do RANKING (persistido em ranking.json)
// Ele deve funcionar de qualquer pasta onde o programa seja iniciado.

// TODO 1 — importe existsSync, readFileSync e writeFileSync de "node:fs"
// TODO 2 — importe fileURLToPath de "node:url" e path de "node:path"
// TODO 3 — monte o caminho do ranking.json ao lado deste arquivo (recrie o __dirname com import.meta.url)

// TODO 4 — export function carregarRanking(): se o arquivo NÃO existir, devolve [];
//          senão lê o texto (utf-8) e devolve JSON.parse(texto)
//          (é o mesmo raciocínio do "|| []" do localStorage da S11)

// TODO 5 — export function salvarPontuacao(nome, acertos): carrega o ranking, acrescenta
//          { nome, acertos, data: new Date().toISOString() }, ordena do maior para o menor
//          número de acertos, mantém só os 5 primeiros e grava com JSON.stringify(lista, null, 2)

// TODO 6 — export function melhoresDoRanking(): devolve a lista já carregada (para exibir)
