// let inventory = {
//   stocks: [],
  
// 	stockCounts() {
//     this.stocks.forEach(function(stock) {
//       console.log(stock.name + ': ' + String(stock.count));
//     });
//   },
// };

/*
	How do you

	1. Make sure that stocks are validated so that they are all unique?
	2. Make sure they can't directly add values to the stocks array?

	1. Add a validating method that checks if the name is present.
	2. Use IIFE to make the object private.
*/

// This creates private data and prevents all the issues above.
// It has a private stocks array that cannot be accessed elsewhere
// It also has a private method isValid that cannot be accessed outside of the object itself.

let inventory = (function() {
	let stocks = [];

	function isValid(newStock) {
		return stocks.every(stock => {
			return newStock.name !== stock.name;
		});
	}

	return {
		stockCounts() {
			stocks.forEach(stock => {
				console.log(stock.name + ': ' + String(stock.count));
			})
		},

		addStock(newStock) {
			if (isValid(newStock)) { stocks.push(newStock) }
		},
	};
})()

console.log(inventory);

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

inventory.addStock({
  name: 'ballpen',
  count: 5,
});

inventory.stockCounts();
// logs:
// ballpen: 5

// inventory.stocks.push({
//   name: 'ballpen',
//   count: 5,
// });
// // results in an error