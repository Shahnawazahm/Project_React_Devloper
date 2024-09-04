console.log(2==3); //false
console.log(2==2)//true
console.log("hel");
console.log(2==2.0)//oops! Still true
console.log(2===2.0) //true, because in js internally int is converted to float
console.log(''=='') //true

let var0= ''
let var1=''
console.log(var0==var1) //true

var0={}
var1={}
console.log(var0==var1) //false
//this will return false, here var0 contains empty object while var0 contains empty object too but with different structure 
console.log(var0===var1) //false
//same goes with this

//but other ways are also around 

var0={}
var1=var0

console.log(var0==var1) //this will return true
console.log(var0===var1) //this too will return true