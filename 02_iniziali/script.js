/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = [
  "Anna",
  "Luca",
  "Marco",
  "Adele",
  "Giovanni",
  "Alessandra",
  "Carlo",
  "Franco",
];

// Dichiara la funzione qui.
// function getInitials(takeNames, initials) {
//   const namesInitial = [];
//   for (let i = 0; i < takeNames.length; i++) {
//     let arrayNames = takeNames[i];
//     let initials = arrayNames[0];
//     namesInitial.push(initials);
//   }
//   return namesInitial;
// }

// // Invoca la funzione qui e stampa il risultato in console
// console.log(getInitials(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]
const getInitials = (takeNames, initials) => {
  const namesInitial = [];
  for (let i = 0; i < takeNames.length; i++) {
    let arrayNames = takeNames[i];
    let initials = arrayNames[0];
    namesInitial.push(initials);
  }
  return namesInitial;
};
console.log(getInitials(names));
