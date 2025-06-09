function adicionar(){
// chamei o texto que a pessoa digita e  salvei na cosnt tarefa 
    const input2 = document.getElementById('quant')
    const input = document.getElementById('input');
    const tarefa = input.value
    const tarefa2 = input2.value
    // comando para apagar o input apos o enter de cima^
    input.value = "";
    input2.value = "";
// criei a lista ordenada li e  o texto span dela 
    const li = document.createElement('li')
    const span = document.createElement('span')
    const span1 = document.createElement('span')
    // chemi o input para por o texto que a pesso escreveu lá no começo dentro da tag
    span1.textContent = tarefa2
    span1.classList.add('quantidade');
    span.textContent = tarefa
    span.classList.add('texto');
// criei o botao de remover 
    const botao = document.createElement('button')
    //determinei oque aparece no botao escrito 
    botao.textContent= "Remover"
    // funcao de remover a linha
    botao.onclick = function(){
        li.remove()
    }
// chama o botao e o texto criado atravez do comando onde aparece a ordem de chamada
    li.appendChild (span1)
    li.appendChild (span)
    li.appendChild (botao)
// lista onde ele sera criado lá no html
    document.getElementById('lista').appendChild(li)
}