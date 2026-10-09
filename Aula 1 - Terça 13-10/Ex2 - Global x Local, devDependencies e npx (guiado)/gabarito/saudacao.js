// ============================================================
// saudacao.js — GABARITO COMENTADO (Aula 1 · Ex2)
// O foco desta aula NÃO é este código, e sim as ferramentas ao redor
// (nodemon, devDependencies, scripts). Mesmo assim, linha por linha:
// ============================================================

// new Date() cria um objeto com a data/hora ATUAIS; getHours() devolve a hora (0 a 23).
const hora = new Date().getHours();

// Valor padrão: se nenhuma condição abaixo for verdadeira, é "noite".
let periodo = "noite";

// Antes do meio-dia (0h–11h59) é "dia".
if (hora < 12) {
  periodo = "dia";
// Se não for manhã, mas ainda for antes das 18h, é "tarde".
} else if (hora < 18) {
  periodo = "tarde";
}

// Template string: ${periodo} entra no meio do texto. Tente editar esta frase e SALVAR:
// com o nodemon rodando, o terminal reinicia sozinho e mostra a nova frase.
console.log(`Boa ${periodo}! Pronto para o Quiz da Copa 2026? ⚽`);
