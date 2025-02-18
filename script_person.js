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

});