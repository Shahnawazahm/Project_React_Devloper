//var vs let 

let iamGlobal= 'Global Value'
console.log('outside:'+iamGlobal)

if(true){
    let iamLocal= 'Local Value' //inside block , when we try to access it outside we will get an error as let is limited to block only
    iamGlobal='Global redeclared '
    console.log('Global value printed after redeclare:'+iamGlobal);   
    console.log(iamLocal);   
}
//console.log(iamLocal) //will throw error
console.log('Global value outside:'+iamGlobal)

//now lets rewrite the code and see what happens with the var

let iGlobal='I am global value assigned via let'

if(1==1){
    var iInside ="i am decleared inside block via var"
    console.log('value of var global, inside block:'+iGlobal+'\nValue of variable decleared in this block:'+iInside)
}

console.log('We are outside any block and are in main program')

console.log('value of Global value:'+iGlobal+'\nValue of variable which was initilized with var and inside block:'+iInside);
//value of iInside will be still printed though it was decleared inside block and this is what is called memory leak . 
//if any value is decleared via var, then that value will be visible outside of any block 
//But if any value is decleared via let, that value is visible to that block only. Yeah if that is declread globally then will be visible to whole program
//So, use var or let wisely