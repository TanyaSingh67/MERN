function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

//we aslo need to export these functions from math.js as inside if this they are private
module.exports=add;
module.exports=subtract       //as soon as the second module.exports has been create the first one will be overridden bhy the second one
//to export multiple functions we can use an object

module.exports = { add, subtract };


//If we wnt to export the module with some other name
module.exports={
    addfun:add, 
    subfun:subtract
}