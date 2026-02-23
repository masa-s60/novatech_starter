document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.c-hamburger');
  const nav = document.querySelector('.c-drawer');
  
  const toggleMenu = () => {
    const isOpen = hamburgerMenu.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);

    hamburgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    nav.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  hamburgerMenu.addEventListener('click', toggleMenu);
  nav.addEventListener("click", toggleMenu);
});