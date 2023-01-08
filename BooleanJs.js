// 5 falsy values : 0, '',undefined, null, NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

const money = 1000;
if (money) {
    console.log("Dont't spend it all ;");

}
else {
    console.log('You should get a job !');
}
let height = 1;
if (height) {
    console.log('YAY ! Height is defined');
}
else {
    console.log('Heigth is UNDEFINED');
}