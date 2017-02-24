

var yourAudio = document.getElementById('yourAudio'),
    ctrl = document.getElementById('audioControl'),
    playButton = document.getElementById('play'),
    pauseButton = document.getElementById('pause');

function toggleButton() {
    if (playButton.style.display === 'none') {
        playButton.style.display = 'block';
        pauseButton.style.display = 'none';
    } else {
        playButton.style.display = 'none';
        pauseButton.style.display = 'block';
    }
}

ctrl.onclick = function () {

    if (yourAudio.paused) {
        yourAudio.play();
    } else {
        yourAudio.pause();
    }
    
    toggleButton();

    // Prevent Default Action
    return false;
};

