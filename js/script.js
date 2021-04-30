var cognomi = [" Paul", " Podghirnii", " Gherardi", " Constantinescu", " Luppi", " Astoni"];


// 1. chiedi all'utente il cognome

var tuoCognome = prompt("Inserisci il tuo cognome:");
tuoCognome = " " + tuoCognome
// 2. inseriscilo in un array con altri cognomi: 'Bianchi', 'Neri', 'Rossi', 'Verdi', 'Gialli'

cognomi.push(tuoCognome);
document.getElementById("tuo_cognome").innerHTML = tuoCognome;

// 3. stampa la lista ordinata alfabeticamente
var cognomiMaiuscoli = [];

for (var i=0; i < cognomi.length; i++) {
    cognomiMaiuscoli.push(cognomi[i].toUpperCase());
}
// console.log(cognomi);
console.log(cognomiMaiuscoli);

cognomiMaiuscoli.sort();
console.log(cognomiMaiuscoli);

for (i=0; i< cognomiMaiuscoli.length; i++) {
document.getElementById("nuova_lista").innerHTML += (i+1) +  cognomiMaiuscoli[i] + "<br>";
}


// 4. scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

// var check = false;
// var y = 0;

// while ( y < cognomiMaiuscoli.length || check == false) {
//     if (tuoCognome.toUpperCase() == cognomiMaiuscoli[y]) {
//         y=y+1;
//         console.log("Il tuo cognome è in posizione " + y);
//         document.getElementById("posizione").innerHTML = "Il tuo cognome è in posizione: " + y;

//         check = true;
//     } else {
//         // console.log("non è qui");
//         y++
//     }
// }

for (i=0; i < cognomiMaiuscoli.length; i++) {
    console.log((i+1) + cognomiMaiuscoli[i]);
}
