const cartasSimbolos = ['🍎', '🍌', '🍇', '🍉', '🍓', '🍒', '🥝', '🍍'];
let cartas = [...cartasSimbolos, ...cartasSimbolos]; 
let primeiraCarta = null;
let segundaCarta = null;
let travaTabuleiro = false;
let paresEncontrados = 0;

function embaralhar(array) {
  for (let i = array.length -1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

function criarTabuleiro() {
  const tabuleiro = document.getElementById('tabuleiro');
  embaralhar(cartas);
  tabuleiro.innerHTML = '';

  cartas.forEach((simbolo, index) => {
    const carta = document.createElement('div');
    carta.classList.add('carta');
    carta.dataset.simbolo = simbolo;


    const front = document.createElement('div');
    front.classList.add('front');
    front.textContent = '❓';

    const back = document.createElement('div');
    back.classList.add('back');
    back.textContent = simbolo;

    carta.appendChild(front);
    carta.appendChild(back);

    carta.addEventListener('click', virarCarta);

    tabuleiro.appendChild(carta);
  });
}

function virarCarta(event) {
  if(travaTabuleiro) return;
  const carta = event.currentTarget;
  if(carta === primeiraCarta) return;

  carta.classList.add('flipped');

  if(!primeiraCarta) {
    primeiraCarta = carta;
    return;
  }

  segundaCarta = carta;
  travaTabuleiro = true;

  checarCombinação();
}

function checarCombinação() {
  const igual = primeiraCarta.dataset.simbolo === segundaCarta.dataset.simbolo;

  if(igual) {
    paresEncontrados++;
    resetarTurno();
    if(paresEncontrados === cartasSimbolos.length) {
      document.getElementById('resultado').textContent = 'Parabéns! Você encontrou todos os pares!';
    }
  } else {
    setTimeout(() => {
      primeiraCarta.classList.remove('flipped');
      segundaCarta.classList.remove('flipped');
      resetarTurno();
    }, 1000);
  }
}

function resetarTurno() {
  [primeiraCarta, segundaCarta] = [null, null];
  travaTabuleiro = false;
}

criarTabuleiro();
