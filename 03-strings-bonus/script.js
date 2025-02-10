const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city          (pensavo dovessi trovare la Y)
const cityIndex = city.charAt(4);
console.log(cityIndex); // Output: 4

const cityIndex2 = city.indexOf("York");
console.log(cityIndex2);//      not sure so i did both

const cityIndex3 = city.search("Y");
console.log(cityIndex3);  //document attempt or third solution

// 2. Sottostringhe 
// Stampa la sottostringa "York" dalla variabile city
const citySubstring = city.slice(4, 8);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
const cityReplaced = city.slice(0, 3) + " " + `Delhi`;
console.log(cityReplaced); // Output:  "New Delhi"

const cityReplaced2 = city.substring(0, 3) + " " + `Delhi`;  //used sub string 
console.log(cityReplaced2);

const cityReplaced3 = city.replace(`York`, `Delhi`)
console.log(cityReplaced3);



// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiscolo
// Trasforma tutto in maiscuolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"
