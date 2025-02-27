/*
Jeremy Paruch
w0222971
February 20, 2025
Nadia Gouda
ClientSide Programming

https://github.com/CodeJ3R/JS_Debugging_Challenge_Jeremy.git

*/

student_name = "Nadia"; // added quotations around nadia
studentAge =20; // removed quotations from 20
isEnrolled = true; // removed captial T

document.write("<h2>Student Info</h2>"); //semi colon for good practice
document.write("Name: " + student_name + "<br>"); // quotations around br, cahnged to student_name
document.write("Age: " + studentAge); // studentAge
document.write("Enrolled: " + isEnrolled); // SEMI COLON

let ageString = String(studentAge); // SEMI COLON
document.write("Age Type: " + typeof (ageString)); //ADDED + AND brackets around agestring

num1 = Number(prompt("Enter first number")); // added type casting to turn the prompt into a integer
num2 = Number(prompt("Enter second number"));// added type casting to turn the prompt into a integer
document.write("Sum: ", + num1 + num2); // added comma after Sum" , deleted original 15 was redundant

userAge = Number(prompt("Enter your age")); // typecasting again
if (userAge >=18) {                         // changed to greater than or equal to
    document.write("You can vote!"); 
} else { // just need else here
    document.write("Sorry, you can't vote."); 
}

for (i = 1; i < 10; i++) { // Needs some curly brackets in there or it wont work the way you want it to...for good habits
    document.write(i); 
}
let num =0; //adding num variable
while (num < 10 ) { // added curly brackets

    num = Number(prompt("Enter a number greater than 10")); // added ;

}
