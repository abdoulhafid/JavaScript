const age = 15;
//const isOldEnough = age >= 18;

if (age >= 18) {
    console.log('Sarah can start driving license');

}
else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years : )`);

}

let century
const birthYear = 1998;
if (birthYear <= 2000) {
    century = 20
}
else {
    century = 21
}
console.log(century);