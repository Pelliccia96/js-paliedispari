const choiseEvOd = prompt("Scegli pari o dispari.");
console.log(choiseEvOd);
const choiseNum = prompt("Inserisci un numero da 1 a 5.");
console.log(choiseNum);

if ((choiseEvOd !== "pari" && choiseEvOd !== "dispari")) {
    alert("La parola inserita non è corretta.");
} else if (isNaN(choiseNum) || choiseNum < 1 || choiseNum > 5) {
    alert("Inserisci un numero valido.");
}
