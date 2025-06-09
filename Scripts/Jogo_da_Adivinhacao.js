const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 0;

function fazerPalpite() {
  const palpiteInput = document.getElementById('palpite');
  const resultado = document.getElementById('resultado');
  const palpite = parseInt(palpiteInput.value);

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    resultado.textContent = 'Por favor, digite um número entre 1 e 100.';
    return;
  }

  tentativas++; 

  if (palpite === numeroSecreto) {
    resultado.textContent = `Parabéns! Você acertou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`;
    document.getElementById('botao').disabled = true;
    palpiteInput.disabled = true;
  } else if (palpite < numeroSecreto) {
    resultado.textContent = 'Tente um número maior!';
  } else {
    resultado.textContent = 'Tente um número menor!';
  }

  palpiteInput.value = '';
  palpiteInput.focus();
}
