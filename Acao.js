document.addEventListener('DOMContentLoaded', function () {
  const submenus = document.querySelectorAll('.has-submenu');

  // Função para alternar a classe "open" no submenu
  function toggleSubmenu(submenu) {
    submenu.classList.toggle('open');
  }

  // Adiciona evento de clique para cada seta do submenu
  submenus.forEach(submenu => {
    const arrow = submenu.querySelector('.arrow-down');

    // Verifica se a seta foi encontrada
    if (arrow) {
      arrow.addEventListener('click', () => toggleSubmenu(submenu));
    }
  });
});


const swiper = new Swiper('.swiper-container', {
  slidesPerView: 4, // Mostrar 4 slides
  spaceBetween: 10, // Espaçamento entre os slides
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  // Opcional: navegação
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});