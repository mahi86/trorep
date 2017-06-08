
(function(){
    console.log("my First File");
})();

var people = ["Mahesh","Kathu" ,"Kochu","Anki"];
var list = document.getElementById("people-list");

console.log(people.length);
/*
for(var i = 0 ; i < people.length ; i++) {
var pp = people[i];
var element = document.createElement("li");
console.log(pp);
element.innerText = pp;
element.addEventListener("click",function () {
console.log("clicked on" + pp);
});
list.appendChild(element);
}
*/
/*
for (var i =0 ; i< people.length ; i++) {
var pp = people[i];
var element = document.createElement("li");
prepareElement(element ,pp);
list.appendChild(element);
}
function prepareElement (element , people) {
    element.innerText = people;
element.addEventListener ("click",function (){
    console.log("clicked" + people);
});

}

*/
/*
for (var i =0 ; i< people.length ; i++) {
var pp = people[i];
(function (people) {
var element = document.createElement("li");
 element.innerText = people;
element.addEventListener ("click",function (){
    console.log("clicked" + people);
});
list.appendChild(element);
})(pp);


}

*/
/*
function forEach(array , callback) {
for (var i =0 ; i< array.length ; i++) {
callback(array[i]);
}
}

forEach(people , function (people) {
var element = document.createElement("li");
 element.innerText = people;
element.addEventListener ("click",function (){
    console.log("clicked" + people);
});
list.appendChild(element);

});

*/