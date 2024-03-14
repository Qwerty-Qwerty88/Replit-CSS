const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  if (hamburger.innerText == "☰") {
    hamburger.innerText = "✕";
  }

  else if (hamburger.innerText == "✕") {
    hamburger.innerText = "☰";
  }
}

navAlert = document.getElementById('nav-alert');
navAlertDelete = document.getElementById('nav-alert-delete');

navAlertDelete.addEventListener("click", deleteNavAlert);

function deleteNavAlert() {
  navAlert.remove();
}