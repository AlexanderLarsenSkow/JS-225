// Factory Functions return objects so that we can make custom objects quickly and concisely.

function makeCar(rate, brakeRate) {
	return {
		speed: 0,
		rate,
		brakeRate,

		accelerate() {
			this.speed += this.rate;
		},

		brake() {
			this.speed -= this.brakeRate;
			if (this.speed < 0) this.speed = 0;
		},
	};
}

let sedan = makeCar(8, 6);
let coupe = makeCar(12, 8)

// let sedan = {
// 	speed: 0,
// 	rate: 8,

// 	accelerate() {
// 		this.speed += this.rate;
// 	},
// };

sedan.accelerate();
sedan.accelerate();
sedan.accelerate();
console.log(sedan.speed); // 24

coupe.accelerate();
coupe.accelerate();
coupe.accelerate();
console.log(coupe.speed); // 36

coupe.brake();
coupe.brake();
coupe.brake();
coupe.brake();
// coupe.brake();
console.log(coupe.speed);


let hatchBack = makeCar(9, 6);
