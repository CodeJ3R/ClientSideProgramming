
/****************
* Jeremy Paruch*
*0222971
*January 29 2025*
*Client Obj Programming*
*Nadia Gouda*
*Exercise 3*
******************/


/*

Part 1: Arithmetic Operators

    Declare two variables, num1 and num2.
    Use arithmetic operators (+, -, *, /, %) to perform calculations.
    Display the results in the console.
    */

let jerExNum1=1;
let jerExNum2=2;
// Using +
console.log("This is adding two variables together",jerExNum1+jerExNum2);
// Using -
console.log("This is subtracting two variables together",jerExNum1-jerExNum2);
// Using *
console.log("This is multiplying two variables together",jerExNum1*jerExNum2);
// Using /
console.log("This is dividing two variables together",jerExNum1/jerExNum2);
// Using %
console.log("This is when modules is used on the two variables together",jerExNum1%jerExNum2);
// Using **
console.log("This is using the exponential operator on two variables together",jerExNum1**jerExNum2);


/* Part 2: Relational Operators

    Compare the two variables using relational operators (>, <, >=, <=, ===, !==).
    Log the results to the console.
  */
  
 // using > greater than sign
console.log("lets see if num1 is greater than num2 shall we? :" , jerExNum1>jerExNum2);
// using < less than sign
console.log("lets see if num1 less than num2 shall we? :" , jerExNum1<jerExNum2);
// using <= less than or equal to
console.log("lets see if num1 is  less than or equal num2 shall we? :" ,jerExNum1<=jerExNum2);
// using >= greater than 
console.log("lets see if num1 is greater than or equal num2 shall we? :" , jerExNum1>=jerExNum2);
// using === same value and same type
console.log("lets see if num1 is the same type and value as  num2 shall we? :" ,jerExNum1===jerExNum2);
// using !== not equal value and not equal type
console.log("lets see if num1 doest equal  num2 for both type and value shall we? :" , jerExNum1!==jerExNum2);




/* Part 3: Logical Operators

    Create two boolean variables (isSunny, isWeekend).
    Use logical operators (&&, ||) to check combinations of conditions.
    Display the results in the console.
*/

// part 3 isSunny, isWeekend).
let isSunny=true;
let isWeekend=true;
//Use logical operators (&&, ||) to check combinations of conditions.

// Using &&
console.log("Please! Someone tell me its sunny today AND its the weekend?! I Beg you?! :" , isSunny&&isWeekend);
// Using ||
console.log("Can we please have a day where its sunny OR its the weekend! I beg you!:" , isSunny||isWeekend);
// Why not both? (not asked for but did it anyways)
console.log("OH but what if its not sunny but it is the weekend?", isSunny&& isWeekend ||!isSunny && isWeekend );

/* Part 4: Assignment Operators

    Declare a variable score and assign it a value.
    Use assignment operators (+=, -=, *=) to modify the value.
    Log the updated values to the console.
   */

    let jersEx3Score = 32;

    console.log("Here's my starting score", +jersEx3Score )
    // += adding to the score
    jersEx3Score +=68;
    console.log ("Now lets fix that :", jersEx3Score);
    // -= subtracting from the score
    jersEx3Score -=90;
    console.log ("Ok wait lets fix it again :", jersEx3Score);
    // *= mulltiplying the score
    jersEx3Score *=10;
    console.log("Nawww I liked it better the first time :" , jersEx3Score);
    

/* Part 5: User Interaction

    Use the prompt method to capture user input for their name and age.
	*/
  
  
  let j = prompt ("Please enter your name: ", "Jer");
  console.log(" Nice to meet you  " +j+ "!");
  
  let y = prompt ("Please enter your age: ", "Ex: 30");
  console.log ("Wow you are "+y+" years old");
  
  








/* unrelated code 

let v=5;
console.log("value of v", v);

   
   
   
let x= 5;
let y= x = 10;
console.log("value of y", y);

let a =5;
a+=10;
console.log("value of a", a);
// Unary Arthmetic Operator
let count=0;
 
console.log("This prints first and then adds later" , count++);
console.log("This just prints" , count);
console.log("This goes up first and then it prints" , ++count);


// || && !
console.log(true && false);
console.log(!true);

console.log(0==1 && 0==0);

console.log(0===0);

*/







