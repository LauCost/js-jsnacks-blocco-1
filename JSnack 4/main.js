//Chiede all'utente il suo nome
let nome = prompt("Inserisci il tuo nome").toLowerCase();

let messaggio = document.querySelector("h1");

//Lista dei nomi che posso parteciapre
let nomiValidi = ["ciccio", "pluto", "fabio", "fabiola", "tiziano", "lau", "john", "yoda", "gatto", "cane"];

//L'accesso è proibito fin da subito
let accesso = false;

//Verifica che il nome inserita sia presente tra quelle autorizzate
for (i = 0; i < nomiValidi.length; i++) {
    if (nome == nomiValidi[i]) {

        //Se è tra quelli autorizzati impostiamo l'accesso a true
        accesso = true;
    }
}

//In base all'accesso (true o false) stampa un messaggio 
if (accesso == true) {
    messaggio.innerHTML = "Il tuo nome è presente nella lista, Buon divertimento!"
} else {
    messaggio.innerHTML = "Il tuo nome non è presente nella lista, Addio!"
}