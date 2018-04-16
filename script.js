//declared in global scope

function makeSound(){
    console.log(this.sound)         ///będzie inny console.log dla każdego z obiektow bo konteks this dla każdego o biektu będzie odnosił się do danego obiektu
}


//function called in global scope
// this points at global scope - window object
var cat1 = {
    name: "fluffy",
    sound: "meow!",
    makeSound: makeSound            // w danym obiekcie jest odwołanie do funkcji, która osniesie się do kontekstu tego obiektu i ipokaże meow jaki robi cat1
}

var cat2 = {
    name: "fluffer",
    sound: "meower!",
    makeSound: makeSound        // w danym obiekcie jest odwołanie do funkcji, która osniesie się do kontekstu tego obiektu i ipokaże meow jaki robi cat12
}


//this points at execution context  -cat1 or cat 2 object
cat1.makeSound()
cat2.makeSound()