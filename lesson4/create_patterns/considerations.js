let pointA = {
	x: 30,
	y: 40,

	onXAxis() {	
		return this.y === 0;
	},

	onYAxis() {
		return this.x === 0;
	},

	distanceToOrigin() {
		return Math.sqrt((this.x * this.x) + (this.y * this.y));
	},
};

pointA.distanceToOrigin();      // 50
pointA.onXAxis();               // false
pointA.onYAxis();               // false

/*
	New objects need to have their own states, here represented by x and y axes
	Share all behaviors 
*/