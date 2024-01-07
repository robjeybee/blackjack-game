let firstCard = 1;
let secondCard = 19;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isActivePlayer = true;
let message = " ";
let startEl = document.getElementById("start-game-el");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el")
let newCard = document.getElementById("new-card")

startEl.addEventListener("click", () => {
    cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Call new card?";
  } else if (sum === 21) {
    message = "Blackjack!";
    hasBlackjack = true;
  } else {
    message = "No win!";
    isActivePlayer = false;
  }
  messageEl.textContent = message;
});

newCard.addEventListener("click", () => {
    console.log("Drawing a new card from the deck!")
})
