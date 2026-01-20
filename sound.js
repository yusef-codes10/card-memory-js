// sound logic is here

const flipSound = new Audio('/sound/flip.mp3');
const correctFlip = new Audio('/sound/win.mp3');

function playFlipSound() {
    stopFlipSound();
    flipSound.play();
}

function stopFlipSound() {
    flipSound.pause();
    flipSound.currentTime = 0;
}

function playCorrectFlip(params) {
    correctFlip.play();
}

export {playFlipSound, playCorrectFlip}