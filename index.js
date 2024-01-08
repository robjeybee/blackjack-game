let firstCard = 1
let secondCard = 9
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isActivePlayer = true
let message = " "
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

let startGame = () => {
  renderGame()
}

let renderGame = () => {
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1]
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
  let card = 11
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}
  