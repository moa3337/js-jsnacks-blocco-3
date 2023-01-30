/*
 Crea un array vuoto e chiedi all'utente un numero da inserire nell'array.
 Continua a chiedere i numeri all'utente e a inserirli nell'array
 fino a quando la somma degli elementi è minore di 50.
*/

// ARRAY VUOTO
let empty = [];
let sum = 0;

// IL CICLO CON WHILE DOVE LA SOMMA DEVE ESSERE MINORE DI 50
while (sum < 50) {

    // CHIEDO ALL'UTENTE UN NUMERO
    let number = parseInt(prompt("inserisci un numero"));

    // ALL'ARRAY VUOTO AGGIUNGO IL NUMERO DELL'UTENTE
    empty.push(number);

    // LA SOMMA INFERIORE A 50 SARA' UGUALE AL NUMERO DELL'UTENTE
    sum += number;
}

// DIRE ALL'UTENTE CHE HA SUPERATO 50
console.log("hai superato: " + 50);

// DIRE ALL'UTENTE I NUMERI CHE HA DIGITATO
console.log("I tuoi numeri sono: " + empty);


