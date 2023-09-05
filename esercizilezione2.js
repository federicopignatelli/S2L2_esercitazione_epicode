/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/
let n10 = 34
let n11 = 50

let n12 = 63
let n13 = 78

let max = n10 > n11 ? 'n10' : 'n11'
console.log(max)

let max1 = n12 > n13 ? 'n12' : 'n13'
console.log(max1)

if (n10 > n11) { console.log(n10) }
else { console.log(n11) }

if (n12 > n13) { console.log(n12) }
else { console.log(n13) }



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/
let n20 = 7

let test = n20 === 5 ? 'equal' : 'not equal'
console.log(test)

if (n20 !== 5) {
  console.log('not equal')
}



/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
let div = 20 % 5

if (div === 0) {
  console.log('divisibile per 5')
}



/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/
let n15 = 7
let n16 = 1

if (n15 === 8) {
  console.log('è 8')

} else if ((n15 + n16) === 8) {
  console.log('la somma è 8')

} else {
  console.log('nessuno dei due valori è 8, la somma dei due non è 8')
}



/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/
let totalShoppingCart = 20
let costiSpedizione = 10

if (totalShoppingCart >= 50) {
  console.log(totalShoppingCart)
}
else { console.log(totalShoppingCart + costiSpedizione) }



/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/
let sales = totalShoppingCart * 0.2

if (totalShoppingCart - sales >= 50) {
  console.log(totalShoppingCart + sales)
}
else { console.log(totalShoppingCart - sales + costiSpedizione) }



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/
let numbers = [10, 76, 9]
numbers.sort(function (a, b) {
  return a - b;
});

console.log(numbers)



/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/
let number1 = 30
console.log(typeof number1)



/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/
const z1 = 67  //verifico se è divisibile per 2

if (z1 % 2 === 0) {
  console.log('il numero è pari')
} else {
  ('il numero è dispari')
}



/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

let val = 7
if (val < 5) {
  console.log("Meno di 10");
} else if (val < 10) {
  console.log("Meno di 5");
} else {
  console.log("Uguale a 10 o maggiore");
}



/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/
const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto' //soluzione



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/
delete me.lastName



/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/
me.skills.pop() //una soluzione
// si può risolvere anche usando .splice



/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/
const empty = []
empty.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)



/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/
empty[9] = 100


