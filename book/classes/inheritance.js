class Rectangle {
	constructor(height, width) {
		this.height = height;
		this.width = width;
	}

	area() {
		return this.height * this.width;
	}
}

const myRectangle = new Rectangle(10, 5);
console.log(myRectangle.area()); // 50


class Square extends Rectangle {
	constructor(side) {
		super(side, side);
		this.side = side;
	}
}

const mySquare = new Square(5);
console.log(mySquare.area()); // 25
console.log(mySquare.side); // 5

console.log(mySquare instanceof Square === true); // true
console.log(mySquare instanceof Rectangle === true); // true	

console.log(myRectangle instanceof Square === false); // true
console.log(myRectangle instanceof Rectangle === true); // true

// Better to make the Square class inherit from Rectangle!
// class Square {
// 	constructor(side) {
// 		this.side = side;
// 	}

// 	area() {
// 		return this.side * this.side;
// 	}
// }

// const mySquare = new Square(10);
// console.log(mySquare.area()); // 100