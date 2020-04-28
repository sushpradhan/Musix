const Calculator=require('./scientific calculator')

const readlineSync=require('readline-sync')

const addition=Calculator.addition;
const subtraction=Calculator.subtraction;
const multiplication=Calculator.multiplication;
const division=Calculator.division;
const square=Calculator.square;
const cube=Calculator.cube;

console.log("welcome");
console.log("press 1->addition");
console.log("press 2->subtraction");
console.log("press 3->multiplication");
console.log("press 4->division");
console.log("press 5->square");
console.log("press 6->cube");

var x=0;
var y=0;
const input2=()=>{
x=readlineSync.questionInt("Enter first number:");
y=readlineSync.questionInt("Enter Second number:");
}

var m=0;
const input1=()=>{
m=readlineSync.questionInt("Enter the number:");
}


switch(readlineSync.questionInt("Enter your choice for calculation")){

    case 1:input2();
           console.log(addition(x,y));
           break;
    case 2:input2();
           console.log(subtraction(x,y));
           break;
    case 3:input2();
           console.log(multiplication(x,y));

           break;
    case 4:input2();
           console.log(division(x,y));
           break;
    case 5:input1();
           console.log(square(m));
           break;
    case 6:input1();
           console.log(cube(m));
           break;
    default:console.log("pl enter valid choice");
}
