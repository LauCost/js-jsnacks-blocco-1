const x = Number(prompt("Digita il primo numero"));

const y = Number(prompt("Digita il secondo numero"));

let risultato = document.querySelector("h1");

if (x > y) {

    risultato.innerHTML = `Il numero più grande è: ${x}`;
} else if (x < y) {

    risultato.innerHTML = `Il numero più grande è: ${y}`;

} else {

    risultato.innerHTML = `I numeri sono uguali: ${x}`;

}