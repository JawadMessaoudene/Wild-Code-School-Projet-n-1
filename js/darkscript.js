//  --------   Home overlay   ---------------------------

const playButton = document.getElementById("play-button");
const homeOverlay = document.getElementById("overlay-home");
const homeButton = document.getElementById("home-button");

function toggleOverlay() {
    homeOverlay.classList.toggle("close-home-overlay");
    homeOverlay.classList.toggle("open-home-overlay");
}

playButton.addEventListener("click", toggleOverlay);

homeButton.addEventListener("click", toggleOverlay);

// Infos

const infoButton = document.getElementById("info-button");
const infoOverlay = document.getElementById("info-overlay");

const toggleInfos = () => {
    infoOverlay.classList.toggle("close-info-overlay");
    infoOverlay.classList.toggle("open-info-overlay");
};

infoButton.addEventListener("click", toggleInfos);

// --------------   Définition des variable + page par défaut    --------------------------------

const gameModeOne = document.getElementById("gm1");
const gameModeTwo = document.getElementById("gm2");
const gameModeThree = document.getElementById("gm3");
const body = document.querySelector("body");
const ecranConsigne = document.querySelector("#bubble");
const textConsigne = document.querySelector("#userText");
textConsigne.classList.add("text-consigne");
textConsigne.innerText = "Commence par sélectionner un mode de jeu :"; // constante a utiliser pour modifier le texte dans l'écran de consigne
function reset() {
    guessedNumber = 0;
}

// -----------    écran d'entrée des chiffres     ----------------------------------

// Calculator
const touches = [...document.querySelectorAll(".button")];
const listeKeycode = touches.map((touche) => touche.dataset.key);
const ecran = document.getElementById("screen-text");

document.addEventListener("keydown", (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener("click", (e) => {
    const valeur = e.target.dataset.key;
    calculer(valeur);
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case "8":
                ecran.textContent = "";
                break;
            case "13":
                const calcul = ecran.textContent;

                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                ecran.textContent += touche.innerHTML;
        }
    }
};

// ----------------------     Mode de jeu 1      -------------------------------------------------

gameModeOne.addEventListener("click", function () {
    textConsigne.innerText = "Devine à quel nombre je pense...";

    const checkButton = document.getElementById("kenter");

    const priceToFind = Math.floor(Math.random() * 100) + 1;

    console.log("Prix à trouver : ", priceToFind);

    //------------ ANSWERS  --------------

    let goodAnswer;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            goodAnswer = "Bravo, tu veux une médaille, hein ?!?";
            break;
        case 1:
            goodAnswer = "Tu te crois fort ?! C'était qu'un coup de chance !! Réesaaye !";
            break;
        case 2:
            goodAnswer = "Pas mal mais tu n'arriveras pas à réussir la prochaine";
            break;
    }

    let tooHigh;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            tooHigh = "Tu te prend pour qui ?! Redescend un peu là";
            break;
        case 1:
            tooHigh = "Abuse pas non plus !! C'est plus !";
            break;
        case 2:
            tooHigh = "C'est un peu trop à mon goût...";
            break;
        case 3:
            tooHigh = "Jamais tu trouveras en faite, sauf si tu vises plus bas.";
            break;
    }

    let tooLow;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            tooLow = "Gros naze, c'est plus que ça !!";
            break;
        case 1:
            tooLow = "Tu fais vraiment aucun effort... Augmente moi ça !!";
            break;
        case 2:
            tooLow = "T'es encore loin du compte, c'est plus !";
            break;
        case 3:
            tooLow = "Bon sang, tu peux faire mieux que ça ! Vise plus haut !";
            break;
    }
    //------------ /ANSWERS  --------------

    checkButton.addEventListener("click", () => {
        let guessedNumber = ecran.textContent;

        console.log(guessedNumber);
        if (guessedNumber == priceToFind) {
            textConsigne.innerText = goodAnswer;
        } else if (guessedNumber > priceToFind) {
            textConsigne.innerText = tooHigh;
        } else {
            textConsigne.innerText = tooLow;
        }

        reset();

        console.log(guessedNumber);
    });
});

// -----------------------------   Mode de jeu 2    ----------------------------------------------------

