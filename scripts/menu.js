const menu = document.getElementById("menu_hamburguer");
const checkboxMenu = document.getElementById("checkbox_menu_hamburguer");

menu.tabIndex = 0;
menu.role = "button";

menu.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();

    checkboxMenu.checked = !checkboxMenu.checked;
  }
});