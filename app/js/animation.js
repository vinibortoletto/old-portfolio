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

  // homeSection.style.display = "block";
  setTimeout(() => {
    !homePage.classList.contains("home-animation") &&
      homePage.classList.add("home-animation");

    // trabalhosSection.style.display = "none";
    // contatoSection.style.display = "none";
  }, 400);
}

function trabalhosAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  contatoPage.classList.contains("contato-animation") &&
    contatoPage.classList.remove("contato-animation");

  // trabalhosSection.style.display = "block";
  setTimeout(() => {
    !trabalhosPage.classList.contains("trabalhos-animation") &&
      trabalhosPage.classList.add("trabalhos-animation");

    // homeSection.style.display = "none";
    // contatoSection.style.display = "none";
  }, 400);
}

function contatoAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  trabalhosPage.classList.contains("trabalhos-animation") &&
    trabalhosPage.classList.remove("trabalhos-animation");

  // contatoSection.style.display = "block";
  setTimeout(() => {
    !contatoPage.classList.contains("contato-animation") &&
      contatoPage.classList.add("contato-animation");

    // homeSection.style.display = "none";
    // trabalhosSection.style.display = "none";
  }, 400);
}
