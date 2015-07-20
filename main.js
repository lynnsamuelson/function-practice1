// ........YOUR MISSION.........
// create an object with three keys
// 1. firstName
// 2. lastName
// 3. greet

// The greet key should be a function that, when called,
//  should output "Welcome {firstName} {LaseName}"

var greeting = {};
greeting = function(firstName, lastName, greet) {
	this.firstName = firstName;
	this.lastName = lastName;
	this.greet = "Welcome ";
}

var lynn = new greeting(Lynn, Samuelson);
console.log(lynn);