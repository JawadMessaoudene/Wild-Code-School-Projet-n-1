const playButton = document.getElementById("play-button")
const homeOverlay = document.getElementById("overlay-home")
const homeButton = document.querySelector(".home_button")

function toggleOverlay() {
    homeOverlay.classList.toggle("close-overlay")
    homeOverlay.classList.toggle("open-overlay")
}

playButton.addEventListener('click', toggleOverlay);

homeButton.addEventListener('click', toggleOverlay);

//----------------------------------------------------------

// DOM
const touches = document.querySelectorAll('.button');
const listeKeycode = touches.map(touche => touche.dataset.key);
const ecran = document.querySelector('.screen');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur)

})

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur)

})

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = "";
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul;
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
}
