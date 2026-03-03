function mostrarAba(event, id) {

  //esconde todas os menus
  const menus = document.querySelectorAll('.menu');
  menus.forEach(menu => {
    menu.classList.remove('active');
  });

  //remove active dos botões
  const botoes = document.querySelectorAll('.menu-btn');
  botoes.forEach(botao => {
    botao.classList.remove('active');
  });

  //mostra menu clicado
  document.getElementById(id).classList.add('active');

  //ativa botão clicado
  event.target.classList.add('active');
}