


var hamburger= document.querySelector(".bx-menu").addEventListener('click', function(){
  this.classList.toggle('bx-x');
  document.querySelector(".navbar").classList.toggle("active");
});



let red = document.querySelector(".logo"); 
  red.classList.toggle('red');
  red.classList.toggle('red');
  red.classList.toggle('red');
  
  let orange = document.querySelector(".logo").addEventListener("click", function(){
     this.classList.toggle("orange");
    });

var typed = new Typed(".profession",{
  strings: ["Front-end Developer","Web Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 100,
  loop: true,
});