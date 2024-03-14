// Fai inserire un numero, che chiameremo N, all'utente.
//     Genera con una funzione N array, ognuno formato da 10 numeri casuali da 1 a 100.
//     Ogni volta che ne crei uno, stampalo.

// variabile n 
let n = parseInt(prompt('Inserisci un numero'));
console.log(n);

// funzione crea array 
function creaArray() {
    let newArray = [];
    let elArray = 10;
    for (let i = 0; i < elArray; i++) {
        newArray.push(parseInt(Math.random() * 100));
    }
    console.log(newArray);
}


// ciclo for per replicare gli array
for (let i = 0; i < n; i++) {
    creaArray();
}