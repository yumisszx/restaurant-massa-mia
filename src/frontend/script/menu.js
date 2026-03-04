function mostrarMenu(event, id) {

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
  event.currentTarget.classList.add('active');
}

//direcionar pagina do menu
window.addEventListener('DOMContentLoaded', () => {

  const params = new URLSearchParams(window.location.search);
  const aba = params.get('aba');

  if (aba) {

    //remove active de tudo
    document.querySelectorAll('.menu').forEach(menu => {
      menu.classList.remove('active');
    });

    document.querySelectorAll('.menu-btn').forEach(btn => {
      btn.classList.remove('active');
    });

    //ativa menu direcionado
    const menuAtivo = document.getElementById(aba);
    if (menuAtivo) {
      menuAtivo.classList.add('active');
    }

    //ativa botão correto
    const botaoAtivo = document.querySelector(`[data-id="${aba}"]`);
    if (botaoAtivo) {
      botaoAtivo.classList.add('active');
    }
  }

});