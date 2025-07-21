// Objects Linking to Other Objects: historical pattern. not assessed

// 1. Defined shared behaviors on prototype object
// 2. Use Object.create to create objects that delegate directly to that object.

let Point = {
	onXAxis() {
		return this.y === 0;
	},

	onYAxis() {
		return this.x === 0;
	},

	 distanceToOrigin() {
    return Math.sqrt((this.x * this.x) + (this.y * this.y));
  },

	init(x = 0, y = 0) {
		this.x = x;
		this.y = y;

		return this;
	},
};

let pointA = Object.create(Point).init(30, 40);


console.log(Point.isPrototypeOf(pointA)); // true
console.log(pointA.distanceToOrigin()); // 50
console.log(pointA.onXAxis()); // false