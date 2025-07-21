/*
Combination of constructor and Prototype Pattern.

1. Use constructor to set object states
2. Put shared methods on the constructor's function prototype.
*/

let Point = function(x = 0, y = 0) {
	this.x = x;
	this.y = y;
};

Point.prototype.onXAxis = function() {
	return this.y === 0;
}

Point.prototype.onYAxis = function() {
	return this.x === 0;
}

Point.prototype.distanceToOrigin = function() {
	return Math.sqrt((this.x * this.x) + (this.y * this.y));
}

let pointA = new Point(30, 40);         // use new to create objects
let pointB = new Point(20);

console.log(pointA instanceof Point); // true
console.log(pointB instanceof Point); // true

console.log(pointA.distanceToOrigin()); //50
console.log(pointB.onXAxis()); // true