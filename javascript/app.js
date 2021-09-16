const hamburger_menu = document.querySelector(".hamburger-menu");
const navbar = document.querySelector("header nav");
const Link = document.querySelectorAll(".Link a");
function closeMenu() {
    navbar.classList.remove("open");
    document.body.classList.remove("stop-scrolling");
  }
  
  hamburger_menu.addEventListener("click", () => {
    if (!navbar.classList.contains("open")) {
      navbar.classList.add("open");
      document.body.classList.add("stop-scrolling");
    } else {
      closeMenu();
    }
  });
  
  Link.forEach((link) => Link.addEventListener("click", () => closeMenu()));
  