// Home

const playButton = document.getElementById("play-button")
const homeOverlay = document.getElementById("overlay-home")
const homeButton = document.getElementById("home-button")

function toggleOverlay() {
    homeOverlay.classList.toggle("close-home-overlay")
    homeOverlay.classList.toggle("open-home-overlay")
}

playButton.addEventListener('click', toggleOverlay);

homeButton.addEventListener('click', toggleOverlay);

// Infos

const infoButton = document.getElementById("info-button");
// const infoButtonSrc = document.getElementById("info-button").src;
const infoOverlay = document.getElementById("info-overlay");

const toggleInfos = () => {
    infoOverlay.classList.toggle("close-info-overlay");
    infoOverlay.classList.toggle("open-info-overlay");
}

// const toggle = false;

// function toggleImg() {
//     if (toggle === false) {
//         document.getElementById("info-button").src = "./assets/info_button_light.svg";
//     }
//     else {
//         document.getElementById("info-button").src = "./assets/info_button_darkmode.svg";
//     }
//     toggle = !toggle;
// }

infoButton.addEventListener('click', toggleInfos);
// infoButton.addEventListener('click', toggleImg);

// Gamemodes

const bubbleTail = document.getElementById("tail");
const gameMode1 = document.getElementById("gm1");
const gameMode2 = document.getElementById("gm2");
const gameMode3 = document.getElementById("gm3");

const tailPosition = (e) => {
    let idButton = e.target;
    console.log(idButton);
    //     switch (gameMode) {
    //         case gameMode1:
    //     }
}
