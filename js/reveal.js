document.addEventListener("DOMContentLoaded", () => {
  const targets = document.querySelectorAll(".js-reveal");

  if (!targets.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-active");
      obs.unobserve(entry.target);
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -5% 0px",
  });

  targets.forEach((target) => {
    observer.observe(target);
  });
});