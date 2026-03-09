/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let primoNumero = -4.12 //Sono consentiti tutti i numeri reali
let secondoNumero = -Infinity //Valgono come number anche 0, -0, infinity, -infinity, +infinity
let terzoNumero = 3 + 4 - 6 //Valgono come number anche operazioni di addizione o sottrazione
let quartoNumero = 3 * 4 - 15 / 3 //Valgono come number anche operazioni di moltiplicazione o divisione
let quintoNumero = 9 / 0 // JavaScript non è un ottimo linguaggio di programmazione per gestire operazioni matematiche infatti può restituire vaalori errati ad alcune operazioni
let sestoNumero = 5 % 2 // L'operatore modulo (%) restituisce il resto di una divisione, in questo caso 1
let settimoNumero = 6 % 3 // Può essere usato per vedere se la divisione è una divisione esatta e quindi che da come risultato 0
let variabile
let ottavoNumero = 10 / variabile // Puo restituire come valore "NaN" (Not a Number) quando si tenta di effettuare un operazione tra un numero una variabile di tipo string/undefined ma per variabili di tipo boolean o null può restituire valore errati

console.log("Esercizio 1.01.01 -->", primoNumero, typeof primoNumero)
console.log("Esercizio 1.01.02 -->", secondoNumero, typeof secondoNumero)
console.log("Esercizio 1.01.03 -->", terzoNumero, typeof terzoNumero)
console.log("Esercizio 1.01.04 -->", quartoNumero, typeof quartoNumero)
console.log("Esercizio 1.01.05 -->", quintoNumero, typeof quintoNumero)
console.log("Esercizio 1.01.06 -->", sestoNumero, typeof sestoNumero)
console.log("Esercizio 1.01.07 -->", settimoNumero, typeof settimoNumero)
console.log("Esercizio 1.01.08 -->", ottavoNumero, typeof ottavoNumero)
// Il datatype number indica un valore numerico
let primaStringa = "carattere,parola o frase"
let secondaStringa = "10+3<24-15" // se racchiuse tra parentisi anche le operzioni vengono lette come stringa
let terzaStringa = "" //anche nessun carattere può essere letto come stringa
let quartaStringa = "venti" + "12" //si possono sommare due o più stringhe con +
let quintaStringa = 20 + "12" // Se si somma un valore nomerico ad una stringa vengono letti entrambi come stringhe
console.log("Esercizio 1.02.01 -->", primaStringa, typeof primaStringa)
console.log("Esercizio 1.02.02 -->", secondaStringa, typeof secondaStringa)
console.log("Esercizio 1.02.03 -->", terzaStringa, typeof terzaStringa)
console.log("Esercizio 1.02.04 -->", quartaStringa, typeof quartaStringa)
console.log("Esercizio 1.02.05 -->", quintaStringa, typeof quintaStringa)

// Il datatype string indica un carattere, parola o una frase
let valoreBooleano = true
console.log("Esercizio 1.03.01 -->", valoreBooleano, typeof valoreBooleano)
// Il datatype
let indefinito
console.log("Esercizio 1.04.01 -->", indefinito, typeof indefinito)
// Il datatype
let nullo = null
console.log("Esercizio 1.05.01 -->", nullo, typeof nullo)
// Il datatype

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Nicolò"
console.log("Esercizio 2 -->", "myName =", myName)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a = 12
let b = 20
let somma = a + b
console.log("Esercizio 3 -->", "12+20 =", somma)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const x = 12

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Orsillo"
console.log("Esercizio 5 -->", "myName =", myName)

// x = 4
/*per dimostrare che una variabile const non può essere riassegnata, rimuovi il commento 
alla riga preccedente e noterai un TypeError nella console del browser*/

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sottrazione = 4 - x
console.log("Esercizio 6 -->", "4 - x =", sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john"
let name2 = "John"
let uguaglianza = name1 === name2
console.log("Esercizio 7 -->", uguaglianza)
let name2Minuscolo = name2.toLowerCase()
uguaglianza = name1 === name2Minuscolo
console.log("Esercizio 7 -->", uguaglianza)
