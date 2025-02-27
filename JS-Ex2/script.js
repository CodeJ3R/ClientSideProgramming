/*
Name: Jeremy Paruch
Student Number: w0222971
Date: January 25, 2025
Instructor: Nadia Gouda
Class: Client Side Programming
*/

console.log("This is my first JavaScript script!");

// part 1 Declare and initialize variables and constants for a user's age and height.
const height = 200;
let userAge = 36;
console.log("******Here are the answers to part 1 of the exercise!******")
console.log("The Height is", height);
console.log("The users age is", userAge);

//part 2

// 1. Declare an array with three elements representing pet names.

let petNames = ["Spike", "Odie", "Garfield"];
console.log("*****Here are the name of some pets for Part 2!******")
console.log("Oh Look it's a group of pets! Here are there names! ");
console.log(petNames[0]); // -> Spike
console.log(petNames[1]); // -> Odie
console.log(petNames[2]); // -> Garfield

console.log(petNames);  // -> Spike -> Odie -> Garfield

// 2. Add a new element to the array using push() and remove the last element using pop().

petNames.push("Gizmo");
console.log("Here's Gizmo added to the Array! Welcome Gizmo!");
console.log(petNames);


console.log("Mouse " + " : Squeeks");

petNames.pop();
console.log("WAIT GIZMO COME BACK! *sigh* Gizmo ran off to chase a mouse... bye Gizmo!");
console.log(petNames);
// 3. Reverse the array and display the elements in the console.
petNames.reverse();
console.log(" And now they've been reversed! How did this happen?!");
console.log(petNames);


// Part 3 Creating an objects

//Declare an object representing a car with properties like make, model, and year.

console.log("*****Creating Car Objects For Part 3!*****")
console.log("This my Car! There are MANY like it, but this one...is mine!");
let myCar = {
    Make: "Fiat",
    Model: "500",
    Year: 2010,
    Colour: "Black"
};
console.log(myCar);

//2. Update one of the object's properties.
console.log("Wait a second...I don't drive a black fiat....I drive a light blue fiat!");
console.log("*construction noises*")
myCar.Colour = "Light Blue"
console.log(myCar);
console.log("There now its fixed! Sorry about that!");

//Add a new property to the object and log the updated object to the console.
console.log("Oops I should have mentioned how many seats it has!");
console.log("* more construction noises*")
myCar.Seats = 4;
console.log(myCar);
console.log("There that looks better now doesnt it? It's a small car but it gets to where it needs to go!");


//Part 4 Type Operators
// Use methods like slice(), indexOf(), and length on strings and arrays.


console.log("*****Moving Onto Part 4!******")

// Creating a new String for Part 4  
console.log("Ok for this part, im going to make a NEW array and strings to demonstrate the slice method. Lets get some of my books!");

let myName = "JeremyParuch";

console.log(myName);

console.log("Oh hey! thats my name! Cool im going to use the slice method on it now!")
console.log(myName.slice(0, 6));
console.log("oooooooh fancy!");
 
console.log("****Switching to slice method for arrays!*******")

console.log("Ok lets move onto using the slice method for an array!");

// Creating an Array for slice
let myBooks = ["How To Win At Chess", "Daggerheart", "Atomic Habits", "Python Crash Course"];

console.log(myBooks);

console.log("Tada! The array has been created!");

// slice method used on the array
console.log("Now! Let's use the slicer method for this array! Here are the books i'm curretly reading")

console.log(myBooks.slice(0, 2));

console.log("Nice!");

console.log("****Part 4: IndexOf****")

// Moving On

console.log("Ok lets move onto using the indexOf method for a string and array!");
// IndexOf on a String
console.log("*******Heres an example of IndexOf with a String! we'll use a different String*******");

let hopefulGrade = "Hi there! May Jeremy get a really good grade? Like say...a one hundred? yes! :D";

console.log(hopefulGrade);

let answer = hopefulGrade.indexOf("yes!");

console.log(answer);
// IndexOf on a Array
console.log("******Now lets see indexOf being done with an array!**********");


console.log(myBooks);

console.log("Here's what IndexOf looks like with an array. We're going to see which index in the array Python Crash Course is at");

let whereAt = myBooks.indexOf("Python Crash Course");

console.log("The index Pythong Crash Course is at is number: ", whereAt);

console.log("Nice!");

console.log("*****Last Part! Length of Stings and Arrays!******");


//length for strings

let question = "Did Jeremy do a Good Job? Yes?";
console.log("Here's the example we'll use for lengths of string! :", question);

console.log("Cool! now lets see what the length is! ")

let howLong = question.length;
console.log("The length of this variable is:", howLong);

//length for arrays

console.log("For funsies, im going to create an array using some characters from my dungeons and dragons games");

let DND = ["Pike", "Loba", "Raziel", "Beyzel", "Scarlett", "Breeze", "Aubrin"];

console.log(DND);

console.log("Lovely! Now lets see how many characters I put into this array");

console.log("The amount of characters Jeremy put into this array is", + DND.length)

console.log("****WE MADE IT TO THE END OF THE CODE!****");


