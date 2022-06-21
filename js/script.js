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

const km = parseInt(prompt('Quanti chilometri devi percorrere?', '125'));

// 2- Chiedo quanti anni ha

const age = parseInt(prompt('Quanti anni hai?'));

// 3- Dichiaro la variabile age per la tariffa piena

let price = km*0.21;

// 4- Modifico la variabile age per i minorenni

let newPrice;

if (age < 18){
    newPrice = (price / 100) * 80;
}

// 5- Modifico la variabile age per gli over 65

if (age >= 65){
    newPrice = (price / 100) * 60;
}

// 6- Limito a 2 le cifre decimali di price

price = price.toFixed(2);
newPrice = newPrice.toFixed(2);

// 7- Mostro il prezzo finale, esplicitando anche della riduzione ottenuta

document.getElementById('km').innerText = km + " km";

document.getElementById('age').innerText = age + " anni";

if ((age < 18) || (age >= 65)){
    document.getElementById('old-price').innerText = price + "€";
    document.getElementById('price').innerText = newPrice + "€";
} else {
    document.getElementById('price').innerText = price + "€";
}

