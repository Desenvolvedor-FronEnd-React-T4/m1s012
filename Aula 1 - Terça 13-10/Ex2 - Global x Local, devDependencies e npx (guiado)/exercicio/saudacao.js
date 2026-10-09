// ============================================================
// saudacao.js — cumprimento do Quiz da Copa (Aula 1 · Ex2)
// Arquivo PRONTO. Vamos EDITÁ-LO ao vivo para ver o nodemon
// reiniciar sozinho. Você escreve só os comandos do terminal.
// ============================================================
const hora = new Date().getHours();

let periodo = "noite";
if (hora < 12) {
  periodo = "dia";
} else if (hora < 18) {
  periodo = "tarde";
}

console.log(`Boa ${periodo}! Pronto para o Quiz da Copa 2026? ⚽`);
