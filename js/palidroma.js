const word = prompt("Inserisci una parola.");
console.log(word);

const wordInv = wordRev(word);

function wordRev(wordReverse) {
    const wordResult = wordReverse.split("").reverse("").join("");
    return wordResult;
}

if (word === wordInv) {
    console.log(`La parola ${word} è palindroma`);
    alert(`La parola ${word} è palindroma`);
} else {
    console.log(`La parola ${word} non è palindroma`);
    alert(`La parola ${word} non è palindroma`);
}
