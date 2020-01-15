function toggleOverflow() {
  const pageBody = document.getElementById("body");
  let currentWidth = document.body.offsetWidth;

  if (currentPage === "trabalhos" && currentWidth < 1024) {
    pageBody.style.overflowY = "scroll";
  } else {
    pageBody.style.overflowY = "hidden";
  }
}
