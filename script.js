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
//end sticky header scroll code

