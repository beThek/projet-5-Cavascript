            //VARIABLES


//Exemple :
/*var bonjour = "Hello world!";

console.log(bonjour);
*/

/*
//Exercice : Diseur de bonne aventure

var nombre_denfants = 5;
var nom_dune_femme = "Justine";
var nom_dun_pays = "Dubai";
var métier = "Plombier";

console.log('Vous serez '+métier+' et habiterez à '+nom_dun_pays+ ' et marié à Justine avec '+nombre_denfants+' enfants');
*/



/*
//Exercice : Calculer l'age

var année_courante = 2017
var mon_année_de_naissance = 1985;

console.log(année_courante+ - +mon_année_de_naissance);
*/

/*
//Exercice : Bientôt vieux

var mon_age = 31;
var age_max = 100;
var denree_alimentaire = "feculent";
var conso_par_jour = 2;
var nombre_denree = ((conso_par_jour)*(age_max-mon_age))*365;

console.log('Il vous reste '+ nombre_denree+' de '+denree_alimentaire+' avant datteindre lage de ' +age_max);

*/

/*
//Exercice : Priorités: pemdas

var result = (1 + 2) * 3 + 4 / 2;
console.log(result);

console.log('1+2');
console.log('3*3');
console.log('4/2');
console.log('9+2');
*/

 //Exercices : LogiqueExercices : LogiqueExercices : LogiqueExercices : LogiqueExercices : LogiqueExercices : LogiqueExercices : Logique


//Exercice : Langues ATTENTION ! : A REVOIR

/*
    var langue1 = "chinois";
    var langue2 = "espagnol";
    var langue3 = "anglais";
    var msg = "ceci est la bonne langue";
    var msgbad = "ceci nest pas votre langue";


if(langue1 === "chinois"){
    console.log(msg);
}
if(langue2 === "expagnol"){
    console.log(msg);
}
if(langue3 === "espagnol"){
    console.log(msg);
}
else{
    console.log(msgbad);
    }
*/

//Exercice : Affichage des scores ATTENTION ! : A REVOIR
/*
var score = 100;
var resultat = score;

if (score >= 90){
    console.log("rang A");
}
if (score >= 90){
    console.log("rang B");
}
else if (score <= 50){
    console.log("rang C");
}
*/

/*
//Exercice : Mettre au pluriel :  REVOIR

var singulier ="pomme";
var nombre = 4;
var resultat_pluriel = "pommes";

if (nombre >1) {
    console.log("j'ai 4"+resultat_pluriel)

}
else {
    console.log("je n'ai qu'une pomme");
}

*/

        // 03-FONCTIONS

//Exercice : Calculs

/*
var resultat = "Hello World!"; // = ignitiation + assignation
    resultat = "Hello my friend";
    resultat = 200;
    console.log(resultat);
*/



/*
function faisQuelqueChose(){
    var ville = "bruxelles";
    console.log(ville);
}

faisQuelqueChose();
*/
//la bonne pratique de lecriture de fonction cf. ci-dessou = gain de temps !!!
/*
//THEORY
var maFonction = function(prenom = "Alex"){
    var pays = prenom+ " Belgique";
//    console.log(pays);
    return pays;
}

var monPays1 = maFonction("teddy");
var monPays2 = maFonction("jo");
var monPays3 = maFonction("dan");
console.log(monPays1);
console.log(monPays2);
console.log(monPays3);
console.log();
*/
//SOUSTRACTION
var maSoustraction = function(soustraction1, soustraction2){
    var equationsous = soustraction1 - soustraction2;
    return equationsous;

}
console.log( maSoustraction(74533, 26000));

//DIVISION
var maDivision = function(division1, division2){
    var equationdiv = division1  / division2;
    return equationdiv;
}
console.log(maDivision(4800, 4800));

//MULTIPLICATION
var maMultiplication = function(mult1, mult2){
    var equationmult = mult1 * mult2;
    return equationmult;
}
console.log(maMultiplication(1244,28));

//POURCENTAGE
var monPourcentage = function(a, b){
    var equationpourcent = (a * b)/100;
    return equationpourcent;
}
console.log(monPourcentage(50, 10));

//KM/H
var maDistance = function(a, b){
    var equationDistance = (a * b);
    return equationDistance;
}
console.log(maDistance(50, 3));
