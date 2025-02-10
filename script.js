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

addition = 100
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
