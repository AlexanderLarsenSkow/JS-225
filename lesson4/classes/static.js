// function Rectangle(length, width) {
//   this.length = length;
//   this.width = width;
// }

// Rectangle.getDescription = function() {
//   return 'A rectangle is a shape with 4 sides';
// }

class Rectangle {
	constructor(length, width) {
  	this.length = length;
  	this.width = width;
	}

	static description = 'This is a shape!';

	static getDescription() {
		return 'A rectangle is a shape with 4 sides';
	}
}

console.log(Rectangle.getDescription()); // A rectangle is a shape with 4 sides
console.log(Rectangle.description); // This is a shape!

// Static keyword is still relatively new.
// You can do the same thing with the class name:

Rectangle.static = 'This is a static property.';
console.log(Rectangle.static); // This is a static property.