var x1 = 10;
console.log(x1);
var x2 = "Shah";
console.log(x2);
var x3 = true;
console.log(x3);
var x4 = 1000;
console.log(x4);
var x5 = false;
console.log(x5);
var x6 = "Nawaz";
console.log(x6);
//creatting object using json concept in typescrit
var obj = {
    name: "Shahnawaz",
    age: 25,
    job: "Develomper"
};
console.log(obj);
console.log(obj.name);
console.log(obj.job);
var array1 = [5, 2, 52, 62, 221, 2322, 28222222];
for (var i = 0; i <= array1.length - 1; i++) {
    console.log(array1[i]);
}
function addingNumber(x, y) {
    console.log("Shahnawaz");
    return x + y;
}
var sum = addingNumber(5, 7);
console.log(sum);
function digits(x1, x2) {
    return x1 + x2;
}
console.log(digits(5, 6));
function charect(name, sirname) {
    if (isNaN(sirname))
        console.log("plese provide another number to prform arithmentic opergaion wiht first number ".concat(name));
    else
        console.log(name + sirname);
}
// charect('Shahnawaz');
charect(20);
charect(10, 25);
function defaultParam(s1, s2) {
    if (s2 === void 0) { s2 = 10; }
    return s1 + s2;
}
console.log(defaultParam(50, 40));
function restParam() {
    var value = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        value[_i] = arguments[_i];
    }
    console.log(value);
    for (var i = 0; i < value.length; i++) {
        console.log(value[i]);
    }
}
restParam(51, 213, "shahnawaz");
function restParam1(s3) {
    var values = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        values[_i - 1] = arguments[_i];
    }
    console.log(values);
    console.log(s3);
}
restParam1(12, 24, "shahnawza", 52.0, 12);
//arrow function
var addval = function (z1, z2) {
    return z1 + z2;
};
console.log("FFFFF", addval(20, 30));
//no return keyword used in ths function
var noReturnAndFloverBracket = function (a1, a2) { return a1 + a2; };
console.log(noReturnAndFloverBracket(20, 60));
var return100 = function () {
    return 100;
};
console.log(return100());
//enum
var ColorVal;
(function (ColorVal) {
    ColorVal[ColorVal["GREEN"] = 0] = "GREEN";
    ColorVal[ColorVal["BLUE"] = 1] = "BLUE";
    ColorVal[ColorVal["RED"] = 2] = "RED";
    ColorVal[ColorVal["YELLO"] = 3] = "YELLO";
})(ColorVal || (ColorVal = {}));
;
console.log(ColorVal);
//creatng class 
var ClassName = /** @class */ (function () {
    function ClassName() {
        this.firstname = "Shahnawaz";
        this.sirname = "Ahmad";
    }
    return ClassName;
}());
var className = new ClassName();
console.log(className.firstname);
console.log(className.sirname);

   
// for( var i:number = 0 ; i<ColorVal ; i++ ){
//        console.log(ColorVal[i]);
// }
// var names:string = "Shahnawaz Ahmad";
// console.log(names);
// function fuck(a: number, b: number): number{
//      return a+b;
// }
// const  result : number = fuck(5,6);
// console.log(result);
// document.write("hello");