gameModeTwo.addEventListener("click", function () {
    chaine = "";
    const checkButton = document.getElementById("kenter");

    // Initialisation des variables
    let result2;
    let operator = "";

    // Selections des nombres
    let X1 = Math.floor(Math.random() * 10); // premier nombre aléatoire 0<X1<9 arrondi
    let X2 = Math.floor(Math.random() * 10); // second nombre aléatoire 0<X2<9

    // Operation en fonction du signe
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            result2 = X1 + X2;
            operator = "+";
            break;
        case 1:
            result2 = "" + X1 * X2;
            operator = "x";
            break;
    }

    //------------ ANSWERS  --------------

    let goodAnswer;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            goodAnswer = "Bravo, tu veux une médaille, hein ?!?";
            break;
        case 1:
            goodAnswer = "Tu te crois fort ?! C'était qu'un coup de chance !! Réesaaye !";
            break;
        case 2:
            goodAnswer = "Pas mal mais tu n'arrivera pas à réussir la prochaine";
            break;
    }

    let wrongAnswer;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            wrongAnswer = "PPPfffffff comment t'es nul !!";
            break;
        case 1:
            wrongAnswer = "Fais un effort, voyons !!!";
            break;
        case 2:
            wrongAnswer = "Non mais m@#$%e à la fin, concentre toi un peu";
            break;
        case 3:
            wrongAnswer = "Même ma petite soeur fait mieux...";
            break;
    }

    //------------ /ANSWERS  --------------
    const statement = `${X1}  ${operator}  ${X2}`;
    textConsigne.innerText = `Quel est le résultat du calcul suivant : ${statement} ?`;
    console.log(`Quel est le résultat du calcul suivant : ${statement} ?`);

    checkButton.addEventListener("click", () => {
        let guessedNumber2 = parseInt(ecran.textContent);

        console.log(guessedNumber2);
        if (
            guessedNumber2 === X1 + X2 ||
            guessedNumber2 === X1 * X2 ||
            guessedNumber2 === X1 - X2
        ) {
            textConsigne.innerText = goodAnswer;
            reset();
            console.log(guessedNumber2);
        } else {
            textConsigne.innerText = wrongAnswer;
            reset();
        }
    });
});

// -------------------------   Mode de jeu 3   ----------------------------------------------------------

gameModeThree.addEventListener("click", function () {
    chaine = "";
    const checkButton = document.getElementById("kenter");

    // Initialisation des variables
    let result2;
    let operator = "";

    // Selections des nombres
    let X1 = Math.floor(Math.random() * 100); // premier nombre aléatoire 0<X1<9 arrondi
    let X2 = Math.floor(Math.random() * 100); // second nombre aléatoire 0<X2<9

    // Operation en fonction du signe
    switch (Math.floor(Math.random() * 2)) {
        case 0:
            result2 = X1 + X2;
            operator = "+";
            break;
        case 1:
            result2 = "" + X1 * X2;
            operator = "x";
            break;
    }

    //------------ ANSWERS  --------------
    let goodAnswer;
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            goodAnswer = "Bravo, tu veux une médaille, hein ?!?";
            break;
        case 1:
            goodAnswer = "Tu te crois fort ?! C'était qu'un coup de chance !! Réesaaye !";
            break;
        case 2:
            goodAnswer = "Pas mal mais tu n'arrivera pas à réussir la prochaine";
            break;
    }

    let wrongAnswer;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            wrongAnswer = "PPPfffffff comment t'es nul !!";
            break;
        case 1:
            wrongAnswer = "Fais un effort, voyons !!!";
            break;
        case 2:
            wrongAnswer = "Non mais m@#$%e à la fin, concentre toi un peu";
            break;
        case 3:
            wrongAnswer = "Même ma petite soeur fait mieux...";
            break;
    }

    //------------ /ANSWERS  --------------

    const statement = `${X1}  ${operator}  ${X2}`;
    textConsigne.innerText = `Masterclass : Quel est le résultat du calcul suivant : ${statement} ?`;
    console.log(`Quel est le résultat du calcul suivant : ${statement} ?`);
    ///console.log(ecran.textContent);

    checkButton.addEventListener("click", () => {
        let guessedNumber2 = parseInt(ecran.textContent);

        console.log(guessedNumber2);
        if (
            guessedNumber2 === X1 + X2 ||
            guessedNumber2 === X1 * X2 ||
            guessedNumber2 === X1 - X2
        ) {
            textConsigne.innerText = goodAnswer;
            reset();
            console.log(guessedNumber2);
        } else {
            textConsigne.innerText = wrongAnswer;
            reset();
        }
    });
});

// -------------------------   Queue de la bulle   ----------------------------------------------------------

const bubbleTail = document.getElementById("tail");

// let bubbleTailPosition = (gamemode) => {
//     switch (gamemode) {
//         case (gameModeOne):
//             bubbleTail.style.left = 21 %;
//             break;
//         case (gameModeTwo):
//             bubbleTail.style.left = 43.5 %;
//             break;
//         case (gameModeThree):
//             bubbleTail.style.left = 66 %;
//             break;
//     }
// }

// gameModeThree.addEventListener('click', bubbleTailPosition(gameModeThree));

gameModeOne.addEventListener('click', () => {
    bubbleTail.style.left = "21%"
})

gameModeTwo.addEventListener('click', () => {
    bubbleTail.style.left = "43.5%"
})

gameModeThree.addEventListener('click', () => {
    bubbleTail.style.left = "66%"
})
