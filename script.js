var cards = document.getElementsByClassName("card");

for (var i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", function () {
        // Remove "active" class from all cards
        for (var j = 0; j < cards.length; j++) {
            cards[j].classList.remove("active");
        }
        // Add "active" class to the clicked card
        this.classList.add("active");
    });
}