/*
1- Chiedo quanti km deve percorrere
2- Chiedo quanti anni ha
3- Dichiaro la variabile age per la tariffa piena
4- Modifico la variabile age per i minorenni
5- Modifico la variabile age per gli over 65
6- Limito a 2 le cifre decimali di price
7- Mostro il prezzo finale, esplicitando anche della riduzione ottenuta
*/

// 1- Chiedo quanti km deve percorrere

const km = parseInt(prompt('Quanti chilometri devi percorrere?'));
console.log("L'utente deve percorrere " + km + " chilometri");

// 2- Chiedo quanti anni ha

const age = parseInt(prompt('Quanti anni hai?'));
console.log("L'utente ha " + age + " anni");

// 3- Dichiaro la variabile age per la tariffa piena

let price = km*0.21;
console.log('La tariffa piena è di ' + price + "€");

// 4- Modifico la variabile age per i minorenni
if (age < 18){
    price = (price / 100) * 80;
    console.log('Tariffa speciale minorenni: ' + price + "€");
}

// 5- Modifico la variabile age per gli over 65

if (age >= 65){
    price = (price / 100) * 60;
    console.log('Tariffa speciale anziani: ' + price + "€");
}

// 6- Limito a 2 le cifre decimali di price

price = price.toFixed(2);
console.log(price);