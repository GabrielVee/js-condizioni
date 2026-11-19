// Traccia 05 · Che giorno è?
// La consegna è nel README, alla voce "05 · Che giorno è?".

/*
  STEPS
  1 Preparare la variabile per il messaggio
2 Chiedere che giorno è con prompt
3 Se il giorno è "sabato" oppure "domenica" assegnare "Buon weekend!", altrimenti "Buon lavoro"
4 Mostrare il messaggio finale con alert
*/

// # Fase di preparazione

let risultato = "";
// # Fase di raccolta dati

const giornoDellaSettimana = prompt("Che giorno della settimana è oggi?");
// # Fase di elaborazione
if (giornoDellaSettimana === "sabato" || giornoDellaSettimana === "domenica") {
  risultato = "Buon weekend!";
} else {
  risultato = "Buon lavoro";
}

// # Fase di output

alert(risultato);