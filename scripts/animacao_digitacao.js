document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const texto = "Dhayana Nascimento";
    const elemento = document.querySelector(".apresentacao_pessoal h1");

    let indice = 0;
    elemento.textContent = "D";
    elemento.style.opacity = "1";

    const timer = setInterval(() => {
      if (indice < texto.length) {
        elemento.textContent = texto.slice(0, indice + 1);
        indice++;
      } else {
        clearInterval(timer);
      }
    }, 75);
  }, 700);
});

