const playButton = document.getElementById("play-button")
const homeOverlay = document.getElementById("overlay-home")
const lightmode = document.getElementById("lightmode")

function toggleOverlay() {
    homeOverlay.classList.toggle("close-overlay")
    homeOverlay.classList.toggle("open-overlay")
}

playButton.addEventListener('click', toggleOverlay)

lightmode.addEventListener('click', toggleOverlay)