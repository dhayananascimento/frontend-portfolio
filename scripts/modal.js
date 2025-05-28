const imagensProjeto = document.querySelectorAll(".projeto_imagem");

const modal = document.getElementById("modal");
const fechaModal = document.getElementById("modal_fechar");

function abrirModal(src, alt) {
  const imagemModal = document.getElementById("modal_imagem");

  modal.style.display = "flex";
  imagemModal.src = src;
  imagemModal.alt = alt;
}

function fecharModal() {
  modal.style.display = "none";
}

imagensProjeto.forEach((imagem) => {
  imagem.tabIndex = 0;
  imagem.role = "button";

  imagem.addEventListener("click", () => abrirModal(imagem.src, imagem.alt));

  imagem.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      abrirModal(imagem.src, imagem.alt);
    }
  });
});

fechaModal.addEventListener("click", fecharModal);
fechaModal.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    fecharModal();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal.style.display === "block") {
    event.preventDefault();
    fecharModal();
  }
});
