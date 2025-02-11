// VARIABILI
let boxForMyValue = 10

boxForMyValue = boxForMyValue + 1

console.log('somma di 10 + 1', boxForMyValue)

// TIPI DI VALORI PRIMITIVI:
// stringhe
// numeri
// booleani
// undefined
// null

let dog // il valore di dog è undefined

// COSTANTI
const EPICODE_URL = 'https://www.epicode.com'
// EPICODE_URL = 'www' // <-- ERRORE

// + - * /
// % <- "resto della divisione" ("modulo")

const result = 100 * 2.5 // 250

const greetings = 'ciao' + 'a' + 'tutti' // 'ciaoatutti'

const dontknow = 'ciao' * 'tutti'
console.log('valore di dontknow', dontknow) // Not A Number

// BOOLEANI
const hasADrivingLicense = false

const x = 5 >= 2
// true

const y = 100 === 10
// false

const z = 5 !== 6
// true

// const zz = 5 != '5'
// // false

// ! è un operatore logico chiamato NOT

const xx = !(45 === 46)
// true
console.log('valore di xx', xx)

// AND -> &&
// OR -> ||

// AND -> se TUTTE le condizioni sono vere, allora torna vero!
// false && false -> false
// false && true -> false
// true && false -> false
// true && true -> true

// OR -> basta che UNA condizione sia vera, e allora torna vero!
// false || false -> false
// false || true -> true
// true || false -> true
// true || true -> true

// TERNARY OPERATOR
const yourName = 'Mario'

// examPassed è un valore booleano: sarà TRUE o sarà FALSE
// ma lo diventerà a seguito del valore di yourName
const examPassed = yourName === 'Mario' ? true : false
// examPassed in questo caso è true

// variabile = condizione ? valore se true : valore se false

const youCleanedYourRoom = false

const paghetta = youCleanedYourRoom === true ? 20 : 5
// nel mio caso la paghetta vale 5
console.log('paghetta', paghetta) // 'paghetta 5'
