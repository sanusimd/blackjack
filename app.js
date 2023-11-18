let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let newCard = document.getElementById("newcard-btn");
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

// console.log(cards);

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
// Create a function, getRandomCard(), that always returns the number 5
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
  // cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1];
  cardsEl.textContent = "Cards: ";
  // Create a for loop that renders out all the cards instead of just two
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
  // 1. Create a card variable, and hard code its value to a number (2-11)
  let card = getRandomCard();

  // 2. Add the new card to the sum variable
  console.log(sum);
  sum += card;
  // Push the card to the cards array
  cards.push(card);
  console.log(cards);
  // 3. Call startGame()
  renderGame();
});
