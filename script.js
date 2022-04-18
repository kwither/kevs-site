const h2 = document.createElement("h2");
h2.textContent = "About Sushi";
h2.setAttribute('id', 'about');

document.querySelector("section").appendChild(h2);


//This is for the header sticky scroll
window.onscroll = function() {scrollFunction()};

const header = document.getElementById("main-header");
const sticky = header.offsetTop;

function scrollFunction() {
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    }   else {
        header.classList.remove("sticky");
    }
}





//this is for auto slideshow in 3rd box
const autoSlide = 0;
carousel();

function carousel() {
  let i;
  let x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  autoSlide++;
  if (autoSlide > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 5000);
}