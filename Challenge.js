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