// Traccia 09 · Come mi vesto?
// La consegna è nel README, alla voce "09 · Come mi vesto?".

/*
  STEPS
  1 Preparare la variabile messaggio
2 Chiedere la temperatura esterna con prompt e convertirla con parseInt
3 Controllare se non è un numero, se è >= 15 ("Vai leggero"), altrimenti chiedere se piove e consigliare impermeabile o giacca
4 Mostrare l'esito finale con alert
*/

// # Fase di preparazione
let messaggio = "";

// # Fase di raccolta dati

const temperatura = parseInt(prompt("Quanti gradi ci sono fuori?"));
// # Fase di elaborazione
if (isNaN(temperatura)) {
  messaggio = "Scrivi la temperatura";
} else if (temperatura >= 15) {
  messaggio = "Vai leggero";
} else {
  const piove = prompt("Piove? (si/no)");
  if (piove === "si") {
    messaggio = "Metti l'impermeabile";
  } else {
    messaggio = "Metti la giacca";
  }
}

// # Fase di output
alert(messaggio);
