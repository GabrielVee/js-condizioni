// Traccia 06 · Il login
// La consegna è nel README, alla voce "06 · Il login".

/*
  STEPS
  1 Preparare la variabile per il messaggio di risposta
2 Chiedere username e password all'utente con due prompt distinti
3 Se username è "admin" E password è "1234" consentire l'accesso, altrimenti errore
4 Mostrare il messaggio con alert
*/

// # Fase di preparazione
let risposta = "";

// # Fase di raccolta dati

const username = prompt("inserisci Username");
const password = prompt("inserisci Password");

// # Fase di elaborazione
if (username === "admin" && password === "1234") {
  risposta = "Login effettuato";
} else {
  risposta = "Credenziali errate";
}

// # Fase di output
alert(risposta);
