const emailBtn = document.getElementById("spheres__btn--email");
const githubBtn = document.getElementById("spheres__btn--github");
const phoneBtn = document.getElementById("spheres__btn--phone");

emailBtn.addEventListener("click", function () {
  const emailLine = document.getElementById("spheres__line--email");

  emailBtn.style.pointerEvents = "none";
  emailLine.classList.add("sphere-clicked");
  copyTextEmail();

  setTimeout(() => {
    emailLine.style.display = "none";
    emailLine.classList.remove("sphere-clicked");

    setTimeout(() => {
      emailBtn.style.pointerEvents = "all";
      emailLine.style.display = "block";
    }, 400);
  }, 400);
});

githubBtn.addEventListener("click", function () {
  const githubLine = document.getElementById("spheres__line--github");

  githubLine.classList.add("sphere-clicked");

  setTimeout(() => {
    githubLine.style.display = "none";
    githubLine.classList.remove("sphere-clicked");

    setTimeout(() => {
      githubLine.style.display = "block";
    }, 400);
  }, 400);
});

phoneBtn.addEventListener("click", function () {
  const phoneLine = document.getElementById("spheres__line--phone");

  phoneBtn.style.pointerEvents = "none";
  phoneLine.classList.add("sphere-clicked");
  copyTextPhone();

  setTimeout(() => {
    phoneLine.style.display = "none";
    phoneLine.classList.remove("sphere-clicked");

    setTimeout(() => {
      phoneBtn.style.pointerEvents = "all";
      phoneLine.style.display = "block";
    }, 400);
  }, 400);
});

function copyTextPhone() {
  const textPhone = document.getElementById("text-phone");
  const textMsg = document.getElementById("spheres__copied--phone");

  textPhone.select();
  document.execCommand("copy");

  textMsg.classList.toggle("copied-msg");
  setTimeout(() => {
    textMsg.classList.toggle("copied-msg");
  }, 2000);
}

function copyTextEmail() {
  const textEmail = document.getElementById("text-email");
  const textMsg = document.getElementById("spheres__copied--email");

  textEmail.select();
  document.execCommand("copy");

  textMsg.classList.toggle("copied-msg");
  setTimeout(() => {
    textMsg.classList.toggle("copied-msg");
  }, 2000);
}