//image slides

const slides = document.querySelectorAll(".slides img");
let slideindex = 0;
let intervalid = null;

//initalizeSlider();
document.addEventListener("DOMContentLoaded", initalizeSlider);
function initalizeSlider(){

    if(slides.length > 0){
        slides[slideindex].classList.add("displaySlide");
        console.log(slideindex);
        intervalid = setInterval(nextSlide, 5000);
        //console.log(intervalid);
    }
 
}

function showslide(index){
    if(index >= slides.length){
        slideindex = 0;
    }
    else if(index<0){
        
        slideindex=slides.length -1;
    }


    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideindex].classList.add("displaySlide");
    console.log(slideindex);

}

function prevSlide(){
    slideindex--;
    showslide(slideindex);
}

function nextSlide(){
slideindex++;
showslide(slideindex);
}