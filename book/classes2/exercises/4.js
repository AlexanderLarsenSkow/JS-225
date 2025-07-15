class Rectangle {
	#width;
	#height;

	constructor(width, height) {
		this.width = width;
		this.height = height;
	}

	get width() {
		return this.#width;
	}

	get height() {
		return this.#height;
	}

	get area() {
		return this.height * this.width;
	}

	set width(newWidth) {
		if (this.#isNotPositive(newWidth)) {
			this.#belowZeroError(newWidth);
		} else {
			this.#width = newWidth;
		}
	}

	set height(newHeight) {
		if (this.#isNotPositive(newHeight)) {
			this.#belowZeroError(newHeight);
		} else {
			this.#height = newHeight;
		}
	}

	#isNotPositive(value) {
		return value < 0;
	}

	#belowZeroError(value) {
		throw new RangeError(`${value} is below 0`);
	}
}

let rect = new Rectangle(10, 5);
console.log(rect.area); // 50

rect.width = 20;
console.log(rect.area); // 100

rect.height = 12;
console.log(rect.area); // 240

try {
  rect.width = 0;
} catch (e) {
  console.log(e); // RangeError: width must be positive
}

try {
  rect.height = -10;
} catch (e) {
  console.log(e); // RangeError: height must be positive
}