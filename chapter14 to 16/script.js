document.writeln(
    `
    <h2> <center> Chapter 14 to 16 </center> </h2>
     <h3> <center> Arrays </center> </h3>
    `
)

//QUESTION 1 . Declare an empty array using JS literal notation to store student names in future.

var studentnames = [];
studentnames.push("Asad");
studentnames.push("Areeba");
studentnames.push("Nawal");

console.log(studentnames);

//QUESTION 2 . Declare an empty array using JS object notation to store student names in future.
var studentnames = new Array();
studentnames.push("Asad");
studentnames.push("Areeba");
studentnames.push("Nawal");

console.log(studentnames);

//QUESTION 3 .Declare and initialize a strings array

var studentname = ["Aisha" , "abada" , "momina"];
console.log(studentname);

//QUESTION 4 .Declare and initialize a number array.

var number = [5, 10, 15, 20, 25];
console.log(number);

//QUESTION 5 .Declare and initialize a boolean array.
var booleans = [true, false, true, false];
console.log(booleans);

//QUESTION 6.Declare and initialize a mixed array.
var mixedarr = ["Abada", 90, true ,"Alisha",false, 200];
console.log(mixedarr);


//QUESTION 7  Declare and Initialize an array and store available.
var education = ["SSC", "HSC", "BCS" , "BS", "BCOM", "MS", "M", "Phil", "PhD"];
document.writeln("<h2>Education Qualifications in Pakistan:</h2>");
document.writeln("<ol>");

for (var i = 0; i < education.length; i++) {
    document.writeln("<li>" + education[i] + "</li>");
}
document.writeln("</ol>"); 

//QUESTION 8  Write a program to store 3 student names in an array.

var studentname = ["seher", "zayd" , "rimsha"];
var score = [320,230,480];
var totalmarks = 500;

document.writeln("<h3>ANSWER :7</h3>")

document.writeln("Score of " + studentname[0] + " is " + score[0] +
". Percentage: " + (score[0] / totalmarks) * 100 + "%<br>");

document.writeln("Score of " + studentname[1] + " is " + score[1] +
". Percentage: " + (score[1] / totalmarks) * 100 + "%<br>");

document.writeln("Score of " + studentname[2] + " is " + score[2] +
". Percentage: " + (score[2] / totalmarks) * 100 + "%<br>");


//QUESTION 9 
// document.writeln("<h3>ANSWER: 9 </h3>");


// var colors = ["Red", "Yellow", "Green", "Blue", "Pink"];
// document.writeln("<h3>Original Colors:</h3>" + colors + "<br>");

// ////////////// A ///////////
// // var addStart = prompt("Which color do you want to add at the beginning?");
// colors.unshift(addStart);
// document.writeln("<h3>After adding at the beginning:</h3>" + colors + "<br>");

// /////////////// B ////////////////
// // var addEnd = prompt("Which color do you want to add at the end?");
// colors.push(addEnd);
// document.writeln("<h3>After adding at the end:</h3>" + colors + "<br>");

// //////////////////// C ///////////////
// colors.unshift("Orange", "Black");
// document.writeln("<h3>After adding two colors at the beginning:</h3>" + colors + "<br>");

// ////////////////// D //////////////////
// colors.shift(); 
// document.writeln("<h3>After deleting first color:</h3>" + colors + "<br>");

// /////////////////// E /////////////////
// colors.pop();
// document.writeln("<h3>After deleting last color:</h3>" + colors + "<br>");

// ////////////////////// F ///////////////////
// // var addIndex = +prompt("At which index do you want to add a color?");
// // var colorName = prompt("Enter the color name to add:");
// colors.splice(addIndex, 0, colorName);
// document.writeln("<h3>After adding color at index " + addIndex + ":</h3>" + colors + "<br>");

// ////////////////////// G ////////////////
// // var delIndex = +prompt("At which index do you want to delete colors?");
// // var delCount = +prompt("How many colors do you want to delete?");
// colors.splice(delIndex, delCount);
// document.writeln("<h3>After deleting " + delCount + " color(s) from index " + delIndex + ":</h3>" + colors + "<br>");

//QUESTION 10
// document.writeln("<h3>ANSWER: 10</h3>");
// var scores = [320, 230, 480, 120];
// document.writeln("<h3>Scores of Students:</h3>" + scores + "<br>");


// scores.sort(function(a, b) {
//     return a - b;
// });

// document.writeln("<h3>Ordered Scores of Students:</h3>" + scores);

//QUESTION 11
// document.writeln("<h3>ANSWER: 11</h3>");
// var cities = ["Karahi","Lahore","Multan","Islamabad","Peshawar","Quetta"];
// var selectedcity = cities.slice(2,5,0)

// document.writeln("<h3>Cities List:</h3>" + cities + "<br>");
// document.writeln("<h3>Selected Cities List:</h3>" + selectedcity);

//QUESTIOIN  12

var myarray =["This","is","My","Cat"];

var answer = myarray.join(" ");

document.writeln("<h3>Array:</h3>" + myarray + "<br>");
document.writeln("<h3>String:</h3>" + answer);

//QUESTIOIN  13
document.writeln("<h3>ANSWER: 13 (FIFO)</h3>");

var fifoArray = [];
fifoArray.push("Keyboard");
fifoArray.push("Mouse");
fifoArray.push("Printer");
fifoArray.push("Monitor");

document.writeln("<h3>Full Array:</h3>" + fifoArray + "<br>");

document.writeln("<h3>Output:</h3>");
document.writeln(fifoArray.shift() + "<br>"); 
document.writeln(fifoArray.shift() + "<br>"); 
document.writeln(fifoArray.shift() + "<br>"); 
document.writeln(fifoArray.shift() + "<br>");

//QUESTION 14
var devices = [];

devices.push("Keyboard");
devices.push("Mouse");
devices.push("Printer");
devices.push("Monitor");

document.writeln("<h3>Devices:</h3>" + devices + "<br><br>");

document.writeln("<h3>Output:</h3>");
document.writeln(devices.pop() + "<br>");
document.writeln(devices.pop() + "<br>");
document.writeln(devices.pop() + "<br>");
document.writeln(devices.pop() + "<br>");


//QUESTION 15
document.writeln("<h3>Answer: 15</h3>");

var phones = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];

document.writeln("<select>")

for(var i =0; i<phones.length; i++){

    document.writeln("<option>" + phones[i] + "</option>")

}

document.writeln("</select")
