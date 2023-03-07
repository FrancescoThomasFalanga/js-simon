/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.
*/




// campo per visualizzare tutti i numeri random generati
let showRandomNumber = document.getElementById("show-random-number");

let showResultButtonEl = document.getElementById("show-result-button");

// creo array che conterrà i numeri random
let haveIt = [];
// secondi prima che i numeri despawnino
let secondsLeft = 10;


// mostra i numeri casuali in PAGINA
showNumbers();


// dopo un countdown di 10 secondi elimina i numeri in PAGINA
const countdown = setInterval(

    () => {

        if (secondsLeft <= 0) clearInterval(countdown);
        showRandomNumber.value = secondsLeft;
        showRandomNumber.textContent = "";
        secondsLeft -= 1;

    }, 
10000)


showResultButtonEl.addEventListener("click", function() {

    // variabile inizializzata per scrivere il risultato in pagina
    let resultEl = document.getElementById("result");

    // variabili che vanno ad individuare all'interno del documento i numeri inseriti
    let firstNumberEl = document.getElementById("first-number").value;
    let secondNumberEl = document.getElementById("second-number").value;
    let thirdNumberEl = document.getElementById("third-number").value;
    let fourthNumberEl = document.getElementById("fourth-number").value;
    let fifthNumberEl = document.getElementById("fifth-number").value;

    // condizioni SE hai vinto o perso
    if(haveIt.includes(parseInt(firstNumberEl)) && haveIt.includes(parseInt(secondNumberEl)) && haveIt.includes(parseInt(thirdNumberEl)) && haveIt.includes(parseInt(fourthNumberEl)) && haveIt.includes(parseInt(fifthNumberEl))) {
        
        resultEl.innerText = "Bravo, sei riuscito ad inserire tutti i numeri correttamente";

    }

})






// numero random del computer
function randomNumberUnique(maxNr) {

    // genero numero random con parametro che darà in base alla difficoltà escluso lo 0
    let random = Math.floor(Math.random() * maxNr) + 1;
    
    // se non include tale numero, allora pushalo dentro l'array
    if(!haveIt.includes(random)) {

        haveIt.push(random);
        return random;

    // altrimenti restarta la funzione dall'inizio fin quando non si arriva alla lunghezza massima dell'array = 16
    } else {
            
        if(haveIt.length < maxNr) {
    
            return  randomNumberUnique(maxNr);

        }
    }

}


// funzione per mostrare i numeri RANDOM in pagina
function showNumbers() {

    for (i = 0; i < 5; i++) {

        randomNumberUnique(100);
    
    }
    
    showRandomNumber.innerText = `${haveIt[0]}  -  ${haveIt[1]}  -  ${haveIt[2]}  -  ${haveIt[3]}  -  ${haveIt[4]}`;
    
    console.log(haveIt);

}