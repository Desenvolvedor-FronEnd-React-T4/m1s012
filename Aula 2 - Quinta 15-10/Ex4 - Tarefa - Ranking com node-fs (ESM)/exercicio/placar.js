export function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

export function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}
