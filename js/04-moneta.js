// Traccia 04 · Testa o croce
// La consegna è nel README, alla voce "04 · Testa o croce".

/*
  STEPS
  1 Preparare la variabile per contenere il risultato
2 Generare un numero casuale tra 0 e 1 con Math.random()
3 Se il numero è minore di 0.5 assegnare "Testa", altrimenti "Croce"
4 Mostrare il risultato con alert e stampare il numero pescato in console
*/

// # Fase di preparazione
let risultato = "";

// # Fase di raccolta dati
const numeroCasuale = Math.random();

// # Fase di elaborazione
if (numeroCasuale < 0.5) {
  risultato = "Testa";
} else {
  risultato = "Croce";
}

// # Fase di output
alert(risultato);
console.log(numeroCasuale);
