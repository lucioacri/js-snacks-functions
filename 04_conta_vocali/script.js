/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = "javascript";

// Dichiara la funzione qui.
function getVowels(takeWord) {
  let vowelsNumber = 0;
  for (let i = 0; i < takeWord.length; i++) {
    let letters = takeWord[i];
    if (
      letters === "a" ||
      letters === "e" ||
      letters === "i" ||
      letters === "o" ||
      letters === "u"
    ) {
      vowelsNumber += 1;
    }
  }
  return vowelsNumber;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(getVowels(word));

//Risultato atteso se si passa 'javascript': 3 (a, a, i)
