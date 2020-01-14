const homeBtn = document.getElementById("home__btn");
const trabalhosBtn = document.getElementById("trabalhos__btn");
const contatoBtn = document.getElementById("contato__btn");

const homePage = document.getElementById("home");
const trabalhosPage = document.getElementById("trabalhos");
const contatoPage = document.getElementById("contato");

const title = document.getElementById("title__primary");

window.onload = () => {
  trabalhosPage.classList.add("trabalhos-animation"); //FIXME: remover depois
  trabalhosBtn.classList.add("page-active");

  // homePage.classList.add("home-animation");
  // homeBtn.classList.add("page-active");
};

homeBtn.addEventListener("click", function() {
  homeAnimation();
  pageActive(homeBtn);
});
trabalhosBtn.addEventListener("click", function() {
  trabalhosAnimation();
  pageActive(trabalhosBtn);
});
contatoBtn.addEventListener("click", function() {
  contatoAnimation();
  pageActive(contatoBtn);
});
