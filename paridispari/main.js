const pariDispari = prompt("Inserisci la tua scelta tra pari e dispari");
const myChoice = pariDispari.toLowerCase();
const myNumber = Number(prompt("Inserisci un numero tra 1 e 5"));

// if (myNumber < 1 || myNumber > 5) {
//     console.log("Il numero inserito non è valido, aggiorna la pagina e riprova")
// }

function randomNumberPC(min, max) {
    return Math.ceil(Math.random() * (max - min)) + min; 
}

const pcNumber = randomNumberPC(1, 5);

const sum = pcNumber + myNumber;

function pariDispariCheck(sum) {
    let pari = false; 
    
    if (sum % 2 === 0) {
        pari = true;
    }
    
    return pari; 
}

let pari = pariDispariCheck(sum);

console.log(`Il tuo numero è ${myNumber}.`);
console.log(`Il numero del computer è ${pcNumber}.`);

if (pari = true && myChoice === "pari") {
    console.log(`La somma dei numeri è ${sum}. Hai vinto!`);
}

else if (pari = false && myChoice === "dispari") {
    console.log(`La somma dei numeri è ${sum}. Hai vinto!`);
}

else {
    console.log(`La somma dei numeri è ${sum}. Hai perso!`);
}
