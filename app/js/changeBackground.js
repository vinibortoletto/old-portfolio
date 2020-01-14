const bgTexture = document.getElementById("bg__texture");
const bg = document.getElementById("bg");

function changeBg() {
  if (homeBtn.classList.contains("page-active")) {
    bgTexture.classList.remove("bg__texture--trabalhos");
    bgTexture.classList.remove("bg__texture--contato");

    bgTexture.classList.add("bg__texture--home");
    bgTexture.style.opacity = "1";
  }

  if (trabalhosBtn.classList.contains("page-active")) {
    bgTexture.classList.add("bg__texture--trabalhos");
    bgTexture.style.opacity = "1";
  }

  if (contatoBtn.classList.contains("page-active")) {
    bgTexture.classList.add("bg__texture--contato");
    bg.style.opacity = "1";
  }
}

function homeBg() {
  if (homeBtn.classList.contains("page-active")) {
    bgTexture.classList.add("bg__texture--home");
    bgTexture.style.opacity = "1";
  } else {
    bgTexture.classList.remove("bg__texture--home");
    bgTexture.style.opacity = "0";
  }
}

function trabalhosBg() {
  if (trabalhosBtn.classList.contains("page-active")) {
    bgTexture.classList.add("bg__texture--trabalhos");
    bgTexture.style.opacity = "1";
  } else {
    bgTexture.classList.remove("bg__texture--trabalhos");
    bgTexture.style.opacity = "0";
  }
}

function contatoBg() {
  // contatoBtn.classList.contains("page-active")
  //   ? bgTexture.classList.add("bg__texture--contato")
  //   : bgTexture.classList.remove("bg__texture--contato");
  // if (contatoBtn.classList.contains("page-active")) {
  //   bgTexture.classList.add("bg__texture--contato");
  //   bg.style.opacity = "1";
  // } else {
  //   bgTexture.classList.remove("bg__texture--contato");
  //   bg.style.opacity = "0";
  // }
}
