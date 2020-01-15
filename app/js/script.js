const homeBtn = document.getElementById("home__btn");
const trabalhosBtn = document.getElementById("trabalhos__btn");
const contatoBtn = document.getElementById("contato__btn");

const homePage = document.getElementById("home");
const trabalhosPage = document.getElementById("trabalhos");
const contatoPage = document.getElementById("contato");

const title = document.getElementById("title__primary");

let currentPage = "";

window.onload = () => {
  navbarAnimation();
  // currentPage = "home";
  // homeAnimation();
  // pageActive(homeBtn);

  currentPage = "contato";
  contatoAnimation();
  pageActive(contatoBtn);
};

window.onresize = () => {
  toggleOverflow();
};

homeBtn.addEventListener("click", function() {
  currentPage = "home";
  homeAnimation();
  pageActive(homeBtn);

  toggleOverflow();
  scrollTop();
});

trabalhosBtn.addEventListener("click", function() {
  currentPage = "trabalhos";
  trabalhosAnimation();
  pageActive(trabalhosBtn);
  toggleOverflow();
  scrollTop();
});

contatoBtn.addEventListener("click", function() {
  currentPage = "contato";
  contatoAnimation();
  pageActive(contatoBtn);

  toggleOverflow();
  scrollTop();
});
