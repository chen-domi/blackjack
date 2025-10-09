// let firstCard = 10 // hardcoded value
// let secondCard = 4 // hardcoded value
let cards = [];
let card = 0;
let sum = 0;
let hasBlackJack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

function getRandomCard() {
    card = Math.floor(Math.random() * 10 + 1);
    cards.push(card);
}

function startGame() {
    getRandomCard();
    getRandomCard();
    renderGame();
}

function renderGame() {
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }

    sum = 0;  
    for (let i = 0; i < cards.length; i++) {
        sum += cards[i];
        sumEl.textContent = "Sum: " + sum;
    }

    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    getRandomCard();
    renderGame();
}
