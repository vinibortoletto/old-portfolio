// Change nav-icon color on click
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(link => {
  // Listen for click
  link.addEventListener("click", () => {
    // Removes color from any active icon
    const navLink = document.querySelectorAll(".nav-link");
    navLink.forEach(link => {
      link.classList.remove("page-active");
    });

    // Add color to new active icon
    link.classList.add("page-active");
  });
});
