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

// pulsante per mostrare il risultato
let showResultButtonEl = document.getElementById("show-result-button");

// variabile inizializzata per scrivere il risultato in pagina
let resultEl = document.getElementById("result");


// creo array che conterrà i numeri random
let haveIt = [];
// secondi prima che i numeri despawnino
let secondsLeft = 10;

// pulsante di start e di clear
let startButtonEl = document.getElementById("start-button");
let clearButtonEl = document.getElementById("clear-button");


startButtonEl.addEventListener("click", function() {

    // mostra i numeri casuali in PAGINA
    showNumbers();
    
    
    // dopo un countdown di 10 secondi elimina i numeri in PAGINA
    const countdown = setInterval(() => {

        secondsLeft--;

        if (secondsLeft <= 0) {

            clearInterval(countdown);
            showRandomNumber.textContent = "";

        }

    }, 1000);

    // disabilito il pulsante play
    startButtonEl.disabled = true;

})


clearButtonEl.addEventListener("click", function() {

    // riabilito il pulsante play
    startButtonEl.disabled = false;

    // riporto l'array dei numeri casuali a zero indici
    haveIt = [];

    if(secondsLeft == 0) {
        secondsLeft = 10;
    }

    resultEl.style.padding = "0";
    resultEl.innerText = "";

})



showResultButtonEl.addEventListener("click", function() {


    // variabili che vanno ad individuare all'interno del documento i numeri inseriti
    let firstNumberEl = document.getElementById("first-number").value;
    let secondNumberEl = document.getElementById("second-number").value;
    let thirdNumberEl = document.getElementById("third-number").value;
    let fourthNumberEl = document.getElementById("fourth-number").value;
    let fifthNumberEl = document.getElementById("fifth-number").value;

    // condizioni SE hai vinto o meno
    if (firstNumberEl == "" || secondNumberEl == "" || thirdNumberEl == "" || fourthNumberEl == "" || fifthNumberEl == "") {

        resultEl.innerText = "Non stai dimenticando nulla?";

        resultEl.style.padding = "1em 3em";

    } else {

        // creo un array vuoto per inserire i numeri dati dall'utente
        let guessedNumbers = [];

        // pusho i numeri inseriti dall'utente nell'array sopra
        guessedNumbers.push(parseInt(firstNumberEl));
        guessedNumbers.push(parseInt(secondNumberEl));
        guessedNumbers.push(parseInt(thirdNumberEl));
        guessedNumbers.push(parseInt(fourthNumberEl));
        guessedNumbers.push(parseInt(fifthNumberEl));
    
        // creo un array vuoto per inserire solo i numeri corretti
        let correctNumbers = [];
    
        // ciclo per verificare se i numeri contenuti all'interno del guessedNumber[] siano corretti o meno, se lo sono
        // li pusho all'interno del correctNumbers[];
        for (i = 0; i < guessedNumbers.length; i++) {
    
            if (haveIt.includes(guessedNumbers[i]) && !correctNumbers.includes(guessedNumbers[i])) {
    
                correctNumbers.push(guessedNumbers[i]);
    
            }
        }
    
    
        resultEl.innerText = `Sei riuscito ad indovinare ${correctNumbers.length} numeri su 5: ${correctNumbers.join(", ")}`;


        resultEl.style.padding = "1em 3em";
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