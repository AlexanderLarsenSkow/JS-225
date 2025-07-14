function smartPhone(brand, model, year) {
	return {
		brand,
		model,
		year,

		batteryCheck(level) {
			console.log(`The battery is at ${level}%.`);
		},

		info() {
			console.log(`Brand: ${this.brand}\n` + 
				`Model: ${this.model}\n` +
				`Year: ${this.year}`
			);
		},
	};
}

let apple = smartPhone('Apple', 'iPhone 12', 2020);
let samsung = smartPhone('Samsung', 'Galaxy S21', 2021);

apple.info();
samsung.info();

apple.batteryCheck(75);