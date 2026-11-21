// Bonus 2 · La tessera fedeltà
// La consegna è nel README, alla voce "Bonus 2 · La tessera fedeltà".

/*
  STEPS
 1 Chiedere il prezzo del prodotto e se il cliente possiede la tessera
2 Impostare il prezzo finale uguale al prezzo iniziale
3 Se l'utente risponde "si", applicare lo sconto del 10%
4 Mostrare il prezzo finale con alert e .toFixed(2)
*/

// # Fase di preparazione

// # Fase di raccolta dati
const prezzoIniziale = parseInt(prompt("Inserisci il prezzo:"));
const haTessera = prompt("Hai la tessera fedeltà? (si/no)");

// # Fase di elaborazione
let prezzoFinale = prezzoIniziale;
if (haTessera === "si") {
  const sconto = (prezzoIniziale * 10) / 100;
  prezzoFinale = prezzoIniziale - sconto;
}
// # Fase di output
alert(`Prezzo da pagare: ${prezzoFinale.toFixed(2)} €`);

