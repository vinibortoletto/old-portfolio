const navLinks = document.querySelectorAll(".nav__link");

function pageActive(pageActive) {
  navLinks.forEach(link => {
    link.classList.contains("page-active") &&
      link.classList.remove("page-active");
  });

  let newPageActive = pageActive;
  newPageActive.classList.add("page-active");
}
