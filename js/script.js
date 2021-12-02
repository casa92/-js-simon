// Visualizzare con degli alert 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


//dico all'utente di memorizzare i numeri
alert('memorizza i prossimi numeri');

//creo array dove metterò tutti i numeri generati
let numbersArray = [];
//creo array dove mettere tutti i numeri azzeccati dall'utente
let userNumerArray = [];

//crea 5 alert in cui vengono indicati i numeri da memorizzare casualmente e li pusho nell'array
for ( i = 0; i < 5; i ++ ) {
    let casualNumber = getRndInteger(1, 1000);
    alert(casualNumber);
    numbersArray.push(casualNumber);

}

console.log(numbersArray);

//indico all'utente il tempo che dovrà aspettare prima di poter inserire i numeri
alert('attendi 30 secondi e poi inserisci i numeri che sono comparsi');

//indico i secondi che dovrà aspettare
let seconds = 30;
//creo variabile tentativi corretti
let rightAttempts;
//creo variabile per salvare messaggio per utente
let userMessage;

//funzione che indica cosa fare al termine del tempo prestabilito
const countDownToUserInput = setInterval(function() {

    //decremento secondi
    seconds--;

    if ( seconds === 0 ) {
        clearInterval(countDownToUserInput);

        //genero prompt per far inserire ad utente i numeri 
        for ( i = 0; i < 5; i ++ ) {

            let userNumber = parseInt(prompt('inserisci i numeri che ricordi uno ad uno'));

            //se il numero inseri dall'utente è incluso nei numeri generati, lo pusho nell'array dei tentativi corretti
            if(numbersArray.includes(userNumber)) {
                userNumerArray.push(userNumber);
            }
        }
    }

    //verifico quanti elementi sono presenti nell' array di tentativi corretti e lo salvo nella variabile
    for ( i = 0; i < userNumerArray.length; i++) {
        let thisNumber = userNumerArray[i];
        rightAttempts = userNumerArray.length;
    }

}, 1000);


//blocco la funzione per il tempo di attesa necessario ( 30 secondi )
const clock = setTimeout(function() {

    //genero messaggio per utente inserendo numero tentativi corretti e corrispettivi numeri
    userMessage = `
        Hai azzeccato ${rightAttempts} tentativo/i,
        il/i numero/i: ${userNumerArray}
    `;

    //stampo output per utente
    alert(userMessage);

}, 30000);

























//FUNCTIONS

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }