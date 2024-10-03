document.addEventListener('DOMContentLoaded', function() {
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
  
  const setaFlutuante = document.querySelector('.seta-flutuante');
  const footer = document.querySelector('footer');
  
  setaFlutuante.addEventListener('click', function() {
    footer.classList.toggle('show');
  });