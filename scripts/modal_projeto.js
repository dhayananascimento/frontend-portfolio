const demoProjetos = document.querySelectorAll(".demo");
let itemSelecionado = null;

const modal = document.getElementById("modal");
const fechaModal = document.getElementById("modal_fechar");

function abrirModal(demoButton) {
  const imagemModal = document.getElementById("modal_imagem");

  imagemModal.src = demoButton.dataset.demoSrc;
  imagemModal.alt = demoButton.dataset.demoAlt;

  modal.style.display = "flex";
  
  fechaModal.focus();
  itemSelecionado = demoButton;
}

function fecharModal() {
  modal.style.display = "none";
  const imagemModal = document.getElementById("modal_imagem");
  imagemModal.src = "";
  itemSelecionado.focus();
}

demoProjetos.forEach((demoButton) => {
  demoButton.addEventListener("click", () => abrirModal(demoButton));

  demoButton.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      abrirModal(demoButton);
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
