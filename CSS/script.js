document.addEventListener("DOMContentLoaded", function() {
    var menuBox = document.getElementById("menuBox");

    menuBox.addEventListener("click", function() {
        menuBox.classList.toggle("expanded");
    });
});

const card=
document.getElementById("card")
card.addEventListener("click",() =>{
card.classList.toggle("active")
})


const slider = document.getElementById("slider");
const btnHome = document.getElementById("btnHome");
const btnMe = document.getElementById("btnMe");
const btnExperience=document.getElementById("btnExperience")

btnMe.addEventListener("click", e => {
    e.preventDefault();

    // Si ya estamos en ME, no hacemos nada
    if (slider.classList.contains("me")) return;

    slider.classList.add("me");
    slider.classList.remove("home1");
    slider.classList.remove("state-experience");
});

btnHome.addEventListener("click", e => {
    e.preventDefault();

    // Si ya estamos en HOME, no hacemos nada
    if (slider.classList.contains("home1")) return;

    slider.classList.add("home1");
    slider.classList.remove("me");
    slider.classList.remove("state-experience");
});

btnExperience.addEventListener("click", e => {
    e.preventDefault();


    if (slider.classList.contains("state-experience")) return;

    slider.classList.add("state-experience");
    slider.classList.remove("me");
    slider.classList.remove("home1");
});
   



