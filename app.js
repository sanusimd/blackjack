let player = {
  name: "Pack",
  chips: 145,
};

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let newCard = document.getElementById("newcard-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// Player
let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ":  $" + player.chips;

// Start Game Functionality begin here
function startGame() {
  isAlive = true;
  // Generate two random numbers
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  // Re-assign the cards and sum variables so that the game can start
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
}
// Create a function, getRandomCard()
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 1;
  } else {
    return randomNumber;
  }
}

// render Game Functionality begin here
function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }
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
  console.log("Start Button Click");
}

// New card Functionality
newCard.addEventListener("click", function () {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    // Push the card to the cards array
    cards.push(card);
    // Call startGame()
    renderGame();
  }
});
