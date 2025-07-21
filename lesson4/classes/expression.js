// Class Expressions

// Functionally equivalent to declarations

let Rectangle = class {
	constructor(length, width) {
		this.length = length;
		this.width = width;
	}

	 getArea() {
    return this.length * this.width;
  }
}

