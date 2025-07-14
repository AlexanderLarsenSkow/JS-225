class SmartPhone {
	constructor(brand, model, year) {
		this.brand = brand;
		this.model = model;
		this.year = year;
	}

	batteryCheck(level) {
		console.log(`The ${this.model} is at ${level}%.`);
	}

	info() {
		console.log(`Brand: ${this.brand}\n` +
			`Model: ${this.model}\n` +
			`Year: ${this.year}\n`
		);
	}
}

let apple = new SmartPhone('Apple', 'iPhone17', 2025);
let samsung = new SmartPhone('Samsung', 'Galaxy S21', 2020);

apple.info();
samsung.info();
apple.batteryCheck(100);
samsung.batteryCheck(50);