var people = ["mahesh","kathu","dinesh","anki"];
 var list = document.getElementById("people-list");
/*

for(var i=0;i< people.length ; i++) {
    var person = people[i];
    var element = document.createElement("li");
    element.innerText = person;
        element.addEventListener("click",function () {
            console.log("You clicked" + person);
        });
    document.getElementById("people-list").appendChild(element);
}*/

 
//scope is where variables live in memory.
//var a ; new memory is created. if not , creating it above the scope.. Global scope here.
/*
var a =42;
var b = 57;
function example2() {
    var a = b = 10;
}

console.log(a + "" +b);

example2();

console.log(a + "" +b);


function example2_clear() {
    var a = 10;
    b = 10;
}

// attaching to global scope and shared.
// global scope is window. If no var while declaring varaible , then 
// window.var also give the value and is also called Global Context.
// When do not use var in a function , memory is attached to Global object.
// in browser , its windows scope.

function example3_core () {
for(i=0;i<10;i++) {
    console.log(i + "*30" + (i*30));
}
}

function example3() {
    i=1;
    j= 1;
    example3_core();
    console.log(i+j);

}
example3();
*/

// Example 4
//We use var to create local variable. also , it didnt detach the variable. 
// local variables are tied to the function , scopes are created by 
//function encapsulate data.They are hungs of memory where data lives. 
// Always knwo which function , scope the variable is attached to.
/*
var a = 42 ;
var b = 57;

function example4 () {
    var a = 10;
    var b = 10;
    console.log (a , b);

}

example4();

    console.log (a , b);


    */

    //Exmpale 5
/*
    var a = 10;
    function example5() {
        var a = 20;

        function inner() {
            var a = 30;
            console.log("inner" + a);
        }
        inner() ; 
        console.log("Outer" + a);
    }

    example5();
    console.log("Global" + a);
*/

// parameters are considered as var by default by the js engine. 
/*

for (var i=0 ; i< 10 ; i++) {
    if(i==5) {
        var me = "hei you!!";
    }
//usually expects a compiler error.But it is not!!
//block level statement like < , condition , switches >
//it wont create Scope.
//re-using variables is a bad idea. variables are not 
//assigned to the closest function / scope and not to the block level
//statemtn.
    console.log(me);
}
latest version of javascript support and will be covered later. 
scope is where its attached to the memory.

//runtime allocate  enough memory to execute the function 
counts the var statement inside the function and allocate 
the memory.
*/

//Immedeitly invoked function expression
// 3 ways to call function in JS.
// function e () { console.log('');} -> Function decoration
// var a = function () {}  -> Funciton expression.

// Difference is actually creating a variable , attach to global scope. 
//then assign function expression.

//var a = function test() {}; - > Named function expression.
// named function cannot be accessed outside the scope. 
// useful only for recursion. Misbehaves in IE8 and below.
// also ; cannot call test(); still should use a();


// if i wont want the fucntion to be called from console , private function.
// create new scope 
/*function example10() {
function myPrivateFunction() {
    console.log("I am private");
}

}
*/
/*Issues
1. Example 10 is not private function. 
2.Selectively want to have some function public as well.
*/

/*
function me () {

function d () {
    console.log("I am private");
}
window.you() = function () {
console.log("helo");
d();
};
window.yours() = function () {
console.log("yours");
d();
};
}

This means , the funciton is attached to the me scope and hence d is 
accessible. and is private and only those function can access it. 
And it can be acessed from console as well.
But wrapper function has a name and is public.
say me();me();me(); -> nothing happens.
and then public function. all the local variable re-sets. 
since calling me ; creates a memory and then resets the value 
so when publically access ; issue.
*/

//IIFE . engine interprets and a function decoration ; 
//trick that its a function decoration. says its an expression mode.
//but its garbage collected. since its not invoked. invoked by ()
// since no name ; canot call it. or call function inside it.
// to expose is by window.
/*(function (thing) {
console.log(thing)
    var me = 1;
console.log("hey");
    function private () {
        console.log("I am private");
    }
    window.test = function () {
        console.log("I am a function");
        private();
    };
})("haha nothing"); */

// created a scope and is attached to FE ; not to global scope and didnt coz it
//has no name.this is typically done while implementing jQuery. if we dont like $;
// (function ($) {})(jQuery) 
// OR
// (function(global) {  global.XXX})(window);
//** Hoisting */
//function exa() {
 //   a = 20; // Left hand refernce of variable.
  //  console.log(a); // right hand reference;
   // console.log("end of function");
//}

//exa ();

/*
function re() {
    console.log(a); // its now undefined.
    console.log("me");
    var a ;
}
*/
/*
function re2() {
console.log(a);
console.log("ENd");
var a =10; // when compiler sees - var a ; a  =10;
//declaration happens ; all declaration happens at top.
// but execution happens only in order. thats y 
//10 is not assigned. this process is called hoisting.
}
*/
// when runtime sees a var keyword ; it figures all  out before executing the function
// thats y the variable is bound to the scope. closest function.
// it attached to the function before function is executed. 
// pull something up.


// Function hoisting. - function declarations  are also hoisted to the top of file. 
//before executing it. 
/*
function 13a() {
    console.log("I am a function");
    inner();
    return;

console.log("Dead Code"); 

    function inner() {
        console.log("I am inner");

    }   

} */

// This example will give an error. Since the hoisting variable .
// declaration + decoration = > function expression. so will give error.
/*function ex2() {
    console.log("me");
    inner();
    return ;
    var inner = function () {
        console.log("I am inner");
    };
}*/

// function declaration is like a block ; and function expression is like 
// fefining , so use ;

