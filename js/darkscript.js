// ------ définition des variable + page par défaut ------------

const gameModeOne = document.getElementById("gm1");
const gameModeTwo = document.getElementById("gm2");
const gameModeThree = document.getElementById("gm3");
const body = document.querySelector("body");
const ecranConsigne = document.querySelector('#bubble')
const textConsigne = document.querySelector('#userText')
textConsigne.classList.add('text-consigne');
textConsigne.innerText = "Selectionne un mode de jeu"; // constante a utiliser pour modifier le texte dans l'écran de consigne



// ------   écran d'entrée des chiffres  --------

function activated(number) {
    if (number == 1 ){
        const bouton1 = document.getElementById("gm1");
        bouton1.classList.toggle("dark-mode");
        console.log("toto");
    } else if (number == 2 ) {
    const bouton2 = document.getElementById("gm2");
    bouton2.classList.toggle("dark-mode");
    console.log("tata");
} else {
    const bouton3 = document.getElementById("gm3");
    bouton3.classList.toggle("dark-mode");console.log("titi"); }
}

    // document.getElementById("gm2")
// --------------- Mode de jeu 1  ----------------------


gameModeOne.addEventListener('click', function () {
textConsigne.innerText = "Commence par entrer un nombre";



});
// const guessInput = document.getElementById("guess");
// const checkButton = document.getElementById("check");
// const messageElement = document.getElementById("message")

// const priceToFind = Math.floor(Math.random()*100)+1

// console.log("Prix à trouver : ", priceToFind)

// checkButton.addEventListener("click",()=>{
//     let guessedNumber = parseInt(guessInput.value);
//     //let guessedNumber = +guessInput.value;
//     if(guessedNumber === priceToFind){
//         messageElement.innerText = "Vous avez trouvé !"
//     } else if(guessedNumber > priceToFind){
//         messageElement.innerText = "Trop haut !"
//     }
//     else {
//         messageElement.innerText = "Trop bas !"
//     }
// })
// });



// --------------- Mode de jeu 2  ----------------------

gameModeTwo.addEventListener('click', function () {
textConsigne.innerText = "Quelle est le résultat du calcul suivant :";


});
