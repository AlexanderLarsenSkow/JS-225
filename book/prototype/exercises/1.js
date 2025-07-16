function SmartPhone(brand, model, year) {
	this.brand = brand;
	this.model = model;
	this.year = year;
}

SmartPhone.prototype.checkBattery = function() {
	console.log(`The ${this.brand} ${this.model} is at 50%`);
}

SmartPhone.prototype.info = function() {
	console.log(
		`Brand: ${this.brand}\n` +
		`Model: ${this.model}\n` +
		`Year: ${this.year}\n`
	);
}

let apple = new SmartPhone('Apple', 'iPhone 12', 2020);
let samsung = new SmartPhone('Samsung', 'GalaxyS21', 2021);

apple.checkBattery();

apple.info();
samsung.info();