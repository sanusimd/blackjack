let firstCard = 11;
let secondCard = 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let newCard = document.getElementById("newcard-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Start Game Functionality begin here
function startGame() {
  renderGame();
}

// render Game Functionality begin here
function renderGame() {
  cardsEl.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
  console.log("Start Button Click");
}

// New card Functionality
newCard.addEventListener("click", function () {
  console.log("Draw the new card ");
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = 1;

  // 2. Add the new card to the sum variable
  console.log(sum);
  sum += card;

  // 3. Call startGame()
  renderGame();
});
