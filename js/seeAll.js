//city filter
let cities = Array.from(document.getElementsByClassName("menu-content"));

 let filterSeeAll = () =>{
    cities.forEach(element => {
        element.classList.replace("visible","notVisible")
        let cityName = element.lastElementChild.innerHTML;
        if(cityName.includes(JSON.parse(localStorage.getItem("city")))){
            element.classList.replace("notVisible","visible")
        }
    });
}

document.addEventListener("DOMContentLoaded", filterSeeAll);

//pages
let pageOne = document.getElementById("pageOne");
let pageTwo = document.getElementById("pageTwo");

pageOne.addEventListener("click", function(){
    pageTwo.classList.remove("activeBtn");
    pageOne.classList.add("activeBtn");
})

pageTwo.addEventListener("click", function(){
    pageOne.classList.remove("activeBtn");
    pageTwo.classList.add("activeBtn");
})

