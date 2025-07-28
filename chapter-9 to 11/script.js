document.writeln(
    `
    <h2> <center> Chapter 9 to 11 </center> </h2>
     <h3> <center> USER INPUT & CONDITIONAL
STATEMENT  </center> </h3>
     `
)

//QUESTION 1 Write a program to take “city” name as input from user. If
//user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var cityname = prompt("Enter your favourite city name.");

// if (cityname.toLowerCase() === "karachi") {
//     alert("Welcome to the city of lights");
// } 
// else {
//     alert("Welcome to " + cityname);
// }

//QUESTION 1Write a program to take “gender” as input from user. If the
//user is male, give the message: Good Morning Sir. If the
//user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter your gender!");

// if (gender.toLowerCase()  === "male"){
//     alert("Good Morning Sir.");

// }
// else{
//     alert("Good Morning Ma'am.");
// }

//QUESTION 3  Write a program to take input color of road traffic signal from the user & show the message according to this table:
//ANSWER//

// var signalcolors = prompt ("Enter the color of the traffic signal (Red, Yellow, Green):")

// if (signalcolors.toLowerCase() === "red"){
//     alert("Must Stop");

// }
// else if(signalcolors.toLowerCase() === "yellow"){
//     alert("Ready to move");
// }
// else if(signalcolors.toLowerCase() === "green"){
//       alert("Move now");
// }
// else{
//     alert("Invalied color!")
// }


//QUESTION:4  Write a program to take input remaining fuel in car (in 
//litres) from user. If the current fuel is less than 0.25litres, 
//show the message “Please refill the fuel in your car” 

//ANSWER//

// var fuel = Number(prompt ("Enter fuel in litres:"));
// if(fuel < 0.25){
//     alert("Please refill the fuel in your car")

//}

//QUESTION:5 Run this script, & check whether alert message would be displayed or not. Record the outputs. 
//ANSWER//
    
             //condition A //
//  var a = 4; 
// if (++a === 5){ 
// alert("given condition for variable a is true"); 
// }
document.writeln(" a: Alert will show: given condition for variable a is true " +"<br>");
       
            //condition B //
//  var b = 82; 
// if (b++ === 83){ 
// alert("given condition for variable b is true"); 
// }
document.writeln(" b: Alert will not show: given condition for variable b is false " +"<br>");

         //condition C //

// var c = 12; 
// if (c++ === 13){ 
// alert("condition 1 is true"); 
// } 
// if (c === 13){ 
// alert("condition 2 is true"); 
// } 
// if (++c < 14){ 
// alert("condition 3 is true"); 
// } 
// if(c === 14){ 
// alert("condition 4 is true"); 
// }
document.writeln(" c: Only condition 2,3 is true " +"<br>");

           //condition D //
//  var materialCost = 20000; 
// var laborCost = 2000; 
// var totalCost = materialCost + laborCost; 
// if (totalCost === laborCost + materialCost){ 
// alert("The cost equals"); 
// } 
document.writeln(" d:Alert will show the condition is true " +"<br>");
           
           //condition E //
//  if (true){ 
// alert("True"); 
// } 
// if (false){ 
// alert("False"); 
// }
document.writeln(" e: Only true conditionn is show " +"<br>");
        
//QUESTION :6  Write a program to take input the marks obtained in three 
//subjects & total marks. Compute & show the resulting 
//percentage on your page. Take percentage & compute 
//grade as per following table: 

//ANSWER//
// var subject1 = Number(prompt("Enter marks for Subject 1:"));
// var subject2 = Number(prompt("Enter marks for Subject 2:"));
// var subject3 = Number(prompt("Enter marks for Subject 3:"));
// var totalMarks = Number(prompt("Enter total marks:"));

// var obtainedmarks = subject1 + subject2 + subject3;
// var percentage =(obtainedmarks  / totalMarks) *100;

// var grade;
// var remarks;

// if(percentage >= 80){
//     grade = "A one ";
//     remarks ="Excellent";
// }
// else if (percentage >= 70){
//      grade = "A";
//     remarks ="Good";
// }
// else if (percentage >= 60){
//      grade = "b";
//     remarks ="You need to improve";
// }
// else{
//     grade = "Fail";
//     remarks ="Sorry"
// }

// document.writeln("<h2>Marksheet</h2>");
// document.writeln("Total Marks: " + totalMarks + "<br>");
// document.writeln("Marks Obtained: " + obtainedmarks + "<br>");
// document.writeln("Percentage: " + percentage.toFixed(2) + "%<br>");
// document.writeln("Grade: " + grade + "<br>");
// document.writeln("Remarks: " + remarks);


//QUESTION :7  Store a secret number (ranging from 1 to 10) in a variable.Prompt user to guess the secret number. 
//ANSWER//

// var secretNumber = (8);
// var userguess = Number(prompt("Guess the secret number (1 to 10):"));
//  if(userguess === secretNumber){
//      alert("Bingo! Correct answer");

// }
// else if(userguess === secretNumber + 1 || userguess === secretNumber -1){
//      alert("Close enough to the correct answer");

// }
// else{
//     alert("wrong guess! please try again.")
// }


//QUESTION: 8  Write a program to check whether the given number is 
//divisible by 3. Show the message to the user if the number 
//is divisible by 3.

// var number = Number(prompt("Enter any number:"));

// if( number % 3 === 0){
//     alert("The number is divisible by 3.");

// }else{
//     alert("The number is Not divisible by 3.");
// }

//QUESTION: 9  Write a program to check whether the given number is 
//Even or Odd number.

// var number = Number(prompt("Enter any number:"));
//  if( number % 2 === 0){
//     alert("This is an Even number.");

//  }else{
//     alert("This is an Odd number.");
// }

//QUESTION : 10 Write a program that takes temperature as input and 
//shows a message based on following criteria

// var temperature = Number(prompt("Enter the current temperature:"));

// if(temperature > 40){
//     alert("Its to hot outside");

// }
// else if(temperature > 30){
//     alert("The weather is normal today");
// }
// else if(temperature > 20){
//     alert("Today's weather is cool");
// }
// else if(temperature > 10){
//     alert("OMG! Today's weather is so cool");
// }
// else{
//     alert("Its freezing stay warm!")
// }

//QUESTION 10 Write a program to create a calculator for +,-,*, / & % 
//using if statements. Take the following input:

var number1 = Number(prompt("Enter first number."));
var number2 = Number(prompt("Enter second number."));
var operation = prompt("Enter operation (+, -, *, /, %):");

var results;

if(operation === "+"){
     results = number1 + number2 ;
}
else if(operation === "-"){
     results = number1 - number2 ;
}
else if(operation === "*"){
    results =  number1 * number2 ;
}
else if(operation === "/"){
    results =  number1 / number2 ;
}
else if(operation === "%"){
    results =  number1 % number2 ;
}
else {
    results = "Invalid operator!";
}
alert("Results = " + results)



