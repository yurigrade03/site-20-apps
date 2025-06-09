function calcularResultado() {
  const form = document.getElementById('quizForm');
  const resultado = document.getElementById('resultado');
  let pontuacao = 0;

  for (let i = 1; i <= 5; i++) {
    const resposta = form[`q${i}`].value;
    if (resposta === "1") {
      pontuacao++;
    }
  }

  resultado.textContent = `Você acertou ${pontuacao} de 5 perguntas.`;
}
