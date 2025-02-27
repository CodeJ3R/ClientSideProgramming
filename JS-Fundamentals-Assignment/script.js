/*

Jeremy Paruch
w0222971
February 13, 2025
Client Side Programming
Nadia Gouda

*/

// Thank you for the classes nadia, i didnt do the other bonus questions, time is getting short and there are other assignments to look after.
// I'll revisit the documentation on netacad, im disappointed in myself for not being able to do all the bonus points

// Part 1 Declare 3 Variables

//showcasing what step we are on
document.write("<h1> Step 1 </h1>");
// oh hey its a jeremy variable!
let studentName = "Jeremy";
// oh hey its my age
let studentAge = 33;
// If this wasnt true id have a lot of questions
let isEnrolled = true;

// Writing out the students name
document.write(`The Students name is ${studentName} `);
// putting in a space for legibility
document.write("<br>");
// Writing out the students age
document.write(`The Students age is ${studentAge} `);
document.write("<br>");
// Writing out that im enrolled
document.write(`The Students s enrolled? ${isEnrolled}`);

// changing the data type from int to string
document.write("<h1> Type Casting </h1>");
//from int
document.write("This is the students age before conversion" + typeof studentAge);

document.write("<br>");
//changing to string
studentAge = String(studentAge);
// tada! its now a string
document.write("This is the students age after conversion" + typeof studentAge);


// Part 2 Operators and user interaction
document.write("<h1> Step 2 </h1>");
// prompts the user to enter some numbers, taken the extra step to convert it from a string to a int
let personNumber1 = Number(prompt("Please enter a number", "2"));
let personNumber2 = Number(prompt("Please enter another number", "2"));

document.write("<h2> Results Printed </h2>");
// this is to catch the user from entering anything that isnt a number.
if (isNaN(personNumber1) || isNaN(personNumber2)) {
    // the alert will kick in if any funny business is had when asking the user for some numbers
    alert("Quit trying to get around my programming this is serious! Enter a real number!");
    document.write("<h1> Cut that out! Enter a real number </h1>")
} else {
    // this message prints if the user does what we ask them to do! 
    document.write("<h3> Here's the first number! ", personNumber1);
    document.write("<h3> Here's the first number! ", personNumber2);
}

// Using +
document.write("This is adding two variables together ", personNumber1 + personNumber2);
// Using -
document.write(" <br> This is subtracting two variables together ", personNumber1 - personNumber2);
// Using *
document.write(" <br> This is multiplying two variables together ", personNumber1 * personNumber2);
// Using /
document.write(" <br> This is dividing two variables together ", personNumber1 / personNumber2);
// Using %
document.write(" <br> This is when modules is used on the two variables together ", personNumber1 % personNumber2);


//Part 3 Conditional Execution

document.write("<h1> Step 3 </h1>");
//asking the user to enter their age
let userAge = Number(prompt("Enter Your Age", "18"));
// if the users age is over 18 they get to do the thing
if (userAge >= 18) {

    document.write(" You're eligible to vote! ");


} else {
    // not over 18? no entry
    document.write("You are not eligible to vote yet!");
}


// //Part 4 Conditional loops
document.write("<h1> Step 4 </h1>");
let j;
// as long as j is less then 11, the j variable will go up by 1.
for (let j = 0; j < 11; j++) {

    document.write(" ", + j);
    if (j == 10) {
        //break; stops the loop when the condition is met
        break;
    }

}
// Asking the user to enter a number higher than 10, if they dont the message keeps looping to ask them to enter a number higher than 10
let greaterNumber = Number(prompt("Please enter a number greater than 10!", "11"));

do {
    // This is the loop mentioned earlier, it will keep asking them for a higher number than 10
    greaterNumberm = Number(prompt("Please enter a number between greater than 10...Please anything...like 11! I want to go home!", "11"));
}
while (greaterNumber <= 10);
// When the user finally enters a number greater than 10
document.write("<h1>Thank you for entering a number higher than 10! I thought we would be here all day! </h1>");



