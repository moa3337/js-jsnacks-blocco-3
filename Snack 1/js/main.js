/*
 chiedo all'utente un numero minimo e un numero massimo,
 genero un numero compreso tra il valore minimo ed il
 valore massimo forniti dall'utente.
*/

// RICHIESTA PER L'UTENTE DEI NUMERI MAX e MIN
const numMin = parseInt(prompt("inserisci un numero minimo"));
const numMax = parseInt(prompt("inserisci un numero massimo"));

// CICLO CON L'USO DEL WHILE
while (isNaN(numMin) || isNaN(numMax)) {
    numMin = parseInt(prompt("Error: inserisci un numero minimo"));
    numMax = parseInt(prompt("Error: inserisci un numero massimomo"));
}
 // GENERO UN NUMERO RANDOM TRA IL MIN ED IL MAX
 let randomNum = Math.floor(Math.random() * (numMax - numMin +1 ) + numMin);

 // STAMPO IL RISULTATO IN CONSOLE
 console.log(`il tuo numero fortunato è: ${randomNum}`);
