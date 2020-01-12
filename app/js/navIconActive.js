const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(link => {
      link.classList.contains("page-active") &&
        link.classList.remove("page-active");
    });

    !link.classList.contains("page-active") &&
      link.classList.add("page-active");
  });
});
