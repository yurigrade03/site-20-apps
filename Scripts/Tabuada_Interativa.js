function gerarTabuada() {
  const numero = parseInt(document.getElementById('numero').value);
  const resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  if (isNaN(numero)) {
    resultado.innerHTML = 'Por favor, insira um número válido.';
    return;
  }

  for (let i = 1; i <= 10; i++) {
    const linha = `${numero} x ${i} = ${numero * i}<br>`;
    resultado.innerHTML += linha;
  }
}
