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


function reveal() {
    let finalContainer = document.querySelector(".final-container");
    let cover = document.querySelector(".cover");

    finalContainer.style.opacity = "1";
    cover.style.opacity = "0"; 
}

