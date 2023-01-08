const massMark = 78;
const heigthMark = 1.69;
const massJohn = 92;
const heigthJohn = 1.95;

const BMIMark = massMark / heigthMark ** 2;
const BMIJohn = massJohn / (heigthJohn * heigthJohn);
const markHigthBMI = BMIMark > BMIJohn;

//console.log(BMIMark, BMIJohn, markHigthBMI);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    //console.log("Mark's BMI is higher than John's !");
    console.log(`Mark's BMI is ${BMIMark} higher than John's ${BMIJohn} !`);
}
else {
    console.log(`John's BMI is ${BMIJohn} higher than Mark's ${BMIMark} !`);
    //console.log("John's BMI is higher than Mark's !");
}
const scoreDolphins = (97 + 112 + 80) / 3;
const scoreKoalas = (109 + 95 + 50) / 3;
console.log(scoreDolphins, scoreKoalas);

if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
    console.log('Dolphins win the trophy 🏆');
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
    console.log('Koalas win the trophy 🏆');
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
    console.log('Both win the trophy!');
} else {
    console.log('No one wins the trophy 😭');
}
const bill = 430;
const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);