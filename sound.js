// sound logic is here

const flipSound = new Audio('/sound/flip.mp3');

function playFlipSound() {
    stopFlipSound();
    flipSound.play();
}

function stopFlipSound() {
    flipSound.pause();
    flipSound.currentTime = 0;
}

export {playFlipSound}