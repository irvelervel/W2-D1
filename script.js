// QUI DENTRO SIAMO IN UN FILE SEPARATO!
// OTTIMO PER SCRIVERE DEL JS IN MODO ORDINATO, SENZA
// APPESANTIRE LA PAGINA HTML
// INOLTRE SARÀ POSSIBILE APPLICARE QUESTO FOGLIO JS A PIÙ PAGINE HTML

// questo foglio JS è collegato ad index.html grazie ad un tag <script>
// questo significa che all'avvio della pagina index.html verrà eseguito anche
// questo documento JS

// proviamo a scrivere un messaggio in console!
console.log('Hello World!')

// La professione dello sviluppatore software si basa sulla RISOLUZIONE di PROBLEMI.
// I problemi si risolvono tramite PROCESSI LOGICI, e tramite la creazione di ALGORITMI.
// Un algoritmo è una sequenza finita di passaggi che portano da un problema alla sua
// risoluzione; e anzi, dato lo STESSO problema, lo STESSO algoritmo porterà alla
// STESSA SOLUZIONE.

// VARIABILE
// una variabile è un contenitore per un valore.
// serve a memorizzare un dato, spesso intermedio, in modo da poterlo
// utilizzare per uno step successivo nel nostro algoritmo.
let myVariable // ho definito una variabile. L'ho chiamata "myVariable"
// al momento, "myVariable" non ha un valore.
// per assegnare un valore ad una variabile, in JS si utilizza l'operatore =
myVariable = 'farina'
// ora ho inserito la parola "farina" dentro la variabile chiamata "myVariable"
console.log(myVariable) // verificare il contenuto di myVariable ('farina')

// CREAZIONE DELLA VARIABILE
let box // la variabile chiamata "box" è stata appena creata in questo foglio JS

// ASSEGNAZIONE DEL VALORE AD UNA VARIABILE
box = 100 // un valore es. numerico

console.log(box) // 100

// volendo si possono compattare le operazioni di CREAZIONE e ASSEGNAZIONE della variabile
let number = 10
let number2 = 100

console.log(number) // 10

number = 30
number = 50

console.log(number) // 50

let addition = 10
addition = addition + number // qua il nuovo valore di addition è già 60!
console.log(addition) // 60
addition = addition + number // 110
console.log(addition) // 110
addition = 100
addition = addition + number // 150

// variable <-- valore

// TIPI POSSIBILI DI VALORI PER LE VARIABILI
// stringa -> es. 'farina', 'Stefano', 'una frase piuttosto complessa'
// numeri -> es. 0, 100, 56.234, 123214123213
// booleani -> true, false (senza ' o "")
// undefined -> è il valore di una variabile a cui non è stato ancora assegnato un valore
// null -> indica un valore volutamente vuoto, esplicitamente nullo!

let number3
console.log(number3) // undefined

let boh = null

let n1 = 100
let n2 = '100'
let n3 = n1 + n2
console.log(n3) // "100100"

let w1 = 'ciao'
let w2 = 'stefano'
let w3 = w1 + w2 // 'ciao' + 'stefano' --> 'ciaostefano'
let w4 = w1 + ' ' + w2 // 'ciao' + ' ' + 'stefano' --> 'ciao stefano'

let falseNumber = '0'

let num1 = 100
let num2 = 80
console.log(num1 - num2 * 5) // -300
let num3 = 5
console.log(num2 / num3) // 80 / 5 -> 16

console.log(100 + undefined) // NaN, Not a Number
// console.log(Array(16).join('wat' - 1) + ' Batman!') // sigla di Batman!

console.log((100 + 20) * 5) // 600

// OPERATORE /, torna il risultato di una divisione
console.log(95 / 10) // 9.5

// OPERATORE MODULO %, resto di una divisione
console.log(95 % 10) // 5

// in JS è una PESSIMA abitudine cambiare il TIPO del dato di una variabile!
let myName = 'Stefano'
myName = 'Andrea'
myName = 'Giovanni'
// myName = 100 // <-- JS non da errore! ma è una pessima abitudine, NON IMPARATELA :)
let newNumber = 100

// COSTANTI
const epicodeURL = 'https://www.epicode.com'
const pi = 3.14

// epicodeURL = 'https://www.google.com' // <-- ERRORE
// pi = 30 // <-- ERRORE

const newPi = pi + number // 53.14

// le COSTANTI vanno sempre inizializzate, altrimenti sono inutili!
// const myConstant // inutile! valore undefined iniziale che non potrà mai cambiare :(

let newVariable = 100

const fixedValue = newVariable + 1 // 101

console.log(fixedValue)

// VALORI BOOLEANI
// Esprimono un valore logico di TRUE o FALSE

let canYouDrive = true
let doYouSmoke = false

let numero1 = 5
let numero2 = 15
let numero3 = 30
let numero4 = 15

let bool1 = numero1 < numero2 // 5 < 15 --> true

console.log(numero2 > numero1) // 15 > 5 --> true
console.log(numero3 < numero1) // 30 < 5 --> false
console.log(numero2 <= numero4) // 15 <= 15 --> true
console.log(numero4 === numero3) // 15 === 30 --> false

// l'operatore == confronta il VALORE ma non il TIPO
console.log(100 == '100') // true!

// l'operatore === confronta il VALORE e anche il TIPO!
console.log(100 === '100') // false!

let bool2 = numero3 === numero4 // 30 === 15 --> false

let carrello = 35
let data = '28/11/2025'

// per avere uno sconto del black friday devono verificarsi CONTEMPORANEAMENTE
// queste due condizioni: carrello almeno 50 e data 28/11/2025

const blackFridaySale = carrello >= 50 && data === '28/11/2025'
// false && true --> false

let examResult = 17
let firstName = 'Mario'

// per passare l'esame devi avere almeno un risultato di 18 OPPURE ti devi chiamare "Mario"
const examIsPassed = examResult >= 18 || firstName === 'Mario'
// false || true --> true

const result = numero1 === numero2 // 5 === 15 --> false
console.log(!result)
