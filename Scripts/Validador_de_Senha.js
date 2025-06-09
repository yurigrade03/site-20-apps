function validarSenha() {
  const senha = document.getElementById('senha').value;
  const resultado = document.getElementById('resultado');

  const requisitos = [
    { regex: /.{8,}/, mensagem: "Mínimo de 8 caracteres" },
    { regex: /[A-Z]/, mensagem: "Pelo menos 1 letra maiúscula" },
    { regex: /[a-z]/, mensagem: "Pelo menos 1 letra minúscula" },
    { regex: /[0-9]/, mensagem: "Pelo menos 1 número" },
    { regex: /[\W_]/, mensagem: "Pelo menos 1 caractere especial" }
  ];

  let mensagens = requisitos.map(req => {
    return req.regex.test(senha)
      ? `✅ ${req.mensagem}`
      : `❌ ${req.mensagem}`;
  });

  resultado.innerHTML = mensagens.join("<br>");
}

function mostrarSenha() {
  const senhaInput = document.getElementById('senha');
  senhaInput.type = senhaInput.type === 'password' ? 'text' : 'password';
}
