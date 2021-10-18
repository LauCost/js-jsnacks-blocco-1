let play = true

let i = 1

let risultato = document.querySelector("h1")

while (play) {


    let numero = prompt(`Inserisci il ${i}° numero`);

    i++

    if (i == 10) {
        play = false;

        console.log(numero);

    }
}