// take named function expression. is same as function expression.

// lexical static dynamic scope.
// all language hsa the scope.

// lexically / statically scoped - most languages. 
// dynamically typed not equals static scope - JS
// C# is static scope and static typed.

// Statically scoped is like where physically located in the file. 
// lexi - to read ; JS has component inside compiler called lexer. Before 
// executed to VM. Lexer ; translated to tokens. 
// reading through it says ; which variable to scoped where. 
/*
function ex15(){
    console.log(a);
}

function ex15_b(){
    var a = 20;
    ex15();
}

var a = 30;
ex15();
ex15_b();
*/
// 20 and 20 ; because a is bound at compiled time. v8 chrome. 
// it doesnt konw when the fucntion is going to execute. 
// during compile tym ; reference variable to proper scope.
// and no idea if b is before a ; thats y compile tym scopppung.
// thats y it works in inner function basd on inner value.

/*
// bad practice.
function ex_16 (obj)
{

    var a = 100;
    // with opens a dynamic scope. By using it ; which ever passed; becomes the scope.
    // anytihng with with will override all scope. It moves up the scope
    // also hits perf since compiler cant do optimizations.
    // not allowed in strict mode.
    // 
    with(obj) {
        console.log(a);
    }
}

ex_16({a:42});ex_16({a:46});ex_16({});

*/


// Closures. 
// Its a function  refers to variables in parent scope. 
/*
function ex_167(callback) {
callback(1);
callback(2);
callback(3);
}

ex_167(function(arg) {
console.log(arg);
});

// FE passing as argument and passing as argument and invoking the function.
//IIFE as param
// higer order function. it acccept function as parameter.
eq
var callback = function (a) {
console.log(a);
}
*/
//Function as parameter
/*
function filterarray(array,predicate) {
    var result = [];
    for(var i=0;i< array.length ; i++){
        var item = array[i];
        if(!predicate(item)) 
            continue;
            result.push(item);
    
}
return result;
}
var array = [1,2,3,4,5,6,7];
var result = filterarray(array , function (item){
    return item < 4;
});
console.log(result);
//Function as return 
function lessThanFiler (lessthan)
{
    //closure. Creating another function which has scope in it. 
return function(item) {
return item < lessthan;
};

}
// factory pattern.
var lessthan5 = lessThanFiler(5);
console.log(lessthan5(3),lessthan5(10));
// write a fn ; returns a fn ; constructed a function ; can be called as function factory. 
// - > excellent use case.
console.log(filterarray(array , lessThanFiler(2)));
// closure : returning a new  function ;Fcuntion  which has scope.
//also takes along with it , the scope of parent function. lessthanFiler.
//lexical analysis. 
//  new Scope created by creating function lessThanFilter. has one variable. 
// then FE ; creates another scope. item is bound to closure. 
//But function param (lessthan) is associated wit the scope of factory function which is lessThanFilter.
// Every time invoke the function lessthanfiler ; we get a new instance of lessThanFilter scope. 
// lexical scope. is there. so less than is bound to scope. 
// when call it ; new instance of closure.uses a different instance of scope. 
// lessThanFiler(2) and lessThanFiler(5) gives two isntance of closure. it also 
//carries the scope of lessThankFilter/

*/

// Lexical and  runtime scoping. 
// scope has two var ; pwd and called count. 
// its identified as closute.variables - referencing variable outside its scope. ie ; from  parent scope
// carries its scope and parent scope for an instantiation.
/*
function validatePwd(pwd) {
    var calledCount =0 ;
    return function (attempt) {
        calledCount++;
        console.log("validator for" +pwd+ "called:" +calledCount+ "times");
        return attempt == pwd;
    };
} 

var validateA  = validatePwd("passworda");
validateA ("1");
validateA ("2");
validateA ("3");
validateA ("passworda");
makes the count to 1 ; 2; 3 ; 4
var validateB  = validatePwd("passworda");
*/
// Is another source of memory leak ; since the memory associated with the closure wil not
// be garbage collected till the memory allocated with validateA is released. ; so whould
// assign to null. 

// babel is a transpiler - > converts typescripts for certain  browser to understanding scripts. 

// Eg :  this works because of hoisting. and there is no scope for block level.
/*
function ex22 () {
if(true) {
    var test = "";
}
console.log(test);
}

*/
/*
// es 2015 ; new keywords are let and const ; both helps in creating block level variable.

function ex23() {
    if(true) {
        let test = "me";
    }
    console.log(test);
}

ex23();
*/

// eg - 23
// no different than whats broke. // since let is a block level varaible. 
//blocks are creating scopes. Instead of creating closure ; its creating block
// and block is creating scope. Should take babel tool and convert to js. 
// babeljs.io
// babel converted to var t = function () {} and its calling t in a loop of people.
/*
console.log('here');
for(let i = 0 ; i < people.length ; i ++) {
    let person = people[i];
    let element = document.createElement("li");
    element.innerText = person;
    element.addEventListener("click" , function () {
        console.log("clicked : " + person);
    });
    list.appendChild(element);
}
*/
/*
/*
creates two var : transpiled by babel.
let test = 20 ;
if(true) {
    let test = 30;
    console.log(test);
}
console.log(test);
*/

// Const keyword.
/*
const me = 20;
me = 30; // Cannot assighn 
// can change the object ; but not the reference. 

eg: const you = {"mahesh":"brentwood"};
you.mahesh = "Connecticut"; // works
but you = {} ; doesnt work.

// helps accidentyl preventing variable. 
// performance implication. can provide optimization using const. 
// this cannot be used in for loop since this will be modified. 
// use ts and use babel io for script ;)
*/