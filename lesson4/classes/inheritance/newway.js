class Rectangle {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	 getArea() {
    return this.length * this.width;
  }

	toString() {
		return `[Rectangle ${this.length} x ${this.width}]`;
	}
}

class Square extends Rectangle {
	constructor(size) {
		super(size, size);
	}

	toString() {
		return `[Square ${this.length} x ${this.width}]`
	}
}

let square = new Square(5);
console.log(square.toString()); // [Square 5 x 5]