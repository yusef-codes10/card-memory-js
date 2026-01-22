import { cards } from "./cards.js";
import {playFlipSound, playCorrectFlip, playGameOverSound} from './sound.js';

const startBtn = document.getElementById('startBtn');
const mainContainer = document.querySelector('.main-container');
const gameContainer = document.querySelector('.game-container');
const gameOverContainer = document.querySelector('.game-over');

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

     // 2️⃣ find card data, which was stored on the dataset propery
     const img = e.target;
     const card = cards.find(c => c.id === img.dataset.id);

    // 3️⃣ flip logic, card is data and img is UI. We have to understand that
    if (img.dataset.flipped === 'false') {
        // if two cards are flipped
        if (perventTwoFlips() === 2) return;
        img.src = card.img;
        img.dataset.flipped = 'true';
        if (checkTwoCards()) {
            playCorrectFlip();
            markcheckedCards();
            setTimeout(() => {
                clearMatchingCards();
            }, 1000);
            gameOver();
        } else {
            setTimeout(() => {
                resetCards();
            }, 2000);
        }
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
            if (attr === 'true' && el.dataset.matched !== 'true') {
                console.log('yes it\'s false');
                counter++;
            }
        }
    )
    return counter;
}

// check if two cards matches
function checkTwoCards() {
    // get all flipped cards
    const flippedCards = document.querySelectorAll(
        '.dynamic-card[data-flipped="true"]:not([data-matched="true"]'
    );

    // only compare when exactly two cards are flipped
    if (flippedCards.length !== 2) return false;
    
    // compare their dataset ids
    return flippedCards[0].dataset.id === flippedCards[1].dataset.id;
}

// mark checked cards
function markcheckedCards() {
     // get all flipped cards
    const flippedCards = document.querySelectorAll(
        '.dynamic-card[data-flipped="true"]'
    );
    // flag the two matchig cards
    flippedCards.forEach(
        el => {
            el.dataset.matched = 'true';
        }
    )
}

// clear the two matching cards
function clearMatchingCards() {
    const flippedCards = document.querySelectorAll(
        '.dynamic-card[data-matched="true"]'
    );
    flippedCards.forEach(
        el => {
            el.classList.add('matched');
        }
    )
}

// rest cards if they are not matching
function resetCards() {
    // look for open cards

    // get all flipped cards
    const flippedCards = document.querySelectorAll(
        '.dynamic-card[data-flipped="true"]:not([data-matched="true"]'
    );

    // use markCheckedCards to see 
    flippedCards.forEach(
        img => {
            const card = cards.find(c => c.id === img.dataset.id);

            img.src = card.bg;
            img.dataset.flipped = "false";
        }
    )
}

// game over function 
function gameOver() {
    // when winning play a sound track
    const cards = document.querySelectorAll('.dynamic-card');
    if([...cards].every(
        img => img.dataset.matched === 'true'
    )) {playGameOverSound()
        gameOverContainer.classList.toggle('hidden');
        gameOverContainer.classList.add('visible');
    };
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