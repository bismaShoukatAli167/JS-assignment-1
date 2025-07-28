document.writeln(
    `
     <h2> <center> Chapter 6 to 8  </center></h2>
    <h3> <center>  MATH EXPRESSIONS  </center> </h3>
 `
)

//QUESTION : 1 "Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser."
//ANSWER//
document.writeln("<h2> Answer : 1 </h2> " )

var a = (5);
document.writeln("The value of a is " + a + "<br>" + "<br>");

document.writeln("The value of ++a is: " + ++a + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of ++a is: " + a++ + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of ++a is: " + --a + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");

document.writeln("The value of ++a is: " + a-- + "<br>");
document.writeln("Now the value of a is: " + a + "<br><br>");


//QUESTION : 2 What will be the output in variables a, b & result after execution of the following script:
//ANSWER//

document.writeln("<h2> Answer : 2 </h2> " );

var a = 2, b = 1;
var results = --a - --b + ++b + b--;

document.writeln("a is: " + a + "<br>");
document.writeln("b is: " + b + "<br>");
document.writeln("result is: " + results + "<br>");

//Question 3 . Write a program that takes input a name from user & greet the user.
//ANSWER//

// document.writeln("<h2> Answer : 3 </h2> " );

// var username = prompt ("Enter your name!");
// alert(" Hello ! " + username + " Welcome to our website. ")
  
//Question 3 . Write a program to take input a number from user &
//display it’s multiplication table on your browser. If user
//does not enter a new number, multiplication table of 5
//should be displayed by default..
//ANSWER//

// document.writeln("<h2> Answer : 4 </h2> " );

// var mtable = prompt("Enter a number for table");

// if(mtable === "" || mtable === null){
//   mtable=5;


// }
// for(var i=1; i<= 10;  i++){
//     document.writeln(mtable + " x " + i + " = " + (mtable * i) + "<br>");
// }


//QUESTION : 6
//ANSWER//
document.writeln("<h2> Answer : 5 </h2> " )

var subject1 = ("Islamiat ");
var subject2 = ("Urdu");
var subject3 = ("English");

var totalmarks = (100);
// var marks1 = Number(prompt("Enter your islamiat marks!"));
// var marks2 = Number(prompt("Enter your urdu marks!"));
// var marks3 =  Number(prompt("Enter your engish marks!"));

var obtainedmarks = (marks1 + marks2 + marks3);
var percentage = ((obtainedmarks / 300) * 100).toFixed(2);


document.writeln("<table >");
document.writeln("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th></tr>");
document.writeln("<tr><td>" + subject1 + "</td><td>100</td><td>" + marks1 + "</td></tr>");
document.writeln("<tr><td>" + subject2 + "</td><td>100</td><td>" + marks2 + "</td></tr>");
document.writeln("<tr><td>" + subject3 + "</td><td>100</td><td>" + marks3 + "</td></tr>");
document.writeln("<tr><th>Total</th><th>300</th><th>" + obtainedmarks + "</th></tr>");
document.writeln("<tr><th>Percentage</th><td colspan='2'>" + percentage + "%</td></tr>");
document.writeln("</table>");

