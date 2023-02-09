 //scroll effect
 AOS.init();

 let reservationBtn = document.getElementById("reservation");

 reservationBtn.addEventListener("click", function(event){
    Swal.fire({
       icon: 'success',
       title: 'Your reservation has been added successfully',
       showConfirmButton: false,
       timer: 1400
     })   
     event.preventDefault();
   });
   