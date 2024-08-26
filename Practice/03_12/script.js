/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Car from "./Car.js";

const cObj = new Car(
    "Alto 800",
    "Alto",
    "X1",
    "Red",
    "Arnab",
    "Sinha"
);

console.log("Before change: ", cObj);
console.log("Before change: ", cObj.owner.firstName, cObj.owner.lastName);
cObj.changeOwner("Prerna","Goel");
console.log("Before change: ", cObj.owner.firstName, cObj.owner.lastName);
// console.log(cObj);