// Traccia 10 · Il bancomat
// La consegna è nel README, alla voce "10 · Il bancomat".

/*
  STEPS
 1 Preparare la variabile messaggio
2 Chiedere saldo e importo da prelevare con prompt e parseInt
3 Se l'importo non è valido (<= 0 o non numero) segnalare errore, altrimenti se il saldo basta calcolare il nuovo saldo, altrimenti segnalare saldo insufficiente
4 Mostrare il messaggio con alert
*/

// # Fase di preparazione

let messaggio = "";
// # Fase di raccolta dati
const saldo = parseInt(prompt("Inserisci il tuo saldo:"));
const prelievo = parseInt(prompt("Quanto vuoi prelevare?"));

// # Fase di elaborazione
if (isNaN(prelievo) || prelievo <= 0) {
  messaggio = "Importo non valido";
} else if (saldo >= prelievo) {
  messaggio = `Prelievo effettuato. Nuovo saldo: ${saldo - prelievo} €`;
} else {
  messaggio = "Saldo insufficiente";
}

// # Fase di output
alert(messaggio);
