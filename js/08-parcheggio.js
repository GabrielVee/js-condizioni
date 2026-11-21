// Traccia 08 · Il parcheggio
// La consegna è nel README, alla voce "08 · Il parcheggio".

/*
  STEPS
 1 Preparare la variabile messaggio
2 Chiedere il numero di ore con prompt e convertirlo con parseInt
3 Controllare se il dato non è valido (isNaN o < 1), altrimenti verificare le fasce orarie (<= 2, <= 5, oltre)
4 Stampare messaggio in console con console.log
*/

// # Fase di preparazione
let messaggio = "";

// # Fase di raccolta dati
const tempoParcheggio = parseInt(prompt("Inserisci il numero di ore in qui vuoi restare nel parcheggio"));

// # Fase di elaborazione
if (isNaN(tempoParcheggio) || tempoParcheggio < 1) {
  messaggio = "Scrivi il numero di ore";
} else if (tempoParcheggio <= 2) {
  messaggio = "Da pagare: 5 €";
} else if (tempoParcheggio <= 5) {
  messaggio = "Da pagare: 10 €";
} else {
  messaggio = "Da pagare: 15 €";
}

// # Fase di output
console.log(messaggio);
