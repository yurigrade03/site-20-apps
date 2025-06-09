function CalcularIMC(altura, peso) {
        const resultado = peso / (altura * altura);
        let classificacao = "";

        if (resultado < 18.5) {
                classificacao = "Abaixo do peso"
        } else if (resultado >= 18.5 && resultado <= 24.9) {
                classificacao = "Peso saudável"
        } else if (resultado >= 25 && resultado <= 29.9) {
                classificacao = "Sobrepeso"
        } else {
                classificacao = "Obesidade"
        }
        return { resultado: resultado.toFixed(2), classificacao };
}
function CalcularIMCHtml() {
        const altura = document.getElementById('idAltura').value / 100;
        const peso = document.getElementById('idPeso').value;
        const resultadoDiv = document.getElementById('resultadoDiv');

        const { resultado, classificacao } = CalcularIMC(altura, peso);

        genero = document.getElementById('genero').value
        resultadoDiv.innerHTML = `
                <p>Seu Gênero: ${genero} </p>
                <p>Seu IMC é: ${resultado}</p>
                <p>Sua Classificação: ${classificacao}</p>
            `;

}