const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
  link.addEventListener("click", () => {
    navLink.forEach(link => {
      link.classList.remove("page-active");
    });

    !link.classList.contains("page-active") &&
      link.classList.add("page-active");
  });
});
