//type filter
let btn = document.getElementsByClassName("filterButton");
let allRestaurants = Array.from(document.getElementsByClassName("menu-content"));
let resType = document.getElementById("resType");
let pageOneDiv = document.getElementById("noResult");


btn[0].addEventListener("click",function(event){
    let userResType = resType.value
    pageOneDiv.innerHTML ="";
    let counter = 0;

    allRestaurants.forEach(element => {
    
        element.classList.remove("visible")
        element.classList.remove("notVisible")

        element.parentElement.classList.add("visible")
        element.parentElement.classList.replace("visible","notVisible")

        let cityNameAndType = element.lastElementChild.innerHTML;

        if(cityNameAndType.includes(JSON.parse(localStorage.getItem("city")))){
                if(userResType === "Restaurant type" ||  userResType === ""){
                    counter++;
                    element.parentElement.classList.replace("notVisible","visible")
                }
                 if( cityNameAndType.includes(userResType)){
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

      event.preventDefault();
})