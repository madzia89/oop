var someCat = {
    name : 'melodia',

    age : 1,

    sound: 'meow',

    makesound: function (){
        console.log(this.sound)
    },

    speak: function(){
        console.log('cats don\'t speak')
    }
}


someCat.makesound()
someCat.speak()