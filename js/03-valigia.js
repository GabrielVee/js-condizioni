// Traccia 03 · La valigia
// La consegna è nel README, alla voce "03 · La valigia".

/*
  STEPS
  1 Preparare il prezzo base del biglietto (36 €) e il limite di peso (23 kg)
2 Chiedere all'utente il peso della valigia con prompt e convertirlo con parseInt
3 Se il peso supera il limite, aggiungere 20 € di supplemento
4 Stampare il prezzo finale in console
*/40

// # Fase di preparazione
let BigliettoAereo = 36;
const limitePesoValigia = 23;


// # Fase di raccolta dati
const pesoValigia = parseInt(prompt("Quanto pesa la valigia?"));

// # Fase di elaborazione
if (pesoValigia > limitePesoValigia) {
  BigliettoAereo = 36 + 20;
}

// # Fase di output
console.log(`Prezzo del biglietto: ${BigliettoAereo} €`);
