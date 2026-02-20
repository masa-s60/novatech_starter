document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.p-firstView__item');
  let currentNum = 0;

  setInterval(() => {
    slides[currentNum].classList.remove('is-active');
    currentNum = (currentNum + 1) % slides.length;
    slides[currentNum].classList.add('is-active');
  }, 6000);
});
