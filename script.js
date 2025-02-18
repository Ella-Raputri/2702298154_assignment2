document.addEventListener("DOMContentLoaded", function () {
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



function reveal() {
    let finalContainer = document.querySelector(".final-container");
    let cover = document.querySelector(".cover");

    finalContainer.style.opacity = "1";
    cover.style.opacity = "0"; 
}