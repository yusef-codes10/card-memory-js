// sound logic is here

const flipSound = new Audio('/sound/flip.mp3');



function playFlipSound() {
    flipSound.play();
}

export {flipSound, playFlipSound}