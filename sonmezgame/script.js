const menu = document.getElementById("menu");
const hamburger = document.getElementById("hamburger");

function checkScreenSize() {
  if (window.innerWidth < 768) { 
    menu.style.display = "none";
    hamburger.style.display = "block";
  } else {
    menu.style.display = "block";
    hamburger.style.display = "none";
  }
}

window.addEventListener("resize", checkScreenSize); 
checkScreenSize(); 


