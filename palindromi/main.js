const word = prompt("Inserisci una parola:");
const myWord = word.toLowerCase();

function control(word) {
    let palindrome = false; 
    let reverseWord = "";
    
    for (let i=word.length - 1; i >= 0; i--) {
        reverseWord = reverseWord + word[i];
    }
    
    if (reverseWord === word) {
        palindrome = true; 
    }
    
    return palindrome;

}

let palindrome = control(myWord);

if (palindrome) {
    console.log(`La parola ${myWord} è palindroma`)
}
else {
    console.log(`La parola ${myWord} non è palindroma`)
}