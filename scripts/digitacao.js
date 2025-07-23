document.addEventListener("DOMContentLoaded", function () {
  const texto = "Dhayana Nascimento";
  const elemento = document.querySelector(".apresentacao h1");

  let indice = 0;
  elemento.textContent = "D";

  const timer = setInterval(() => {
    if (indice < texto.length) {
      elemento.textContent = texto.slice(0, indice + 1);
      indice++;
    } else {
      clearInterval(timer);
    }
  }, 100);
});
