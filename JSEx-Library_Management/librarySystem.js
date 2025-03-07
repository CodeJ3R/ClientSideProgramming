/*
Name: Jeremy Paruch
Student Number: 0222971
Date: March 04, 2025
Course: Client Side Programming
Instructor: Nadia Gouda

Resources used:
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jsref/jsref_return.asp
https://www.w3schools.com/jsref/jsref_obj_object.asp

Special thanks to Josh & Nadia for willing to answer any and all questions I had, no matter how they sounded :D


*/


 // so i can see what went wrong
// ********************* Part 1!************************** :D
console.log("=======================================================");
console.log(" Part 1: Creating a Book object and also calling the functions");
console.log("========================================================");
// Here we are creating a book object
// fixed from let to const for best practice
const book = {
    title: 'Modern Chess Openings 15th Edition', // my new favourite book!
    author: "Nick de Firmian",
    isAvailable: true
};

    // added function keyword so that its more specific now, the original getdetails could work but i think this is better
    function getDetails(book) {
        return  `Title: ${book.title}, Author: ${book.author}, Lets see if it is available: ${book.isAvailable}`;
    };
    // this function to borrow a book from the library
    function borrowBook(book) {
        // Looks to see if said book is available 
        if (book.isAvailable) {
            // the book is not available
            book.isAvailable = false;
            return "Would you look at that! You got the book! ";
        // This tells the user that the book has already been borrowed
        } else {
            return "Better luck next time, the book has already been borrowed.";
        }
    };
    // This function is used for returning the book
     function returnBook(book) {
        // if the book wasnt available at first
        if (!book.isAvailable) {
            // the book is now available! 
            book.isAvailable = true;
            return "Thank you for returning the book back!";
        } else {
            // if the book has already been returned, this message will be displayed to the user.
            return "That book has already been returned!\n";
        }
    
};

// This one calls the getDetails function on Line 30
console.log(getDetails(book));
// This one calls the getDetails function on Line 34  
console.log(borrowBook(book));
// This one calls the getDetails function on Line 34  
console.log(borrowBook(book)); 
// This one calls the getDetails function on Line 45
console.log(returnBook(book));
// This one calls the getDetails function on Line 45
console.log(returnBook(book)); 

// *********************Onto part 2!************************** :D
console.log("==================================================================");
console.log(" Part 2:Creating a Librarian object and also calling the functions");
console.log("==================================================================");
// its me and im a librarian now :D
// fixed from let to const
const librarian = {
    firstName: "Jeremy",
    lastName: "Paruch",
    _shift: "morning",
    // Full name getter for entering the librarians full name
    get fullName() {
        return  `${this.firstName} ${this.lastName}`;
    },
    // getting the shift info
    get shift(){
        return `${this._shift}`
    },
    // setting the new shift
    set shift(newShift) {
        if (newShift === "morning" || newShift === "evening") {
            this._shift = newShift;
        } else {
            console.log("That shift doesnt exist. Please enter 'morning' or 'evening'.");
        }
    }
};
// Printing Librarians name
console.log(`The Librarian's Name is ${librarian.fullName}`);
// Printing  Librarians Original Shift
console.log(`The Librarian's Shift is ${librarian.shift}`); 
// Shift Changed to Evening! 
librarian.shift="evening";
console.log(`The New shift for the librarian is ${librarian.shift}`);
// This isnt "real" shift so it comes up as invalid
librarian.shift= "night";

// *********************Onto part 3!************************** :D
console.log("=======================================================");
console.log("Creating a Library Object and also calling the functions!");
console.log("========================================================");
// fixed from let to const
const library = {
    books: [], // oh look an empty array! 
    librarian: librarian,
    // Creating a function to add books to the array, push method puts the book at the end of the array
    addBook: function(book) {
        this.books.push(book);
        // happy message that a book has been added to the library!
        return `${book.title} Has Successfully been included in the library! :D `;
    },
    // creating a new filtered array from the books array
    listAvailableBooks: function() {
        return this.books.filter(book => book.available).map(book => book.title);
    }
};
// Print outs to show when book(s) have been successfully added! :D
console.log(library.addBook({ title: "Python Crash Course 3rd Edition", author: "Eric Matthes", available: true }));
console.log(library.addBook({ title: "Beginning Programming with Python For Dummies", author: "John Paul Mueller", available: false }));
console.log(library.addBook({ title: "Dungeons Masters Guide 5th Edition", author: "Wizards of the Coast", available: true }));
console.log(library.addBook({ title: "How to Win At Chess", author: "Levi Roszman", available: true }));
// Expected Output: ["Python Crash Course 3rd Edition", "Dungeons Masters Guide 5th Edition","How to Win At Chess" ]



// Thank you josh for teaching/showing me this!! :D
console.log("Here are all the books that we currently have on site! :D\n" + library.listAvailableBooks().join(", "));


