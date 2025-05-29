const imagensProjeto = document.querySelectorAll(".projeto_imagem");
let cardSelecionado = null;

const modal = document.getElementById("modal");
const fechaModal = document.getElementById("modal_fechar");

function abrirModal(imagem) {
  const imagemModal = document.getElementById("modal_imagem");

  modal.style.display = "flex";
  imagemModal.src = imagem.src;
  imagemModal.alt = imagem.alt;

  fechaModal.focus();
  cardSelecionado = imagem;
}

function fecharModal() {
  modal.style.display = "none";
  cardSelecionado.focus();
}

imagensProjeto.forEach((imagem) => {
  imagem.tabIndex = 0;
  imagem.role = "button";

  imagem.addEventListener("click", () => abrirModal(imagem));

  imagem.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      abrirModal(imagem);
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
  if (modal.style.display === "flex") {
    if (event.key === "Escape") {
      event.preventDefault();
      fecharModal();
    }

    if (event.key === "Tab") {
      event.preventDefault();
      fechaModal.focus();
    }
  }
});
