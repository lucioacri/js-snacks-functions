/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = "Mario";

// Dichiara la funzione qui.
// function greetUserForDifferentTimes(userName) {
//   const now = new Date();
//   const hour = now.getHours();
//   if (hour >= 6 && hour <= 13) {
//     return "Buongiorno " + userName;
//   }
//   if (hour > 13 && hour <= 17) {
//     return "Buon pomeriggio " + userName;
//   } else {
//     return "Buonasera " + userName;
//   }
// }

// Invoca la funzione qui e stampa il risultato in console
// console.log(greetUserForDifferentTimes(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.
function greetUserForDifferentTimes(userName) {
  const now = new Date();
  const hour = now.getHours();
  const greet =
    hour >= 6 && hour <= 13
      ? "Buongiorno"
      : hour > 13 && hour <= 17
      ? "Buon pomeriggio"
      : "Buonasera";
  return `${greet} ${userName}`;
}
console.log(greetUserForDifferentTimes(name));
