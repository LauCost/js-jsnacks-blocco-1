let play = true;

//Variabile utilizzata per chiudere il ciclo
let i = 1;

//Variabile somma che partirà da 0
var x = 0

let risultato = document.querySelector("h1");

while (play) {


    let numero = Number(prompt(`Inserisci il ${i}° numero`));

    var x = x + numero;

    i++

    //Chiude il ciclo
    if (i == 11) {
        play = false;

        risultato.innerHTML = `La somma dei numeri da te scelto è: ${x}`;

    }
}