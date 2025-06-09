function adicionar(){
//chamada dos valores para as funçoes
    const input = document.getElementById('adicionar')
    const Tarefa = input.value
    input.value = " "

//criaçao da lista e texto com o span
    const li = document.createElement('li')

    const span = document.createElement('span')
    span.textContent = Tarefa;
   // criacao do botao com a funçao e class para fazer o risco
    const botaoVerificar = document.createElement('button')
    botaoVerificar.textContent = "concluir"
    botaoVerificar.onclick = function(){
        span.classList.toggle('feita');
    }
    // criacao do botao com a funçao de remover a linha da li criada
    const botaoRemover = document.createElement('button')
    botaoRemover.textContent = "remover"
    botaoRemover.onclick = function(){
        li.remove()
    }
    //criado uma classe div nos botoes para conseguuir estilizar no css e ficar apressentavel
    const botoes = document.createElement('div');
    botoes.className = 'botoes';
    //usado o botoes para criar os 2
    botoes.appendChild(botaoVerificar);
    botoes.appendChild(botaoRemover);
    li.appendChild(span);
    li.appendChild(botoes);

    document.getElementById('ListaUl').appendChild(li);
 

}