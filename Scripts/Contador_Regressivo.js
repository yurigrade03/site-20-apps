const tempo = document.getElementById('tempo');
const inicio = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const reiniciar = document.getElementById('reiniciar');
const inpContagem = document.getElementById('Contagem');

let segundos = 0;
let minutos = 0;
let cronometro = null;


function atualizarContagem() {
    if (minutos === 0 && segundos === 0) {
        clearInterval(cronometro);
        cronometro = null;
        return;
    }

    if (segundos === 0) {
        minutos--;
        segundos = 59;
    } else {
        segundos--;
    }

    tempo.textContent = `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`;
}

// Função para iniciar o cronômetro
function iniciarContagem() {
    if (cronometro) return; 
    if (minutos === 0 && segundos === 0) {
        minutos = parseInt(inpContagem.value) || 0;
        segundos = 0;
        inpContagem.value = ''
    }
    tempo.textContent = `${minutos < 10 ? '0' + minutos : minutos}:00`;
    cronometro = setInterval(atualizarContagem, 1000);
}

// Função para pausar
function pausarContagem() {
    clearInterval(cronometro);
    cronometro = null;
}

// Função para reiniciar
function reiniciarContagem() {
    clearInterval(cronometro);
    cronometro = null;
    minutos = parseInt(inpContagem.value) || 0;
    segundos = 0;
    tempo.textContent = `${minutos < 10 ? '0' + minutos : minutos}:00`;
}

// Eventos dos botões
inicio.addEventListener('click', iniciarContagem);
pausar.addEventListener('click', pausarContagem);
reiniciar.addEventListener('click', reiniciarContagem);
