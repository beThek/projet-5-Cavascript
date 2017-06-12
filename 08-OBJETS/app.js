//Exercice : PNJ (Personnage non-joueur)



let Character = {
    name      : "MiniMoi",
    age       : 322,
    items_to_give    : ["MackbooK", "Range Rover", "Wireless"],
    giveItem : function(){
         var result = Math.round(Math.random()*2);

        console.log(result);
        console.log(Character.items_to_give[result]);
    }
};
Character.giveItem();

for(let key in Character){
    console.log( Character[key] );
}





console.log('---------------------------------------');

console.log('---------------------------------------');



//Exercice : Shop

var objet_par_default = ["épée", "hache", "sceptre"];

let Shop = {

    title : "name",
    physic: 0,
    magic:0,
    minLevel:0,
    available:true,
} // ATTENTION TERMINER EXERCICES !
