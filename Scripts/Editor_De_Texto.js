function formatarTexto(comando) {
  const editor = document.getElementById('editor');
  editor.focus();            
  document.execCommand(comando, false, null);
}
