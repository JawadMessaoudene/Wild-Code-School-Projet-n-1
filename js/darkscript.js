//  --------   Home overlay   ---------------------------
const playButton = document.getElementById("play-button")
const homeOverlay = document.getElementById("overlay-home")
const homeButton = document.getElementById("home-button")

function toggleOverlay() {
    homeOverlay.classList.toggle("close-overlay")
    homeOverlay.classList.toggle("open-overlay")
}

//playButton.addEventListener('click', toggleOverlay);

homeButton.addEventListener('click', toggleOverlay);


// --------------   Définition des variable + page par défaut    --------------------------------

const gameModeOne = document.getElementById("gm1");
const gameModeTwo = document.getElementById("gm2");
const gameModeThree = document.getElementById("gm3");
const body = document.querySelector("body");
const ecranConsigne = document.querySelector("#bubble");
const textConsigne = document.querySelector("#userText");
textConsigne.classList.add("text-consigne");
textConsigne.innerText = "Selectionne un mode de jeu"; // constante a utiliser pour modifier le texte dans l'écran de consigne
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
  textConsigne.innerText = "Commence par entrer un nombre";

  const checkButton = document.getElementById("kenter");

  const priceToFind = Math.floor(Math.random() * 100) + 1;

  console.log("Prix à trouver : ", priceToFind);

  checkButton.addEventListener("click", () => {
    let guessedNumber = ecran.textContent;

    console.log(guessedNumber);
    if (guessedNumber == priceToFind) {
      textConsigne.innerText =
        "Vous avez trouvé ! Cliquez sur le Bouton 1 pour relancer une partie";
    } else if (guessedNumber > priceToFind) {
      textConsigne.innerText = "Trop haut !";
    } else {
      textConsigne.innerText = "Trop bas !";
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

  const statement = `${X1}  ${operator}  ${X2}`;
  textConsigne.innerText = `Quelle est le résultat du calcul suivant : ${statement} ?`;
  console.log(`Quelle est le résultat du calcul suivant : ${statement} ?`);
  ///console.log(ecran.textContent);

  checkButton.addEventListener("click", () => {
    let guessedNumber2 = parseInt(ecran.textContent);

    console.log(guessedNumber2);
    if (
      guessedNumber2 === X1 + X2 ||
      guessedNumber2 === X1 * X2 ||
      guessedNumber2 === X1 - X2
    ) {
      textConsigne.innerText = `Bravo !! le résultat de l'opération  (${statement}) était bien  ${guessedNumber2}`;
      reset();
      console.log(guessedNumber2);
    } else {
      textConsigne.innerText = `Mauvaise réponse ! Réessaye : ${statement}`;
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

  const statement = `${X1}  ${operator}  ${X2}`;
  textConsigne.innerText = `Masterclass : Quelle est le résultat du calcul suivant : ${statement} ?`;
  console.log(`Quelle est le résultat du calcul suivant : ${statement} ?`);
  ///console.log(ecran.textContent);

  checkButton.addEventListener("click", () => {
    let guessedNumber2 = parseInt(ecran.textContent);

    console.log(guessedNumber2);
    if (
      guessedNumber2 === X1 + X2 ||
      guessedNumber2 === X1 * X2 ||
      guessedNumber2 === X1 - X2
    ) {
      textConsigne.innerText = "Bonne réponse";
      reset();
      console.log(guessedNumber2);
    } else {
      textConsigne.innerText = `Mauvaise réponse ! Réessaye : ${statement}`;
      reset();
    }
  });
});
