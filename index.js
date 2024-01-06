let firstCard = 1
let secondCard = 1

let sum = firstCard + secondCard

let hasBlackjack = false

let isActivePlayer = true

let message = " "


if (sum < 21) {
    message = "Call new card?"
} else if (sum === 21) {
    message = "Blackjack!"
    hasBlackjack = true
} else {
    message = "No win!"
    isActivePlayer = false
}

console.log(message)

