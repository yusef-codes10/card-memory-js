import { cards } from "./cards.js";
import {playFlipSound} from './sound.js';

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
    flipCard(e);
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

function flipCard(e) {
    // calling the regular load function

    // 1️⃣ make sure we clicked an image
    if (!e.target.classList.contains('dynamic-card')) return;

    // if two cards are flipped
    if (perventTwoFlips === 2) return;

     // 2️⃣ find card data, which was stored on the dataset propery
     const img = e.target;
     const card = cards.find(c => c.id === img.dataset.id);

    // 3️⃣ flip logic, card is data and img is UI. We have to understand that
    if (img.dataset.flipped === 'false') {
        img.src = card.img;
        img.dataset.flipped = 'true';
    } else {
        img.src = card.bg;
        img.dataset.flipped = 'false';
    }
    playFlipSound();
}

// pervent more than two cards to be flipped at a time
function perventTwoFlips() {
    // using the dataset 

    // first we have to have a Nodelist
    const imagesList = document.querySelectorAll('.dynamic-card');
    let counter = 0;
    imagesList.forEach(
        el => {
            const attr = el.getAttribute('data-flipped');
            if (attr === 'true') {
                console.log('yes it\'s false');
                counter++;
            }

        }
    )
    return counter;
}

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    perventTwoFlips();
    // Add your custom logic here (e.g., close a modal, hide a popup)
  }
});   



// TODO 1- flip two cards only at a time
// TODO 2- compare ids of the two flipped cards
// TODO 3- remove matching cards, or replace them