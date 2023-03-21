const playButton = document.getElementById("play-button")
const homeOverlay = document.getElementById("overlay-home")
const homeButton = document.querySelector(".home_button")

function toggleOverlay() {
    homeOverlay.classList.toggle("close-overlay")
    homeOverlay.classList.toggle("open-overlay")
}

playButton.addEventListener('click', toggleOverlay)

homeButton.addEventListener('click', toggleOverlay)