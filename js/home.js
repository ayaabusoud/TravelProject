//change navbar when scroll
const navbar = document.getElementById("navbar");
window.onscroll = (e) => {
 if (window.scrollY > 100) {
 navbar.classList.replace("navbartransparent", "navbarcolored");
 } else {
 navbar.classList.replace("navbarcolored", "navbartransparent");
 }};

 //scroll effect
 AOS.init();
 
//city filter
let cityFilter = document.getElementById("cityFilter");
let filterBtn = document.getElementById("filterBtn");
let cities = Array.from(document.getElementsByClassName("menu-content"));

let filterCity = () =>{
    
    localStorage.setItem("city", JSON.stringify(cityFilter.value))
    cities.forEach(element => {
        element.classList.replace("visible","notVisible")
        let cityName = element.lastElementChild.innerHTML;
        let city = cityFilter.value;
        if(city === "Where would you like to go?" || city === "unknown"){
            city = "Gurtnellen";
        }
        if(cityName.includes(city)){
            element.classList.replace("notVisible","visible")
        }
    });
}

let filterOnLoad = () =>{
    cities.forEach(element => {
        element.classList.replace("visible","notVisible")
        let cityName = element.lastElementChild.innerHTML;
        let city = JSON.parse(localStorage.getItem("city"));
        if(city === "Where would you like to go?" || city === "unknown"){
            city = "Gurtnellen";
        }
        if(cityName.includes(city)){
            element.classList.replace("notVisible","visible")
        }
    });
}

filterBtn.addEventListener("click", filterCity);
document.addEventListener("DOMContentLoaded", filterOnLoad);

//send message
let messageBtn = document.getElementById("sendMessage");
messageBtn.addEventListener("click", function(event){
 Swal.fire({
    icon: 'success',
    title: 'Your message has been sent',
    showConfirmButton: false,
    timer: 1400
  })   
  event.preventDefault();
});

