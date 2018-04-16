function makeCat(name){                     ///tworzenie nowych kotów o innym imieniu
    return {
            name : name,

            age : 1,

            sound: 'meow',

            makesound: function (){
                console.log(this.sound)
            },

            speak: function(){
                console.log('cats don\'t speak')
            }
        }
    }


// var cat1 = makeCat("meower")     //tworzenie jednego kota o imieniu meower

var catNames = ['Puszek', 'Okruszek', "Reks"]       //tworzenie trzech kotów o tych imionach:

var cats = catNames.map(function (catnameVelElement){
    return makeCat(catnameVelElement)
})

