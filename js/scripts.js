// nome repo: js - oggetti - studenti

// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un 
// nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


let lista = document.getElementById("listaStudenti")

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

let descrizioneStudente = {
    nome: "Marco",
    cognome: "quattro",
    età: 15
}

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let proprietà in descrizioneStudente ) {
    console.log(proprietà + " " + descrizioneStudente[proprietà]);
}

// Creare un array di oggetti di studenti.

let arrayStudenti = [{
    nome: "Alessandro", cognome: "uno", età: 30},
    { nome: "Fabrizio", cognome: "due", età: 25},
    { nome: "Ilario", cognome: "tre", età: 20}
]

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for (let i = 0; i< arrayStudenti.length; i++) {
    let lista = arrayStudenti[i];
    console.log(lista.nome + " " + lista.cognome);
  
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un 
// nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

let nuoviDatiStudente = {
    nome: " ",
    cognome: " ",
    età: 0,
}

let studenteNuovo = nuoviDatiStudente;

studenteNuovo.nome = prompt("nome");
studenteNuovo.cognome = prompt("cognome");
studenteNuovo.età = parseInt(prompt("età"));

arrayStudenti.push(studenteNuovo);

alert(nuoviDatiStudente);