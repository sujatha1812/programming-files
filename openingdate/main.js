let opennavclick = document.querySelector('.nav-slider');
let closenavclick = document.querySelector('.close-nav-slider');
let navslidersection = document.querySelector('.nav-slider-section');
let navlinks = document.querySelectorAll('.nav-links');

opennavclick.onclick = function(){
    navslidersection.classList.remove("closenav");
    navslidersection.classList.add("opennav");
}

closenavclick.onclick =function(){
    navslidersection.classList.remove("opennav");
    navslidersection.classList.add('closenav');
}

navlinks.forEach((link)=>{
    link.onclick = closenavslider;
});

function closenavslider(){
    navslidersection.classList.remove("opennav");
    navslidersection.classList.add('closenav');

}