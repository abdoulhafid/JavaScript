var a =[50,2,3];
console.log(a[0]);
// modifier la valeur situe a 1
a[2]="la valeur de 3"
console.log(a[2]);
//ajout une valeur a index 3
a[3]= "la valeur de 4";
console.log(a[3]);
//afficher ensemble des valeurs de a 
console.log(a);

var b =[1,2,3];
var c =[1,2,3];
var d =[a,b,c];
console.log(d);

console.log(d[0][2]);
