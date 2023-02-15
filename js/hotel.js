let bookRoom = Array.from(document.getElementsByClassName("bookRoom"));


bookRoom.forEach(element => {
    element.addEventListener("click",function(event){
        let roomImg = element.parentElement.parentElement.firstElementChild.firstElementChild;
        roomImg.innerHTML += `<div class="overlayRoom"><p class="overlayText">Booked</p></div>`
        element.remove();

    })
});