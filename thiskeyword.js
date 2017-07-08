/*

function tets () {
console.log(this);

}

tets();
*/
// returns windowe object. and in strict mode ; it will return undefined. 
/*
var person = {
    name : "mahesh",
    print: function () {
        console.log(this.name);

    }
};

person.print();
*/
// this is pointing to this object (person) . how fn work is 'this' wont alwayas 
//necessarly point to object   which it was defined on. ie , not static and 
// this is resolved at runtime.
/*

*/
/*
var button = document.getElementById("button-1");

/*
button.addEventListener("click",function () {
// this will bring window.
console.log(this);
this.innerText = "CLikced";
});

*/
/*
var person = {};
person.firstName = "Mahesh";
person.printname = function () {
console.log(this.firstName);
};
// gives a blank.
button.addEventListener("click",person.printname);
*/
// this always resolves to runtime. 
/*
var array = [1,2,3,4,5];


array.forEach(function (item) {
    console.log(item);
});

var me = ["hello","buddy"];
me.forEach(function (item) { console.log(item);})


var log = console.log;
log("Hello ,World");
*/
/*
var personDataBase  = {
    title : "Employees" , 
    people : ["Mahesh","Kathu","Dinesh","Anki"],
    print : function () {
        // this 
        this.people.forEach(function(element) {
            // ! this . there is no this / context inside the forEach loop.
            console.log(this.title + "" + element);
        });
    }
};
 
*/

var personDataBase  = {
    title : "Employees" , 
    people : ["Mahesh","Kathu","Dinesh","Anki"],
    print : function () {
        // provide lexical scoping so that its referenced inside closure 
        // with the parent scope value.
        // should always use this in for Each.
        var that = this;
        this.people.forEach(function(element) {
            // ! this . there is no this / context inside the forEach loop.
            console.log(that.title + "" + element);
        });
            // OR
        this.people.forEach(function(element) {
            console.log(this.title + "" + element);
        }, this);
    }
};


 personDataBase.print();


// forEach accepts two params . 1 is call back and other is this arg.


