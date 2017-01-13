/**
 * Template.js
 * Nick Lediet
 * Jan 6th, 2017
 */
(function() { // SELF EXECUTING FUNCTION for security.
    console.log('SEAF fired');

/* Variables */
var firstName = "Nicholas"; // Create a variable and save it as a string
var lastName = "Lediet";
var number = 1; // If this is put in quotes, it becomes an integer 
var name = firstName + " " + lastName; // Variable in variable plus string concat

var assignName = document.querySelector("#heading");// This is grabbing the element by ID
assignName.innerHTML = name; // This is filling it with our name!

console.log(firstName);
console.log(lastName);
console.log(name);
console.log(assignName);
/* Functions */

/* Listeners */

})();