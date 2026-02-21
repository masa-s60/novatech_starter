document.addEventListener("DOMContentLoaded", function () {
  const hamburgerMenu = document.querySelector('.c-hamburger');
  const nav = document.querySelector('.c-header__nav');
  const overlay = document.querySelector('.c-overlay');
  
  const toggleMenu = () => {
    const isOpen = hamburgerMenu.classList.toggle("is-open");
    nav.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-open", isOpen);

    hamburgerMenu.setAttribute("aria-expanded", isOpen ? "true" : "false");
    nav.setAttribute("aria-hidden", isOpen ? "false" : "true");
    overlay.setAttribute("aria-hidden", isOpen ? "false" : "true");
  }

  hamburgerMenu.addEventListener('click', toggleMenu);
  overlay.addEventListener("click", toggleMenu);
});