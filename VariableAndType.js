const prompt = require('prompt-sync')();
var fname = prompt("Entrer votre nom ");
var lname = prompt("Entrer votre prenom ");

console.log("votre nom complet est", fname, lname);

var number1 = prompt("Entrer premier nombre ");
var number2 = prompt("Entrer deuxieme nombres ");
let somme = Number(number1 - number2);

console.log("La Somme vaut", somme);