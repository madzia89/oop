function returnX(){
    return this.x
}


returnX()
//undefined - there is no  in window!


var obj = {
    x:42
}

var boundReturnX = returnX.bind(obj) //42 - because bound to obj and obj have x prop - 42