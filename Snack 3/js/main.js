/*
 Fai inserire un numero, che chiameremo N, all'utente.
 Genera N array, ognuno formato da 10 numeri casuali da 1 a 100.
 Ogni volta che ne crei uno, stampalo.
*/

// CHIEDEO ALL'UTENTE DI INSERIRE UN NUMERO
const number = parseInt(prompt("inserisci un numero"));

// CILCLO WHILE 
let i = 0;

while (i < number) {
    let array = [];

    // SECONDO CICLO WHILE, PER GENERARRE I NUMERI RANDOM
    let box = 0;

    while (box < 10) {
        array.push(Math.floor(Math.random() * 100 + 1));
        box++;
    }
    
    // STANPA IN CONSOLE IL NUMERO DI ARRAY CON DENTRO I NUMERI DA 1 A 100
    console.log(`array ${i + 1}:` + array);
    
    i++
}
