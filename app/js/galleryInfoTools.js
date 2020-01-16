const infoToolsBtn = document.querySelectorAll(".info__btn--tools");
const infoToolsCloseBtn = document.querySelectorAll(".tools__close");
const infoToolsContent = document.querySelectorAll(".info__tools");

const galleryWork = document.querySelectorAll(".gallery__work");

infoToolsBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    openInfoTools();
  });
});

infoToolsCloseBtn.forEach(btn => {
  btn.addEventListener("click", function() {
    closeInfoTools();
  });
});

galleryWork.forEach(work => {
  work.addEventListener("mouseleave", function() {
    closeInfoTools();
  });
});

function closeInfoTools() {
  infoToolsContent.forEach(content => {
    content.style.zIndex = "-1";
    content.style.opacity = "0";
  });
}

function openInfoTools() {
  infoToolsContent.forEach(content => {
    content.style.zIndex = "10";
    content.style.opacity = "1";
  });
}
