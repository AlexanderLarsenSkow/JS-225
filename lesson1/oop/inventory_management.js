function toolMaker(id, name, stock, price) {
	return {
		id,
		name,
		stock,
		price,

		changePrice(newPrice) {
			if (newPrice <= 0) {
				console.log('Alert! The price must be greater than 0!');
			} else {
				this.price = newPrice;
				console.log(`You have successfully changed the price to $${newPrice}!`);
			}
		},

		describe() {
			console.log(
				`Name: ${this.name}\n` +
				`ID: ${this.id}\n` +
				`Price: $${this.price}\n` +
				`Stock: ${this.stock}\n`
			);
		},
	};
}


let scissors = toolMaker(0, 'Scissors', 8, 10);
let drill = toolMaker(1, 'Cordless Drill', 15, 45);

scissors.changePrice(15);
scissors.changePrice(0);

drill.describe();
scissors.describe();

console.log(scissors);
console.log(drill);

// let scissorsId = 0;
// let scissorsName = 'Scissors';
// let scissorsStock = 8;
// let scissorsPrice = 10;

// let drillId = 1;
// let drillName = 'Cordless Drill';
// let drillStock = 15;
// let drillPrice = 45;