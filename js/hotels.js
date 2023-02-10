let btn = document.getElementsByClassName("filterButton");
let days = document.getElementsByClassName("daysNumber");
let allHotels = Array.from(document.getElementsByClassName("menu-content"));
let pageOneDiv = document.getElementById("noResult");

//clear input
days[0].addEventListener("click", function(){
    days[0].value="";
})

//days filter
btn[0].addEventListener("click",function(){
        pageOneDiv.innerHTML ="";
        let userDays = days[0].value;
        let counter = 0;

        allHotels.forEach(element => {
       
        let divDays = element.childNodes[3]
        element.classList.remove("visible")
        element.classList.remove("notVisible")

        element.parentElement.classList.add("visible")
        element.parentElement.classList.replace("visible","notVisible")


        element.classList.replace("visible","notVisible")
        let cityName = element.lastElementChild.innerHTML;

        if(cityName.includes(JSON.parse(localStorage.getItem("city")))){
                if(userDays === "Number of days" || userDays === ""){
                    counter++;
                    element,parentElement.classList.replace("notVisible","visible")
                }
                 if( divDays.innerHTML.replace(/[^0-9\s]/gi, '').includes(userDays)){
                    counter++;
                    element.parentElement.classList.replace("notVisible","visible")
                 }
             
                }

    });

    if(counter == 0){
        pageOneDiv.innerHTML = `
        <div class="row">
        <div class="col-lg-9 col-md-12">
        <p class="result">Sorry, no results found.</p>
        <div class="sadEmoji">
        <img class="emoji" src="assets/images/sorry-no-results-found-removebg-preview.png" alt="">
        </div>
        </div>
        </div>`
        }

})