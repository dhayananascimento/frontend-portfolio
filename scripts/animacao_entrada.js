document.addEventListener("DOMContentLoaded", function () {
  const seletores = [
    "h2", "h3", "p", "img",
    ".habilidade", ".projeto", ".contato"
  ];
  const elementos = document.querySelectorAll(seletores.join(", "));
  const observador = new window.IntersectionObserver((entradas) => {
    entradas.forEach(entrada => {
      if (entrada.isIntersecting) {
        entrada.target.setAttribute("data-elemento-visivel", "true");
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.1 });

  elementos.forEach(elemento => observador.observe(elemento));
});
