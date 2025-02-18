document.addEventListener("DOMContentLoaded", function(){
    
    function createRatingSystem(ratingId, ratingText){
        const stars = document.querySelectorAll(`#${ratingId} .star`);
        let rating = 0;

        stars.forEach(star => {
            star.addEventListener("mouseover", function(){
                highlightStar(ratingId, this.getAttribute("data-value"));
            });
            star.addEventListener("mouseout", function(){
                highlightStar(ratingId, rating);
            });
            star.addEventListener("click", function(){
                rating = this.getAttribute("data-value");
                document.getElementById(ratingText).innerText = "Rating " + rating;
            });
        });
    }  

    function highlightStar(ratingId, rating) {
        const stars = document.querySelectorAll(`#${ratingId} .star`);
        stars.forEach(star => {
            star.classList.toggle("hovered", star.getAttribute("data-value") <= rating);
        });
    }

    createRatingSystem("htmlRating", "htmlRatingText");
    createRatingSystem("cssRating", "cssRatingText");
    createRatingSystem("jsRating", "jsRatingText");


    const fadeElements = document.querySelectorAll(".fade-in");

    function fadeInOnScroll() {
        fadeElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", fadeInOnScroll);
    fadeInOnScroll(); 

});


let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll(".slide");

    slides.forEach(slide => slide.style.display = "none"); 
    slideIndex++;

    if (slideIndex > slides.length) { slideIndex = 1; } 
    slides[slideIndex - 1].style.display = "block"; 
}

function changeSlide(n) {
    let slides = document.querySelectorAll(".slide");
    slides[slideIndex - 1].style.display = "none"; 
    slideIndex += n;

    if (slideIndex > slides.length) { slideIndex = 1; }  
    if (slideIndex < 1) { slideIndex = slides.length; }
    slides[slideIndex - 1].style.display = "block"; 
}

showSlides();