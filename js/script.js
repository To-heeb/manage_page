const btn = document.getElementById("menu-btn");
const nav = document.getElementById("menu");

console.log(nav)
btn.addEventListener('click', () => {
    btn.classList.toggle('open')
    nav.classList.toggle('flex')
    nav.classList.toggle('hidden')
})

let slideIndex = 1;
showSlides(slideIndex);

const dots = document.querySelectorAll(".dot");

console.log(dots)
var kounter = 1;
dots.forEach(element => {

    element.addEventListener('click', (e) => {
        //console.log(e.currentTarget.dataset.id)
        showSlides(e.currentTarget.dataset.id)
    })

    kounter++;
});

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) {slideIndex = 1}
    
    if (n < 1) {slideIndex = slides.length}
    //console.log(slideIndex)
    //console.log(n)
    for (i = 0; i < slides.length; i++) {
        if(slides[i].classList.contains('hidden')){
            continue
        }
        slides[i].classList.add('hidden'); 
    }
    for (i = 0; i < dots.length; i++) {
        if(dots[i].classList.contains('bg-brightRed')){
            dots[i].classList.remove('bg-brightRed')
        }
       ; 
    }
     //console.log(slides)
    slides[n-1].classList.remove('hidden');  
    dots[n-1].classList.add("bg-brightRed");
  }