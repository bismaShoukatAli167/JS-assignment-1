document.writeln(
    `
    <h1> <center> Chapter 12 - 13 </center> </h1>

    <h3> <center>IF…ELSE & ELSE IF STATEMENT,
TESTING SET OF CONDITIONS </center></h3>
    `
)

//Question 1 Write a program that takes a character (number or string)
//in a variable & checks whether the given input is a
//number, uppercase letter or lower case letter. (Hint: ASCII
//codes:- A=65, Z=90, a=97, z=122).

//ANSWER//

// var input = prompt("Enter a character!");
// var ascii = input.charCodeAt(0);

// if (ascii >= 48 && ascii <= 57) {
//     alert("You entered a Number ");
// }
// else if (ascii >= 65 && ascii <= 90) {
//         alert("You entered an Uppercase Letter (A-Z)");
// } 
//  else if (ascii >= 97 && ascii <= 122) {
//         alert("You entered a Lowercase Letter (a-z)");
// } 
//  else {
//         alert("You entered a Special Character or Symbol");
// }

//QUESTION 2 Write a JavaScript program that accept two integers and
//display the larger. Also show if the two integers are equal. 

//ANSWER//
// var number1 = +prompt("Enter first number!"); 
// var number2 = +prompt("Enter second number!");

// if (number1 > number2) {
//     alert(number1 + " is greater than " + number2);
// }
// else if (number2 > number1) {
//     alert(number2 + " is greater than " + number1);
// }
// else {
//     alert("Both numbers are equal.");
// }

//QUESTION 3 Write a program that takes input a number from user &
//state whether the number is positive, negative or zero

//ANSWER//
// var number = +prompt("Enter your number!");

// if (number > 0) {
//     alert("Positive Number");
// }
// else if (number < 0) {
//     alert("Negative Number");
// }
// else {
//     alert("The number is 0");
// }

//QUESTION 4 Write a program that takes a character (i.e. string of
//length 1) and returns true if it is a vowel, false otherwise

//ANSWER//

// var alphabate = prompt("Enter alphabat \n Note: Enter only one alphabate");
// if(alphabate.length===1){

// alphabate=  alphabate.toLowerCase();

// if(alphabate==="a" || alphabate==="e" || alphabate==="i" || alphabate==="o" || alphabate==="u"){
//     alert("True")

// }
// else{
//     alert("False")
// }
// }


//Question 5 Store correct password in a JS variable.
//ANSWER//

// var correctpassword = ("abc12345");
// var userpassword = prompt("Enter your password");

// if(!userpassword){
//     alert("Enter your password");

// }
// else if(correctpassword === userpassword){
//        alert(" The password you entered  is matches")
// }
// else{
//     alert("Incorrect password");
// }



//QUESTION 6 This if/else statement does not work. Try to fix it:

// var greeting; 
// var hour = 13; 

// if (hour < 18) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// console.log(greeting);

//QUESTION 7

// var time = +prompt("Enter time in 24 hour format like 1900");

// if (time >= 0 && time < 1200) {
//     alert("Good Morning");
// }
// else if (time >= 1200 && time < 1700){
//     alert("Good Afternoon")
// }
// else if (time >= 1700 && time < 2100){
//     alert("Good Evening");
// }
// else {
//     alert("Good night")
// }


