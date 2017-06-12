//Exercice : Juste prix

    //Déclarez les variables suivantes :

var message        = " ";
var compteEssai    = 0;
let min            = 20;
let max            = 80;

function aleatoir(){
    var resultat_arondi = Math.random() * (max - min) + min;
    return Math.round(resultat_arondi);

    }
//console.log(aleatoir());



console.log('---------------------------------------');

console.log('---------------------------------------');


var chiffre_a_trouver = aleatoir();

console.log( chiffre_a_trouver )

function testNum(verif){

    if(chiffre_a_trouver > verif){
        return "C'est plus";
    }

    else if(chiffre_a_trouver < verif){
        return "C'est moins";
    }

    else if(chiffre_a_trouver == verif){
        return "C'est juste tu as trouvé en x coups";
    }




}

//testNum(40);

console.log();
