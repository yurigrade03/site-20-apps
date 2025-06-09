
function notaMedia(Nota1, Nota2, Nota3) {
    const media = (Nota1 + Nota2 + Nota3) / 3;
    let texto = " ";

    if (media >= 7) {
        texto = "Aluno Aprovado!"
    } else if (media >= 5 && media < 7) {
        texto = "Aluno em Exame!"
    } else {
        texto = "Aluno Reprovado!"
    }

    return { media, texto }
}

function notaMediaHtml() {
    const Nota1 = parseFloat(document.getElementById('idNota1').value);
    const Nota2 = parseFloat(document.getElementById('idNota2').value);
    const Nota3 = parseFloat(document.getElementById('idNota3').value);

    const { media, texto } = notaMedia(Nota1, Nota2, Nota3);

    document.getElementById('resultado').textContent = texto;
    document.getElementById('media').textContent = media;
}