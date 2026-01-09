import { cards } from "./cards.js";

const startBtn = document.getElementById('startBtn');
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');

startBtn.addEventListener('click', () => {
    showGameContainer();
    loadCards();
    loadCards();
})

// the functions

function showGameContainer() {
    mainContainer.classList.toggle('hidden');
}

function loadCards() {
    cards.forEach(card => {
        const image = document.createElement('img');
        image.src = card.img;
        image.alt = card.id;

        gameContainer.appendChild(image);
    });
}