const homeBtn = document.getElementById("home-btn");
const trabalhosBtn = document.getElementById("trabalhos-btn");
const contatoBtn = document.getElementById("contato-btn");

const homePage = document.getElementById("home");
const trabalhosPage = document.getElementById("trabalhos");
const contatoPage = document.getElementById("contato");

const title = document.getElementById("title-primary");

window.onload = () => {
  homePage.classList.add("home-animation");
};

homeBtn.addEventListener("click", homeAnimation);
trabalhosBtn.addEventListener("click", trabalhosAnimation);
contatoBtn.addEventListener("click", contatoAnimation);

function homeAnimation() {
  trabalhosPage.classList.contains("trabalhos-animation") &&
    trabalhosPage.classList.remove("trabalhos-animation");

  contatoPage.classList.contains("contato-animation") &&
    contatoPage.classList.remove("contato-animation");

  setTimeout(() => {
    !homePage.classList.contains("home-animation") &&
      homePage.classList.add("home-animation");
  }, 500);
}

function trabalhosAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  contatoPage.classList.contains("contato-animation") &&
    contatoPage.classList.remove("contato-animation");

  setTimeout(() => {
    !trabalhosPage.classList.contains("trabalhos-animation") &&
      trabalhosPage.classList.add("trabalhos-animation");
  }, 500);
}

function contatoAnimation() {
  homePage.classList.contains("home-animation") &&
    homePage.classList.remove("home-animation");

  trabalhosPage.classList.contains("trabalhos-animation") &&
    trabalhosPage.classList.remove("trabalhos-animation");

  setTimeout(() => {
    !contatoPage.classList.contains("contato-animation") &&
      contatoPage.classList.add("contato-animation");
  }, 500);
}
