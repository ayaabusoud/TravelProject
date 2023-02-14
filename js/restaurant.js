 //scroll effect
 AOS.init();

 let reservationBtn = document.getElementById("reservation");

 reservationBtn.addEventListener("click", function(event){

  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2500,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
  Toast.fire({
    icon: 'success',
    title: 'Your reservation has been added successfully'
  })

     event.preventDefault();
   });
   