//QUESTION:1 Write a program that takes two numbers & adds them in a new variable. Show the result in your browser.
//ANSWER//

document.writeln("ANSWER 1:"+"<br>")
var number1 =(10);
var number2 =(20)
var sum = (number1 + number2);

document.writeln("The sum of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>")

//QUESTION: 2 Repeat task1 for subtraction, multiplication, division &modulus.
//ANSWER//
 
                    //SUBTRACTION METHOD //

document.writeln("  ANSWER : 2 ,subtraction:"+"<br>") //only for output//

var number1 =(10);
var number2 =(20);
var sum = (number1 - number2);

document.writeln("The subtraction of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>");
         
                   // multiplication METHOD //

document.writeln("multiplication:"+"<br>") //only for output//

var number1 =(10);
var number2 =(20)
var sum = (number1 * number2);

document.writeln("The  multiplication of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>")


                 // division METHOD //

document.writeln("division:"+"<br>") //only for output//

var number1 =(10);
var number2 =(20)
var sum = (number1 / number2);

document.writeln("The division of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>")
 

           // MODULUS METHOD //

document.writeln("modulus:"+"<br>") //only for output//

var number1 =(10);
var number2 =(20)
var sum = (number1 % number2);

document.writeln("The  remainder of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>")
 

//QUESTION : 3 . Do the following using JS Mathematic Expressions.
//ANSWER//
document.writeln("ANSWER: 3 "+"<br>") //only for output//

var score;
document.writeln("Value after declaration is = " + score + "<br>");

score = 2;
document.writeln("Initial value= " + score + "<br>");

score++;
document.writeln("value after increment is = " + score + "<br>" );

score = score + 7;
document.writeln("value after addation is = " + score + "<br>");

score--;
document.writeln("value after decrement is = " + score + "<br>");

var remainder = score % 3;
document.writeln("The remainder is = " + remainder + "<br>" + "<br>");


//QUESTION : 4. Cost of one movie ticket is 600 PKR. Write a script to store 
//ticket price in a variable & calculate the cost of buying 5  tickets 

//ANSWER//
document.writeln(  "ANSWER:4"+ " <br>") ;
var cost = (600);

var ticketcoast = cost * 5;
document.writeln("Total cost to buy  5 tickets for a movie is " + ticketcoast + "PKR" +"<br>" + "<br>");


//QUESTION : 5  Write a script to display multiplication table of any number in your browser.
//ANSWER//

document.writeln( "ANSWER:5"+ " "+ "<br>" +" TABLE OF 7" +"<br>") ; // only for heading//

var number = (7);
for(var i =1; i<=10; i++){
    document.writeln(`<h3> 7 X ${i} = ${7 * i} </h3>`)

}