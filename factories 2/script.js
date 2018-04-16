function makeDog(name, age, sound){         //// we want to produce new dogs with different names, age and woof!
    return {
        name: name,
        age: age,
        color: "darkgray",
        sound: sound,
        makeSound: function(){console.log(this.sound)},
        tailWave: "waves tail when happy"
    }
}

var dogs = [["Ramzes", 2, "woof woof"], ["Faraon", 3, "deep wooooof"], ["Zygmunt",4, "meow"]]

var newDogs = dogs.map(function(dogsNames){
    return makeDog(dogsNames[0], dogsNames[1], dogsNames[2])  // [0] - imię, [1] - wiek, [2] - sound
})

//   PONIŻEJ INNY ZAPIS TEJ SAMEJ FUNKCJI MAP
// var dogs = [
//    {name: "Ramzes", sound: "woof woof"},
//     {name: "Faraon", sound: "deep wooooof"},
//     {name: "Zygmunt", sound: "meow"}
// ]
//
// var newDogs = dogs.map(function (dogs){
//     return makeDog(dogs.name, dogs.sound)
// })