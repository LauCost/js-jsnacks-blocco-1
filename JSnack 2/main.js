//Chiede all'utente la prima parola
const x = prompt("Inserisci la prima parola");

//Chiede all'utente la seconda parola
const y = prompt("Inserisci la seconda parola");

//Selezioniamo la query sul culae verrà stampato il risultato
let risultato = document.querySelector("h1");

if (x.length > y.length) {

    risultato.innerHTML = `${y} <br> ${x}`

} else if (x.length < y.length) {

    risultato.innerHTML = `${x} <br> ${y}`

} else {

    risultato.innerHTML = `Le due parole hanno la stessa lunghezza: ${x} ${y}`

}