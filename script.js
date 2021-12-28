//window on scroll
window.onscroll=function(){
    if(window.pageYOffset>500){
        document.getElementById('header').style.backgroundColor="rgba(0,0,0,0.96)"
    }
    else if(window.pageYOffset>100){
        document.getElementById('header').style.backgroundColor="rgba(0,0,0)"
    }
    else{
        document.getElementById('header').style.backgroundColor="transparent"
    }
}
 
 //Javacript for responsive navigation menu
 const menuBtn = document.querySelector(".menu-btn");
 const navigation = document.querySelector(".navigation");

 menuBtn.addEventListener("click", () => {
   menuBtn.classList.toggle("active");
   navigation.classList.toggle("active");
 });

 //Javacript for video slider navigation
 const btns = document.querySelectorAll(".nav-btn");
 const slides = document.querySelectorAll(".video-slide");
 const contents = document.querySelectorAll(".content");

 var sliderNav = function(manual){
   btns.forEach((btn) => {
     btn.classList.remove("active");
   });

   slides.forEach((slide) => {
     slide.classList.remove("active");
   });

   contents.forEach((content) => {
     content.classList.remove("active");
   });

   btns[manual].classList.add("active");
   slides[manual].classList.add("active");
   contents[manual].classList.add("active");
 }

 btns.forEach((btn, i) => {
   btn.addEventListener("click", () => {
     sliderNav(i);
   });
 });

// charecter
$(document).ready(function() {
    $('#autoWidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
  });

// contact us
function sendmail(){
    
  var name = $('#Name').val();
  var email = $('#Sender').val();
  var subject = $('#Subject').val();
  var message = $('#Message').val();

  // var body = $('#body').val();

  var Body='Name: '+name+'<br>Email: '+email+'<br>Subject: '+subject+'<br>Message: '+message;
  //console.log(name, phone, email, message);

  Email.send({
    SecureToken:"fbf31702-bb7f-4a4e-9c1c-4ccf17ee777f",
    To: 'shubham221chaurasia@gmail.com',
    From: "marvel221@gmail.com",
    Subject: "New message on contact from "+name,
    Body: Body
  }).then(
    message =>{
      //console.log (message);
      if(message=='OK'){
      alert('Your mail has been send. Thank you for connecting.');
      }
      else{
        console.error (message);
        alert('There is error at sending message. ')
        
      }

    }
  );



}