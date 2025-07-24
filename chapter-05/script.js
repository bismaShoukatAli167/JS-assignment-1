//QUESTION:1 Write a program that takes two numbers & adds them in a new variable. Show the result in your browser.
//ANSWER//

document.writeln("<h3>ANSWER:1 </h3>")
var number1 =(10);
var number2 =(20)
var sum = (number1 + number2);

document.writeln("The sum of " + number1 + " and " + number2 + " is = " + sum + "<br>"+ "<br>")

//QUESTION: 2 Repeat task1 for subtraction, multiplication, division &modulus.
//ANSWER//
 
                    //SUBTRACTION METHOD //

document.writeln( "<h3>ANSWER:2 </h3>"+",subtraction:"+"<br>") //only for output//

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
document.writeln("<h3>ANSWER:3 </h3>"+"<br>") //only for output//

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
document.writeln(  "<h3>ANSWER:4 </h3>") ;
var cost = (600);

var ticketcoast = cost * 5;
document.writeln("Total cost to buy  5 tickets for a movie is " + ticketcoast + "PKR" +"<br>" + "<br>");


//QUESTION : 5  Write a script to display multiplication table of any number in your browser.
//ANSWER//

document.writeln( "<h3>ANSWER:5 </h3>"+ " "+ "<br>" +" TABLE OF 7" +"<br>") ; // only for heading//

var number = (7);
for(var i =1; i<=10; i++){
    document.writeln(`<h3> 7 X ${i} = ${7 * i} </h3>`)

}


//QUESTION : 6  The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

//ANSWER//

document.writeln(  " <h3>ANSWER:6 </h3>") ;

var celsius =(25);
var  fahrenheit = (celsius * 9/5) + 32;
document.writeln(celsius + "°C is " + fahrenheit + "°F <br>");

var fahrenheit2 =(70);
var  celsius2 = (fahrenheit2- 32 ) *5/9;
document.writeln(fahrenheit2 + "°F  is " + celsius2+ "°C <br>");



//QUESTION : 7   Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store 
//the following in variables.

//ANSWER//
document.writeln(  " <h3>ANSWER:7</h3>") ;

var Priceitem1 = (700);
var Quantity1 = (3);
var Priceitem2 = (200);
var Quantity2 = (1);
var shippingCharges = 100;

var totalitem = Priceitem1 * Quantity1;
var totalitem2 = Priceitem2 * Quantity2;
var totalcost =  totalitem + totalitem2  + shippingCharges;

document.writeln("Price of item 1 is " + Priceitem1 + "<br>");
document.writeln("Quantity of item 1 is " + Quantity1 + "<br>");
document.writeln("Price of item 2 is " + Priceitem2 + "<br>");
document.writeln("Quantity of item 2 is " + Quantity2 + "<br>");
document.writeln("Shipping Charges " + shippingCharges + "<br><br>");
document.writeln("Total cost of your order is " + totalcost);

//QUESTION : 8  Store total marks & marks obtained by a student in 2 
//variables. Compute the percentage & show the result in your browser

//ANSWER//
document.writeln(  " <h3>ANSWER:8</h3>")

var totalmarks = (950);
var obtainedmarks = (900);
var percentage = (obtainedmarks / totalmarks ) * 100;

document.writeln ("Total Marks: " + totalmarks + "<br>");
 document.writeln ("Marks Obtained: " + obtainedmarks + "<br>");
 document.writeln ("Percentage: " + percentage + "%" +"<br>");


 //QUESTION : 9 Give Exchange Rates.

//ANSWER//
document.writeln(  " <h3>ANSWER:9</h3>")

var usd = (104.80);
var riyal = (28);

var usdollar =(10);
var saudiriyal =(25);

var convertedUSD = usd * usdollar;
var convertedriyal  = riyal * saudiriyal;

var totalPKP = convertedUSD + convertedriyal;
document.writeln("Total currency in PKP : " + totalPKP + "<br>");

//QUESTION : 10  Write a program to initialize a variable with some 
//number and do arithmetic in following sequence: 

//ANSWER//
document.writeln(  "<h3> ANSWER:10 </h3>")

var number = (6);
var result =((number + 5) * 10) /2;
document.writeln("The answer is " + result);


//QUESTION : 11 The Age Calculator: Forgot how old someone is? Calculate it! 

//ANSWER//
document.writeln(  "<h3> ANSWER:11 </h3>")

var currentyear = 2025;
var birthyear = 2006;

var age1 = currentyear -birthyear;
var age2 = age1 -1;
document.writeln("They are either " + age2 + " or " + age1 + " years old." +"<br>");

//QUESTION : 13 The Lifetime Supply Calculator: Ever wonder how 
//much a “lifetime supply” of your favorite snack is? Wonder no more.
//ANSWER//
document.writeln(  "<h3> ANSWER:13 </h3>")

var favoriteSnack = "Lays Chips";
  var currentAge = 19;
  var maxAge = 60;
  var amountPerDay = 2;

  var totalSnacks = (maxAge - currentAge) * 365 * amountPerDay;

  document.writeln("You will need " + totalSnacks + " " + favoriteSnack + " to last you until the ripe old age of " + maxAge + ".");


            //   /////////////////END/////////////// //




