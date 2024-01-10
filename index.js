let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isActivePlayer = true
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function getRandomCard() {
  return Math.floor(Math.random() * 10);
}


let startGame = () => {
  renderGame()
}

let renderGame = () => {
  cardsEl.textContent = "Cards: "
 for (let i = 0; i < cards.length; i++) {
   cardsEl.textContent += cards[i] + " "
   console.log(cards[i])
  }

  sumEl.textContent = "Sum: " + sum
    
  if (sum < 21) {
    message = "Call new card?"
  } else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
  } else {
    message = "No win!"
    isActivePlayer = false
  }
  messageEl.textContent = message
};

let newCard = () => {
  let card = getRandomCard()
  sum += card
  cards.push(card)
  renderGame()
}