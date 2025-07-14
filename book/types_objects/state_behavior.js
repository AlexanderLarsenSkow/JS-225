// State: data
// Behavior: functions / methods

// The cats have a mix of behavior and state

let Cat = {
	purr() {
		console.log('purr');
	},

	eat() {
		console.log('I am eating...');
	},
};

let cheddar = Object.assign({}, Cat);
let cocoa = Object.assign({}, Cat);

cheddar.name = 'Cheddar';
cheddar.color = 'orange';
cheddar.age = 5;

cocoa.name = 'Cocoa';
cocoa.color = 'brown';
cocoa.age = 3;

console.log(cheddar);
console.log(cocoa);