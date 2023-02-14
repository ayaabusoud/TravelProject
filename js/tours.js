let btn = document.getElementsByClassName("filterButton");
let days = document.getElementsByClassName("daysNumber");
let price = document.getElementsByClassName("priceLimit");
let allTours = Array.from(document.getElementsByClassName("menu-content"));
let prices = Array.from(document.getElementsByClassName("price"));
let pageOneDiv = document.getElementById("noResult");

//clear input
days[0].addEventListener("click", function(){
    days[0].value="";
})

//days and price filter
btn[0].addEventListener("click",function(event){
        pageOneDiv.innerHTML ="";
        let counter = 0;
        let userPrice = price[0].value;
        let userDays = days[0].value;
        if (userPrice === "Price limit" ){
          userPrice = 100000;  
        } 
        console.log(userDays)


        allTours.forEach(element => {
        let divPrice = element.childNodes[1].childNodes[3];
        let divDays = element.childNodes[3]
        element.classList.remove("visible")
        element.classList.remove("notVisible")

        element.parentElement.classList.add("visible")
        element.parentElement.classList.replace("visible","notVisible")


        element.classList.replace("visible","notVisible")
        let cityName = element.lastElementChild.innerHTML;

        if(cityName.includes(JSON.parse(localStorage.getItem("city")))){
            if(divPrice.innerHTML.replace(/[^a-z0-9\s]/gi, '') <= userPrice){
                if(userDays === "Number of days" || userDays === ""){
                    counter ++;
                    element.parentElement.classList.replace("notVisible","visible")
                }
                 if( JSON.parse(divDays.innerHTML.replace(/[^0-9\s]/gi, '')) ==userDays){
                    counter ++;
                    element.parentElement.classList.replace("notVisible","visible")
                 }
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
    event.preventDefault();
})
