// call() method allows an object to use the method (function) of another object.
function saySomething(message) {
    return this.name + " is " + message;
}
var person = { name: "Mehul" };
saySomething.apply(person, "awesome");



//apply is same as call it takes array values for argument
function saySomething(message) {
    return this.name + " is " + message;
}
var person = { name: "John" };
saySomething.apply(person, ["awesome"]);



/* This method returns a new function, where the value of “this” keyword will be bound to the owner object, which is provided as a parameter. */
/* Example with arguments: */
var bikeDetails = {
    displayDetails: function (registrationNumber, brandName) {
        return this.name + " , " + "bike details: " + registrationNumber + " , " + brandName;
    }
}


var person = { name: "Mehul" };
var detailsOfPerson = bikeDetails.displayDetails.bind(person, "RJ0451", "RoyalEnfield");
// Binds the displayDetails function to the person1 object

