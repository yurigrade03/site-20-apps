const todas = document.getElementById('Tds');
const nat = document.getElementById('Nat');
const aut = document.getElementById('Aut');
const tec = document.getElementById('Tec');


const imagens = document.getElementsByClassName('foto');

function filtrar(categoria) {

  for (let img of imagens) {
        if (categoria === 'todas') {
            img.style.display = 'block';
        } else if (img.getAttribute('categoria') === categoria) {
            img.style.display = 'block';
        } else {
            img.style.display = 'none';
        }
  }
}
todas.addEventListener('click', () => filtrar('todas'));
nat.addEventListener('click', () => filtrar('natureza'));
aut.addEventListener('click', () => filtrar('automovel'));
tec.addEventListener('click', () => filtrar('tecnologia'));