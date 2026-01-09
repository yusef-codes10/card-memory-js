import { cards } from "./cards.js";

const startBtn = document.getElementById('startBtn');
console.log(startBtn);

startBtn.addEventListener('click', () => {
    console.log('btn has been clicked');
    console.log(cards);
})