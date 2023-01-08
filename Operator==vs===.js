const prompt = require('prompt-sync')();
const age = '18';
if (age === 18) console.log('You jus became an adult (Strict)');

if (age == 18) console.log('You jus became an adult (loose)');

let lname = prompt("What's you favourite number ?");

console.log(typeof (lname));

if (lname == 23) {
    console.log('Cool ! 23 is an amazaing number');
}
else if (lname === 7) {
    console.log('7 is also a cool number');
}
else {
    console.log('Number is not 23 or 7');
}