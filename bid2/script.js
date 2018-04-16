function showThis(){
    console.log(this)
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
car.showThis = showThis.bind(car)
var boundReturnX = car.showThis