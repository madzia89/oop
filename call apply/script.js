function showThis(){
    console.log(this)
    console.log(arguments)
}

var car = {
    year: 2000,
    color: 'black',
    sound: "brum",
}

var car2 = {
    year: 2018,
    color: 'cosmic-gray',
    sound: "brum bruuuum",
}

showThis.call(car2, 1, 65)
showThis.call(this, 1)

showThis.apply(car2, [1])
showThis.apply(this, [1])