function verificar(resposta, correta) {
  return Number(resposta) === correta;
}

function mensagemFinal(acertos, total) {
  return `Você acertou ${acertos} de ${total}! 🏆`;
}

module.exports = { verificar, mensagemFinal };
