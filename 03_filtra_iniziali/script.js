/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

// Dichiara la funzione qui.
function filterNames(namesArray) {
  const filteredNames = [];
  for (let i = 0; i < namesArray.length; i++) {
    let arrayItem = namesArray[i];
    if (arrayItem[0] === "A") {
      filteredNames.push(arrayItem);
    }
  }
  return filteredNames;
}

// Invoca la funzione qui e stampa il risultato in console
console.log(filterNames(names));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]
