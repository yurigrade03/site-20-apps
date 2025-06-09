function verificarPrimo() {
  const resultado = document.getElementById('resultado');
  const inputNumero = document.getElementById('numero');
  const num = parseInt(inputNumero.value);

  if (isNaN(num) || num < 1) {
    resultado.textContent = 'Por favor, digite um número inteiro maior que 0.';
    return;
  }

  if (num === 1) {
    resultado.textContent = '1 não é um número primo.';
    return;
  }

  let ehPrimo = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      ehPrimo = false;
      break;
    }
  }

  if (ehPrimo) {
    resultado.textContent = `${num} é um número primo!`;
  } else {
    resultado.textContent = `${num} não é um número primo.`;
  }
}
