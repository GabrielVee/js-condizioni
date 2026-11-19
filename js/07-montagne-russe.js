// Traccia 07 · Le montagne russe
// La consegna è nel README, alla voce "07 · Le montagne russe".

/*
  STEPS
 1 Preparare la variabile per il messaggio
2 Chiedere altezza ed età con prompt e convertirli con parseInt
3 Verificare con isNaN se i dati sono validi, poi controllare i requisiti (altezza >= 140 e eta >= 14)
4 Mostrare l'esito finale con alert
*/

// # Fase di preparazione
let messaggio = "";

// # Fase di raccolta dati
const altezza = parseInt(prompt("Inserisci la tua altezza"));
const eta = parseInt(prompt("Inserisci la tua eta"));

// # Fase di elaborazione
if (isNaN(altezza) || isNaN(eta)) {
  messaggio = "Dati non validi";
} else if (altezza >= 140 && eta >= 14) {
  messaggio = "Puoi salire!";
} else {
  messaggio = "Mi dispiace, non puoi salire";
}

// # Fase di output

alert(messaggio);

/*
let numbers = [10, 15, 2, 33, 55, 20, 22];

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    console.log(numbers[i]);
  } else {
    console.log("numero dispari");
  }

}
  */