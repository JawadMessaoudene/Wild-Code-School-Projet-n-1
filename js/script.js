const playButton = document.getElementById("play-button");
const homeOverlay = document.getElementById("overlay-home");
const lightmode = document.getElementById("lightmode");

// playButton.addEventListener('click', () => {
//     homeOverlay.classList.toggle("close-overlay");
// })

// function openOverlay() {
//     homeOverlay.style.display = "flex";
// }

playButton.addEventListener('click', function closeOverlay() {
    homeOverlay.style.animation = "closeOverlay 1s ease-out"
});

lightmode.addEventListener('click', openOverlay)
