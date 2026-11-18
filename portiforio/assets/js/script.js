document.getElementById('year').textContent = new Date().getFullYear();

// Fecha o menu de navegação após selecionar uma seção em telas pequenas.
document.querySelectorAll('.navbar .nav-link').forEach((link) => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('navLinks');
    if (menu.classList.contains('show')) {
      bootstrap.Collapse.getOrCreateInstance(menu).hide();
    }
  });
});
