function simularSaque() {
  const valorInput = document.getElementById('valor');
  const resultado = document.getElementById('resultado');
  let valor = parseInt(valorInput.value);

  if (isNaN(valor) || valor < 2) {
    resultado.innerHTML = 'Digite um valor válido (mínimo R$ 2).';
    return;
  }

  const notas = [100, 50, 20, 10, 5, 2];
  let resposta = `<p>Valor solicitado: R$ ${valor}</p>`;
  let restante = valor;

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i];
    const qtd = Math.floor(restante / nota);
    if (qtd > 0) {
      resposta += `<p>${qtd} nota(s) de R$ ${nota}</p>`;
      restante = restante % nota;
    }
  }

  if (restante > 0) {
    resposta += `<p>Não é possível sacar R$ ${restante}, pois não há nota de R$ 1.</p>`;
  }

  resultado.innerHTML = resposta;
}
