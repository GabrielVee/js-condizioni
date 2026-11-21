// Bonus 1 · La pagella
// La consegna è nel README, alla voce "Bonus 1 · La pagella".

/*
  STEPS
  1 Preparare la variabile giudizio
2 Chiedere il voto con prompt e convertirlo con parseInt
3 Controllare se il voto non è valido (isNaN, < 1 o > 10), altrimenti valutare gli scaglioni (< 6, <= 7, <= 9, 10)
4 Mostrare il giudizio con alert
*/

// # Fase di preparazione

let giudizio = "";
// # Fase di raccolta dati
const voto = parseInt(prompt("Inserisci un voto da 1 a 10:"));

// # Fase di elaborazione
if (isNaN(voto) || voto < 1 || voto > 10) {
  giudizio = "Voto non valido";
} else if (voto < 6) {
  giudizio = "Insufficiente";
} else if (voto <= 7) {
  giudizio = "Sufficiente";
} else if (voto <= 9) {
  giudizio = "Buono";
} else {
  giudizio = "Ottimo";
}

// # Fase di output

alert(giudizio);