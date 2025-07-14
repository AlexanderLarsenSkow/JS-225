function SmartPhone(brand, model, release) {
	this.brand = brand;
	this.model = model;
	this.release = release;

	this.checkBattery = function checkBattery(level) {
		console.log(`The battery is at ${level}%.`);
	};

	this.displayInfo = function displayInfo() {
		console.log(`Brand: ${this.brand}\nModel: ${this.model}\nRelease: ${this.release}`);
	}
}

let apple = new SmartPhone('Apple', 'iPhone 12', 2020);
let samsung = new SmartPhone('Samsung', 'Galaxy S21', 2021);

console.log(apple);
console.log(samsung);

apple.checkBattery(50);
apple.displayInfo();

samsung.checkBattery(95);
samsung.displayInfo();