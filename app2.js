let cards = document.querySelectorAll(".deck");
let flipped = false;
let firstCard, secondCard;
let i = 0;
let h1 = document.querySelector("h1");

// Looping through the cards
cards.forEach(card => card.addEventListener("click", function matched(){
    card.classList.add("flip");
    
    // Getting the first card
    if(!flipped){
        flipped = true;
        firstCard = this;
        firstCard.classList.add("selected");
        firstCard.classList.remove("border");
        if(firstCard.firstElementChild.classList.contains("image")){
            firstCard.firstElementChild.classList.add("image-display");
            firstCard.firstElementChild.classList.remove("image");
        };
        
        // Getting the second card
    }else{
        flipped = false;
        secondCard = this;
        secondCard.classList.add("selected");
        secondCard.classList.remove("border");
        secondCard.style.display = "block";
        if(secondCard.firstElementChild.classList.contains("image")){
            secondCard.firstElementChild.classList.add("image-display");
            secondCard.firstElementChild.classList.remove("image");
        };

        // Matching the datasets
        if(firstCard.dataset.img === secondCard.dataset.img){
            console.log("Matched");
            firstCard.removeEventListener("click", matched);
            secondCard.removeEventListener("click", matched);
            i++
            h1.textContent = "Match";
            if(i === 3){
                h1.textContent = "Winner";
            }
        }else{
            h1.textContent = "Try Again";
            setTimeout(() => {
                // First Card
                firstCard.classList.add("border");
                firstCard.classList.remove("selected");
                firstCard.firstElementChild.classList.add("image");
                firstCard.classList.remove("flip");
                firstCard.firstElementChild.classList.remove("image-display");
                firstCard.lastElementChild.style.display = "block";

                // Second Card
                secondCard.classList.add("border");
                secondCard.classList.remove("selected");
                secondCard.firstElementChild.classList.add("image");
                secondCard.classList.remove("flip");
                secondCard.firstElementChild.classList.remove("image-display");
                secondCard.lastElementChild.style.display = "block";
            }, 1500);
        }
    }
}));