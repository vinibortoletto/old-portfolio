const homeSection=document.getElementById("home"),trabalhosSection=document.getElementById("trabalhos"),contatoSection=document.getElementById("contato"),navbar=document.getElementById("nav");function navbarAnimation(){navbar.classList.add("navbar-animation")}function homeAnimation(){trabalhosPage.classList.contains("trabalhos-animation")&&trabalhosPage.classList.remove("trabalhos-animation"),contatoPage.classList.contains("contato-animation")&&contatoPage.classList.remove("contato-animation"),setTimeout(()=>{!homePage.classList.contains("home-animation")&&homePage.classList.add("home-animation")},400)}function trabalhosAnimation(){homePage.classList.contains("home-animation")&&homePage.classList.remove("home-animation"),contatoPage.classList.contains("contato-animation")&&contatoPage.classList.remove("contato-animation"),setTimeout(()=>{!trabalhosPage.classList.contains("trabalhos-animation")&&trabalhosPage.classList.add("trabalhos-animation")},400)}function contatoAnimation(){homePage.classList.contains("home-animation")&&homePage.classList.remove("home-animation"),trabalhosPage.classList.contains("trabalhos-animation")&&trabalhosPage.classList.remove("trabalhos-animation"),setTimeout(()=>{!contatoPage.classList.contains("contato-animation")&&contatoPage.classList.add("contato-animation")},400)}const infoToolsBtn=document.querySelectorAll(".info__btn--tools"),infoToolsCloseBtn=document.querySelectorAll(".tools__close"),infoToolsContent=document.querySelectorAll(".info__tools"),galleryWork=document.querySelectorAll(".gallery__work");function closeInfoTools(){infoToolsContent.forEach(content=>{content.style.zIndex="-1",content.style.opacity="0"})}function openInfoTools(){infoToolsContent.forEach(content=>{content.style.zIndex="10",content.style.opacity="1"})}infoToolsBtn.forEach(btn=>{btn.addEventListener("click",(function(){openInfoTools()}))}),infoToolsCloseBtn.forEach(btn=>{btn.addEventListener("click",(function(){closeInfoTools()}))}),galleryWork.forEach(work=>{work.addEventListener("mouseleave",(function(){closeInfoTools()}))});const navLinks=document.querySelectorAll(".nav__link");function pageActive(pageActive){navLinks.forEach(link=>{link.classList.contains("page-active")&&link.classList.remove("page-active")}),pageActive.classList.add("page-active")}const homeBtn=document.getElementById("home__btn"),trabalhosBtn=document.getElementById("trabalhos__btn"),contatoBtn=document.getElementById("contato__btn"),homePage=document.getElementById("home"),trabalhosPage=document.getElementById("trabalhos"),contatoPage=document.getElementById("contato"),title=document.getElementById("title__primary");let currentPage="";function scrollTop(){window.scrollTo(0,0)}window.onload=()=>{navbarAnimation(),currentPage="home",homeAnimation(),pageActive(homeBtn)},window.onresize=()=>{toggleOverflow()},homeBtn.addEventListener("click",(function(){currentPage="home",homeAnimation(),pageActive(homeBtn),toggleOverflow(),scrollTop()})),trabalhosBtn.addEventListener("click",(function(){currentPage="trabalhos",trabalhosAnimation(),pageActive(trabalhosBtn),toggleOverflow(),scrollTop()})),contatoBtn.addEventListener("click",(function(){currentPage="contato",contatoAnimation(),pageActive(contatoBtn),toggleOverflow(),scrollTop()}));const emailBtn=document.getElementById("spheres__btn--email"),githubBtn=document.getElementById("spheres__btn--github"),phoneBtn=document.getElementById("spheres__btn--phone");function copyTextPhone(){const textPhone=document.getElementById("text-phone"),textMsg=document.getElementById("spheres__copied--phone");textPhone.select(),document.execCommand("copy"),textMsg.classList.toggle("copied-msg"),setTimeout(()=>{textMsg.classList.toggle("copied-msg")},2e3)}function copyTextEmail(){const textEmail=document.getElementById("text-email"),textMsg=document.getElementById("spheres__copied--email");textEmail.select(),document.execCommand("copy"),textMsg.classList.toggle("copied-msg"),setTimeout(()=>{textMsg.classList.toggle("copied-msg")},2e3)}function toggleOverflow(){const pageBody=document.getElementById("body");let currentWidth=document.body.offsetWidth;pageBody.style.overflowY="trabalhos"===currentPage&&currentWidth<1024?"scroll":"hidden"}emailBtn.addEventListener("click",(function(){const emailLine=document.getElementById("spheres__line--email");emailBtn.style.pointerEvents="none",emailLine.classList.add("sphere-clicked"),copyTextEmail(),setTimeout(()=>{emailLine.style.display="none",emailLine.classList.remove("sphere-clicked"),setTimeout(()=>{emailBtn.style.pointerEvents="all",emailLine.style.display="block"},400)},400)})),githubBtn.addEventListener("click",(function(){const githubLine=document.getElementById("spheres__line--github");githubLine.classList.add("sphere-clicked"),setTimeout(()=>{githubLine.style.display="none",githubLine.classList.remove("sphere-clicked"),setTimeout(()=>{githubLine.style.display="block"},400)},400)})),phoneBtn.addEventListener("click",(function(){const phoneLine=document.getElementById("spheres__line--phone");phoneBtn.style.pointerEvents="none",phoneLine.classList.add("sphere-clicked"),copyTextPhone(),setTimeout(()=>{phoneLine.style.display="none",phoneLine.classList.remove("sphere-clicked"),setTimeout(()=>{phoneBtn.style.pointerEvents="all",phoneLine.style.display="block"},400)},400)}));