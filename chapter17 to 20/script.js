document.writeln(
    `
    <h2> <center> Chapter 17 to 20 </center> </h2>
     <h3> <center> ARRAYS AND LOOP </center> </h3>
    
    `
)

// QUESTIOM 1
var multiArray = [[], [], []];
console.log("ANSWER: 1");
console.log("Empty Multidimensional Array:", multiArray);


//Question 2
var multiArray = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];

console.log(multiArray);
for (var i = 0; i < multiArray.length; i++) {
  console.log(multiArray[i].join(" "));
}

//QUESTION 3
for (var i = 1; i <= 10; i++) {
  console.log(i);
}


//Question 4 
// var tableNum = +prompt("Enter table number");
// var tableLength = +prompt("Enter table length");

// document.writeln("<h3>Multiplication Table of " + tableNum + " (Length: " + tableLength + ")</h3>");

// for (var i = 1; i <= tableLength; i++) {
//     document.writeln(tableNum + " x " + i + " = " + (tableNum * i) + "<br>");
// }

//QUESTION 5
var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.writeln("<h3>Fruits List:</h3>");

for (var i = 0; i < fruits.length; i++) {
    document.writeln(fruits[i] + "<br>");
}


//Question 6
 ///////////// counting /////////////////
 document.writeln("<h3> Counting:</h3>");
 for (var i =1; i <= 15; i ++){
     document.writeln(i + ", ");
 }

 /////////////. Reverse counting //////////////
document.writeln("<h3>. Reverse Counting:</h3>");
for (var i = 10; i >= 1; i--) {
  document.writeln(i + ", ");
}


////////// Even /////////////
document.writeln("<h3> Even:</h3>");
for (var i = 0; i <= 20; i += 2) {
  document.writeln(i + ", ");
}

////////  Odd ////////////
document.writeln("<h3> Odd:</h3>");
for (var i = 1; i < 20; i += 2) {
  document.writeln(i + ", ");
}

///////////// Series /////////////
document.writeln("<h3> Series:</h3>");
for (var i = 2; i <= 20; i += 2) {
  document.writeln(i + "k, ");
}

////// QUESTION 7

// var items = ["cake", "apple pie", "cookie", "chips", "patties"];

// // var userInput = prompt("Enter item to search");

// var found = false;

// for (var i=0; i<items.length; i++){
//     if (items[i] == userInput){
//         document.writeln(userInput + " available at index " + i + "<br>");
//         found = true;
//     }
// }

// if(found == false){
    // document.writeln("Sorry " + userInput + " not avilable" +"<br>")


///QUESTION  8 

document.writeln("<h2>Answer 8</h2>")
var A = [24, 53, 78, 91, 12];

var max = A[0]; 

for (var i = 1; i < A.length; i++) {
    if (A[i] > max) {
        max = A[i]; 
    }
}

document.writeln("<b>Array Items:</b> " + A + "<br>");
document.writeln("The Largest number is: " + max);


//QUESTION 9
document.writeln("<h2>Answer 9</h2>")
var A = [24, 53, 78, 91, 12];

var min = A[0];

for (var i = 0; i < A.length; i++) {
    if (A[i] < min) {
        min = A[i];
    }
}

document.writeln("<b>Array:</b> " + A + "<br>");
document.writeln("Smallest number is " + min);

//QUESTION 10 

document.writeln("<h2>Answer 10</h2>")
document.writeln("<b>Multiples of 5 (1 to 100):</b><br>");

for (var i = 1; i <= 100; i++) {
    if (i % 5 == 0) {
        document.writeln(i + ", ");
    }
}


