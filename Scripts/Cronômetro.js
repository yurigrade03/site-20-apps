
// chamei todos os dados do html com os cont

const tempo = document.getElementById('tempo');
const inicio = document.getElementById('iniciar');
const pausar = document.getElementById('pausar');
const reiniciar = document.getElementById('reiniciar');
//criacao dos segundos e minutos para funcionar o cronometro
var segundos = 0
var minutos = 0
var cronometro = null
// aqui vai atualizar o tempo conforme os segundos
function atttempo() {

    segundos++
    if (segundos == 60) {
        segundos = 0
        minutos++
    }
    // aqui muda o texto e usando a formula dos < 10 "0" para quando for 2 s ficar 02 
    tempo.textContent = `${minutos < 10 ? '0' + minutos : minutos}:${segundos < 10 ? '0' + segundos : segundos}`

}
// aqui inicia o comando
function biniciar() {
    if (cronometro) return;
    cronometro = setInterval(atttempo, 1000)

}
function bpausar() {
    clearInterval(cronometro);
    cronometro = null;
}
function breiniciar() {
    clearInterval(cronometro)
    cronometro = null
    minutos = 0
    segundos = 0
    tempo.textContent = '00:00'
}
// aqui faz funcionar o botao lá no html
inicio.addEventListener('click', biniciar);
pausar.addEventListener('click', bpausar)
reiniciar.addEventListener('click', breiniciar)
