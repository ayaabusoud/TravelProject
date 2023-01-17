 const navbar = document.getElementById("navbar");
window.onscroll = (e) => {
 if (window.scrollY > 100) {
 navbar.classList.replace("navbartransparent", "navbarcolored");
 } else {
 navbar.classList.replace("navbarcolored", "navbartransparent");
 }};

