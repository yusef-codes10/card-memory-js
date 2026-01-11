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
    flipCard();
})

// the functions

function showGameContainer() {
    mainContainer.classList.toggle('hidden');
}

function loadCards() {
    cards.forEach(card => {
        const image = document.createElement('img');
        image.classList.add('dynamic-card');
        image.src = card.bg;
        image.alt = card.id;

        // store data on the element itself
        image.dataset.id = card.id;  // to search the exact img later
        image.dataset.flipped = 'false';   // to see if it's flipped or not

        gameContainer.appendChild(image);
    });
}

function flipCard() {
    // calling the regular load function

    // 1️⃣ make sure we clicked an image
    if (!e.target.classList.contains('dynamic-card')) return;

     // 2️⃣ find card data, which was stored on the dataset propery
     const card = cards.find(c => c.id === img.dataset.id);

    cards.forEach(card => {
        const image = document.createElement('img');
        image.classList.add('dynamic-card');
        image.src = card.img;
        image.alt = card.id;

        gameContainer.appendChild(image);
    });
}