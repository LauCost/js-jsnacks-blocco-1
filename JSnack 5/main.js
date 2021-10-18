//Arrey vuoto
let x = [];

for (i = 0; i < 6; i++) {

    let numero = Number(prompt(`Inserisci un numero`));

    if (numero % 2 != 0) {
        x.push(numero);

        console.log(x);
    }
}


let messaggio = document.querySelector("h1");

messaggio.innerHTML = `I numeri dispari scelti sono ${x}`;