let addReview = document.getElementsByClassName("submitReview");
let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let reviewMessage = document.getElementById("reviewMessage");
let section = document.getElementsByClassName("sec-3");

addReview[0].addEventListener("click",function(event){

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let date = new Date();

  section[0].childNodes[3].innerHTML += `
  <div class="col-2 ">
                        <div class="reviewImg">
                            <img class="tourImg" src="assets/images/person_1.jpg" alt="destination">
                        </div>
                    </div>
                    <div class="col-10">
                        <p class="title">${userName.value}</p>
                        <p class="sub-title">${months[date.getMonth()] + " " + date.getDay() + ", " + date.getFullYear() + " AT " + date.getHours() + ":" + date.getMinutes()}</p>
                        <p>${reviewMessage.value}</p>                                           
                        <button type="button" class="btn btn-light">Replay</button>
   </div>
  `

  event.preventDefault();
})