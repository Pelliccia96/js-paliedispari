const choiseEvOd = prompt("Scegli \"pari\" o \"dispari\".");
console.log(choiseEvOd);
const choiseNum = prompt("Inserisci un numero da 1 a 5.");
console.log("Numero User: " + choiseNum);

if ((choiseEvOd !== "pari" && choiseEvOd !== "dispari")) {
    alert("La parola inserita non è corretta.");
} else if (isNaN(choiseNum) || choiseNum < 1 || choiseNum > 5) {
    alert("Inserisci un numero valido.");
}

const userNumber = parseInt(choiseNum);
const pcNumber = parseInt(computerNum(1, 5));
let result = userNumber + pcNumber;
console.log(result);

function computerNum(min, max) {
    const randomNum = Math.floor(Math.random() * (1 + max - min)) + min;
    console.log("Numero Pc: " + randomNum);
    return randomNum;
}

function resultEvOd() {
    if (result % 2 === 0) {
        return true;
    }
}

if (resultEvOd(result) === true) {
    if (choiseEvOd == "pari") {
        alert(`Il risultato è pari (${result}), hai vinto.`);
    }
} else {
    alert(`il risultato è dispari (${result}), hai perso.`);
}
/* if (resultEvOd() !== true) {
    if (choiseEvOd == "dispari") {
        alert(`Il risultato è pari (${result}), hai perso.`);
    } else {
        alert(`il risultato è dispari (${result}), hai vinto.`);
    }
}
 */
