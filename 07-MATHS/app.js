
//Exercice : Minimum et maximum

console.log(Math.min (7, 5, -12, 6, 32, 18, 14, -2));

console.log(Math.max (-3, 9, 21, 36, 27, 54, 17, 35));

//Exercice : Aléatoire

var add1 = -12;
var add2 = 54;

console.log(add1+add2);

 console.log('-------------');



var floatBateau = 10.4
var couleBateau = (Math.floor(floatBateau));
var voleBateau = (Math.ceil(floatBateau));

console.log(floatBateau);
console.log(couleBateau);
console.log(voleBateau);


console.log('-------------');

//Exercice : Aléatoire

var aleatoire = Math.random()*(50) + 50;


    console.log(aleatoire);

/*
function youpie(min, max){
    min = Math.ceil(0);
    max = Math.floor(1);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(youpie);
*/

console.log(Math.round(Math.random()));


let min = 0;
let max = 10;

console.log(Math.round(Math.random() * (10)));
