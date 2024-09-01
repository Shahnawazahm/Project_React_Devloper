/*

var x1:number = 10;
console.log(x1);

var x2:string = "Shah";
console.log(x2);

var x3:boolean = true;
console.log(x3);

var x4:any = 1000;
console.log(x4);

var x5:any =false;
console.log(x5);

var x6:any = "Nawaz";
console.log(x6);

//creatting object using json concept in typescrit
var obj={
name:"Shahnawaz",
age:25,
job:"Develomper"

}

console.log(obj);
console.log(obj.name);
console.log(obj.job);

         //creating array varaiable
var array1: number[] =[5,2,52,62,221,2322,28222222] ;

for( var i:number=0; i<=array1.length -1; i++){
       console.log(array1[i]);
}


    //normal function
 function addingNumber(x:number, y:number):number {
   
   console.log("Shahnawaz");
       return x+y
}

var sum:number =  addingNumber(5,7);

console.log(sum);


function digits(x1: number, x2:number): number{
      return x1+x2;

}

console.log(digits(5,6));

          //optional parameter where we use ? after variable

function charect(name: number , sirname?:number ):void{
       if(isNaN(sirname))
              console.log(`plese provide another number to prform arithmentic opergaion wiht first number ${name}`);
       else
              console.log(name+sirname);
}

// charect('Shahnawaz');
charect(20);
charect(10,25);
 
         //default parameter where we default values of parameter variable inside the paranthesis

function defaultParam(s1: number, s2:number=10): number{
       
       return s1+s2;
 
 }
 console.log(defaultParam(50,40));

       //restParam using ...value consisdered as array 

  function restParam(...value:any[]):void {
           
       console.log(value);
       for(var i:number = 0; i<value.length; i++){
                    console.log(value[i]);
       }
 }
 restParam(51,213,"shahnawaz");
 function restParam1(s3:number , ...values:any[] ):void{
              console.log(values);
              console.log(s3);

 } 

 restParam1(12,24,"shahnawza",52.0,12);
    
        
           //arrow function

 var addval = (z1:number, z2:number):number=>{
       return z1+z2;
 }
 
   console.log("FFFFF",addval(20,30));


   //no return keyword used in ths function

var noReturnAndFloverBracket = (a1:number,a2:number)=> a1+a2;

console.log(noReturnAndFloverBracket(20,60));

var return100 =():number=>{
    return 100;   

}
console.log(return100());

                     //enum

 enum ColorVal{
   GREEN,
   BLUE,
   RED,
   YELLO
 };
console.log(ColorVal);

        //creatng class 

    class ClassName {

       firstName:string;
       sirName:string;
       a1:number= 12;
       a2:number=12;
       constructor(){
              this.firstName = "Shahnawaz";
              this.sirName ="Ahmad";
       }


       test(){
            this.a1;
            this.a2;
            this.firstName="Dilnawaz";
            this.sirName ="Ahmad";
            console.log(this.firstName+this.sirName);
            console.log( this.a1*this.a2);
       }
    }

    
   var className = new ClassName();
    
    
   console.log(className.firstName);
    console.log(className.sirName);
    className.test();
    
      */    

         //create constructor with argumnet

         class CreateConstructor {
           x:number;
           y:number;

           constructor(x:number,y:number){
                 this.x= x;
                 this.y=y;
                 console.log(`value of x = ${this.x}
                              value of y = ${this.y}`);
           } 

         }
      

        var createConstructor = new CreateConstructor(20,30);


       //interface


       interface FirstInterface{
            readonly v1 :number;
             v2 :String;
             fun():void;
             
       }

         class ImplememtInterface implements FirstInterface{

              readonly v1=10;
              v2="Shahnawaz";
                  constructor(){
                     console.log(this.v1, this.v2);
                  }

              fun():void{
                  console.log(this.v1,this.v2);
              }
              
         }

         var implememtInterface = new ImplememtInterface();
implememtInterface.fun();
// implememtInterface.v1=10;
implememtInterface.v2="meh";


// for( var i:number = 0 ; i<ColorVal ; i++ ){
//        console.log(ColorVal[i]);
// }x 






// var names:string = "Shahnawaz Ahmad";
// console.log(names);

// function fuck(a: number, b: number): number{
//      return a+b;
  
// }

// const  result : number = fuck(5,6);
// console.log(result);

// document.write("hello");

