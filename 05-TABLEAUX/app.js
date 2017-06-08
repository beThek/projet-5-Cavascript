
//Exercices : Tableaux


//var element1 = "Pommes";
//var element2 = "Poires";
//var element3 = "Prunes";

/*
var liste = ["Pommes", "Poires", "Prunes" ];//déclaration du tableau avec attributs

liste.pop();         // RETIRER le dernier élément
liste.push("Fraise");// AJOUTER un élément à la fin

liste.shift("Fraise");// RETIRER le premier élément
liste.unshift("Fraise");//AJOUTER un élément

    console.log(liste);
*/
/*
for(var i = 0; i < liste.lenght; i++){
    console.log( liste[i] );
}
*/
/*
    console.log(liste.length);          //3
    console.log(liste[1]);              //"Poires"
    console.log(liste[liste.length -1]);//"Prunes" sert a trouver un chiffre
*/



//Exercice : addition
/*
var liste = [1, 2, 3, 4, 5, 6, 7, 8, 9];//déclaration du tableau
var add = 0;                            //déclaration valeur add

for(var i = 0; i < liste.length; i++){
    var equation = (liste[i]);

    add = add + equation ; //ceci ou
    //add += liste[i];       //cela    = la même chose mais différente écriture
    //console.log(add);
}
    console.log(add);
*/

//Exercice : Vos meilleurs choix
/*
var nom_acteurs = ["Brad Pitt", "Al Pacino", "Nicolas Cage"];
var ordre = ["premier", "deuxieme", "troisieme"];

for(var i=0; i < nom_acteurs.length; i++ ){
    console.log("Le "+ordre[i]+" est "+nom_acteurs[i]);
}
*/

//Exercice : clone
/*
var my_hero = ["Mario", "Luigi", "Peach"]; // 1ERE option avec slice c un hack
var my_hero2 = my_hero.slice();

my_hero2.push("Browser");

console.log(my_hero);
console.log(my_hero2);
*/

var marioArray = ["Mario", "Luigi", "Peach"]; // 2EME option plus terre à terre sans 

var browserArray = [];

for (var i = 0; i < marioArray.length; i++){

    browserArray.push(marioArray[i]);
}

    browserArray.push('Browser');
    console.log( marioArray);
    console.log( browserArray);
