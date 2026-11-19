// Traccia 02 · Il conto alla romana
// La consegna è nel README, alla voce "02 · Il conto alla romana".

/*
  STEPS
  1 -Preparare la costante per la mancia fissa (10 €)
  2 -Chiedere con prompt il totale del conto e il numero di persone (e trasformarli in numeri con parseInt)
  3 -Calcolare la quota: sommare conto e mancia e dividere per il numero di persone
  4 -Mostrare il messaggio con alert usando .toFixed(2)
*/


// # Fase di preparazione

const mancia = 10;

// # Fase di raccolta dati
const totaleConto = parseInt(prompt("Inserisci il conto totale:"));

const numeroPersone = parseInt(prompt("Inserisci il numero di persone:"));

// # Fase di elaborazione
const quotaPerPersona = (totaleConto + mancia) / numeroPersone;

// # Fase di output
alert(`A testa: ${quotaPerPersona.toFixed(2)} €`);

