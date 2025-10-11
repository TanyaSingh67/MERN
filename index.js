//to import a module in another module we use require
let math= require("./math").default
//here./ means current directory
//if we won't use ./ the node js will look for the module in the node_modules folder

console.log(math.add(2,3));
console.log(math.subtract(5,3));