const demoProjetos = document.querySelectorAll(".demo_projeto");
let itemSelecionado = null;
let navegandoComTeclado = false;

const modal = document.getElementById("modal");
const fechaModal = document.getElementById("modal_fechar");

// Detecta quando o usuário está navegando com teclado
document.addEventListener("keydown", (event) => {
  if (event.key === "Tab") {
    navegandoComTeclado = true;
  }
});

// Detecta quando o usuário usa o mouse
document.addEventListener("mousedown", () => {
  navegandoComTeclado = false;
});

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
      navegandoComTeclado = true;
      
      // Força o foco visible e adiciona uma classe CSS para garantir o outline
      fechaModal.focus();
      fechaModal.classList.add("force-focus-visible");
      
      // Remove a classe após um pequeno delay para não interferir com outros focos
      setTimeout(() => {
        fechaModal.classList.remove("force-focus-visible");
      }, 100);
    }
  }
});
