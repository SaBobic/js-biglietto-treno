/*
1. Chiedo quanti km deve percorrere
2. Chiedo quanti anni ha
3. Validazione dei dati indicati dall'utente
4. Dichiaro la variabile price per la tariffa piena
5. Dichiaro la variabile newPrice per minorenni e over 65
6. Limito a 2 le cifre decimali di price e newPrice
7. Mostro dati inseriti e prezzo finale su schermo, esplicitando anche la riduzione ottenuta
*/

// 1. Chiedo quanti km deve percorrere

const km = parseInt(prompt('Quanti chilometri devi percorrere?', '125'));

// 2. Chiedo quanti anni ha

const age = parseInt(prompt('Quanti anni hai?', '20'));

// 3. Validazione dei dati indicati dall'utente

if (km < 1 || isNaN(km)){
    alert("Chilometri non inseriti correttamente");
}

if (age < 0 || isNaN(age)){
    alert("Anni non inseriti correttamente");
}

// 4. Dichiaro la variabile price per la tariffa piena

let price = km*0.21;

// 5. Dichiaro la variabile newPrice per minorenni e over 65

let newPrice;

if (age < 18){
    newPrice = (price / 100) * 80;
}

if (age >= 65){
    newPrice = (price / 100) * 60;
}

// 6. Limito a 2 le cifre decimali di price e newPrice

price = price.toFixed(2);

if (!isNaN(newPrice)){
    newPrice = newPrice.toFixed(2);
}

// 7. Mostro dati inseriti e prezzo finale su schermo, esplicitando anche la riduzione ottenuta

document.getElementById('km').innerText = km + " km";

document.getElementById('age').innerText = age + " anni";

if ((age < 18) || (age >= 65)){
    document.getElementById('old-price').innerText = price + "€";
    document.getElementById('price').innerText = newPrice + "€";
} else {
    document.getElementById('price').innerText = price + "€";
}