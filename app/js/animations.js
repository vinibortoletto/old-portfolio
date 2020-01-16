const homeSection = document.getElementById("home");
const trabalhosSection = document.getElementById("trabalhos");
const contatoSection = document.getElementById("contato");

const navbar = document.getElementById("nav");

function navbarAnimation() {
  navbar.classList.add("navbar-animation");
}

function homeAnimation() {
  trabalhosPage.classList.contains("trabalhos-animation") &&
    trabalhosPage.classList.remove("trabalhos-animation");

  contatoPage.classList.contains("contato-animation") &&
    contatoPage.classList.remove("contato-animation");

  setTimeout(() => {
    !homePage.classList.contains("home-animation") &&
      homePage.classList.add("home-animation");
  }, 400);
}

function trabalhosAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  contatoPage.classList.contains("contato-animation") &&
    contatoPage.classList.remove("contato-animation");

  setTimeout(() => {
    !trabalhosPage.classList.contains("trabalhos-animation") &&
      trabalhosPage.classList.add("trabalhos-animation");
  }, 400);
}

function contatoAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  trabalhosPage.classList.contains("trabalhos-animation") &&
    trabalhosPage.classList.remove("trabalhos-animation");

  setTimeout(() => {
    !contatoPage.classList.contains("contato-animation") &&
      contatoPage.classList.add("contato-animation");
  }, 400);
}
