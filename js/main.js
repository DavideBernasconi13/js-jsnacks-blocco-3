// Crea un array vuoto e chiedi all'utente un numero da inserire nell'array. 
// Continua a chiedere i numeri all'utente e a inserirli nell'array fino a quando la somma degli elementi è minore di 50.

let array = [];
console.log(array);
let somma = 0;
let numMax = 50;


while (somma < numMax) {
    let number = parseInt(prompt("Inserisci un numero"));
    console.log(number);
    somma += number;
    console.log(somma);
}