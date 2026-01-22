// sound logic is here

const flipSound = new Audio('/sound/flip.mp3');
const correctFlip = new Audio('/sound/win.mp3');
const gameOverSound = new Audio('sound/game-over.mp3');

function playFlipSound() {
    stopFlipSound();
    flipSound.play();
}

function stopFlipSound() {
    flipSound.pause();
    flipSound.currentTime = 0;
}

function playCorrectFlip() {
    stopCorrectFlip();
    correctFlip.play();
}

function stopCorrectFlip() {
    correctFlip.pause();
    correctFlip.currentTime = 0;
}

export {playFlipSound, playCorrectFlip}