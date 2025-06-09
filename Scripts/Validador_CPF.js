
function verificarHtml(){

    const cpf = document.getElementById('cpf').value;
    let mensagem = " ";

  if (cpf.length == 11 ){
    mensagem = "Regular!"
    resultado.className = "regular";
  }else {
    mensagem = "CPF Incorreto!"
    resultado.className = "irregular";
  }

document.getElementById('resultado').textContent = mensagem

}