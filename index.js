let cards = []
let sum = 0
let hasBlackjack = false
let isActivePlayer = false
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
  let randomCardNumber = Math.floor(Math.random() * 13 + 1)
  if (randomCardNumber === 1) {
    return 11;
  } else if (randomCardNumber >= 11 && randomCardNumber <= 13) {
    return 10;
  } else {
    return randomCardNumber;
  }
}

function startGame() {
  isActivePlayer = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame();
};

let renderGame = () => {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
    console.log(cards[i]);
  }

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
};

let newCard = () => {
  let card = getRandomCard();
  sum += card;
  cards.push(card);
  renderGame();
};
