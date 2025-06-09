const jogo = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
]
let jogadorAtual = "X";
let fimDeJogo = false;
const mensagem = document.getElementById('X')
function Mensagem(texto) {
    mensagem.innerHTML = `<h1>${texto}</h1>`;
}

function vitoria(jogador) {
    const combinacoes = [
        // Linhas
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        // Colunas
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        // Diagonais
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
    ];
}
//condiçoes para o empate
function empate() {
    return jogo.flat().every(celula => celula !== "");
}
// nao é meu \/\/\/
function clicarCelula(linha, coluna) {
    if (fimDeJogo) return;

    if (jogo[linha][coluna] !== "") return;

    jogo[linha][coluna] = jogadorAtual;
    const celula = document.getElementById(`card-${linha}-${coluna}`);
    celula.textContent = jogadorAtual;

    if (vitoria(jogadorAtual)) {
        Mensagem(`Jogador ${jogadorAtual} venceu!`);
        return;
    }

    if (empate()) {
        Mensagem("Empate!");
        return;
    }

    jogadorAtual = jogadorAtual === "X" ? "O" : "X";
    Mensagem(jogadorAtual);

}
function adicionarEventos() {
    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            const celula = document.getElementById(`card-${linha}-${coluna}`);
            celula.addEventListener('click', () => clicarCelula(linha, coluna));
        }
    }
}

function iniciarJogo() {
    fimDeJogo = false;
    jogadorAtual = "X";
    Mensagem(`Vez do: ${jogadorAtual}`);

    for (let linha = 0; linha < 3; linha++) {
        for (let coluna = 0; coluna < 3; coluna++) {
            jogo[linha][coluna] = "";
            const celula = document.getElementById(`card-${linha}-${coluna}`);
            celula.textContent = "";
        }
    }
}

window.onload = function () {
    iniciarJogo();
    adicionarEventos();
};