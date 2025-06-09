function gerar(){
// pegando os nomes da entrada 
    const nomes = document.getElementById('nome').value
// separando eles com o termo = , e salvando na const lista
    const lista = nomes.split(',')
// sorteando eles usando  na lista 
    const nomesSorteados = Math.floor(Math.random() * lista.length)
// pegando o nome salvo sorteado na const acima e colocando no "resultados"
    const resultados = lista [nomesSorteados]

// exibindo o nome sorteado 
    document.getElementById('resultado').textContent = resultados
}