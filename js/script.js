/*
Descrizione:
Visualizzare in pagina 5 numeri casuali. 
Da lì parte un timer di 10 secondi.
Dopo 10 secondi i numeri scompaiono e l'utente deve inserire, 
uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e 
quali dei numeri da indovinare sono stati individuati.
*/





let showRandomNumber = document.getElementById("show-random-number");



let timeleft = 10;

let countdown = setInterval(count, 10000);

function count() {

    showRandomNumber.innerText = secondsLeft;
    
        
    if(secondsLeft == 0) {
        testoElement.innerText = "AUGURI";
        clearInterval(capodannInterval);
    }
        
    secondsLeft--;
}



