import { cards } from "./cards.js";

const startBtn = document.getElementById('startBtn');
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');

startBtn.addEventListener('click', () => {
    showGameContainer();
})

// the functions

function showGameContainer() {
    mainContainer.classList.toggle('hidden');
}

function loadCards() {
    cards.array.forEach(card => {
        
    });
}