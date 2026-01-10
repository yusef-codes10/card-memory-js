import { cards } from "./cards.js";

const startBtn = document.getElementById('startBtn');
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');

startBtn.addEventListener('click', () => {
    showGameContainer();
    loadCards();
    loadCards();
})

// using event delegation for the container
gameContainer.addEventListener('click', e => {
    console.log(e.target);
})

// the functions

function showGameContainer() {
    mainContainer.classList.toggle('hidden');
}

function loadCards() {
    cards.forEach(card => {
        const image = document.createElement('img');
        image.src = card.bg;
        image.alt = card.id;

        gameContainer.appendChild(image);
    });
}

function flipCard() {
    // calling the regular load function
}