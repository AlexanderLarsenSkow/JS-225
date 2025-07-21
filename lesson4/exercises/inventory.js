/*
Inventory Management System

item creator - all necessary items present and valid
item manager - creates items, updates info about items, deletes items, and queries info about items
reports manager- generates reports for specific item or ALL items
	- generated from report objects

Required Info for Item:
	- SKU code:	
		- first 3 letters of item and first 2 letters of category
		- if item name is 2 words and first word is only 2 letters, the next letter is from next word.
	- Item Name:
		- Must be min of 5 chars. Spaces not counted as chars.
	- Category:
		- Category that the item belongs to. Min 5 chars and must be 1 word.
	- Quantity:
		- amount in stock for an item. Must not be blank. valid number will be input
		
	Item Manager:
		create: This method creates a new item. Returns false if creation is not successful.

		update: This method accepts an SKU Code and an object as an argument and updates any of the 
		information on an item. You may assume valid values will be provided.

		delete: This method accepts an SKU Code and deletes the item from the list. 
		You may assume a valid SKU code is provided.

		items: This property contains a list of all the items.

		inStock: This method returns a list of all the items that have a quantity greater than 0.

		itemsInCategory: This method returns a list of all the items for a given category


		Reports Manager:
			init:

			createReporter

			reportInStock
		
*/

class Item {
	constructor(name, category, quantity) {
		this.skuCode = this.#skuCode(name, category);
		this.name = this.#name(name);
		this.category = this.#category(category);
		this.quantity = this.#quantity(quantity);
	}

	#skuCode(code, category) {
		let noSpaces = code.replace(/\s/g, '');
		let first3 = noSpaces.slice(0, 3);
		let last2 = category.slice(0, 2);

		return (first3 + last2).toUpperCase();
	}

	#name(name) {
		let noSpaces = name.replace(/\s/g, '');
		if (noSpaces.length >= 5) {
			return name;
		} else {
			throw new Error(`${name} should have at least 5 characters.`);
		}
	}

	#category(category) {
		const oneWordRegex = /^[a-z]{5,}$/gi;
		if (oneWordRegex.test(category)) {
			return category;
		} else {
			throw new Error(`${category} should only be 1 word and should have at least 5 characters`);
		}
	}

	#quantity(quantity) {
		if (quantity === undefined) {
			throw new Error('Please enter a value for the quantity.');
		}

		return quantity;
	}
}

class ItemManager {
	static items = [];

	static create(name, category, quantity) {
		let item;

		try {
			item = new Item(name, category, quantity);
		} catch(e) {
			return false;
		}

		ItemManager.items.push(item);
		return item;
	}

	static findItem(skuCode) {
		return ItemManager.items.find(item => {
			return item.skuCode === skuCode;
		})
	}

	static update(skuCode, object) {
		let item = ItemManager.findItem(skuCode);
		let newProps = Object.keys(object);

		newProps.forEach(property => {
			if (item.hasOwnProperty(property)) {
				item[property] = object[property];
			}
		})
		return item;
	}

	static delete(skuCode) {
		let index = ItemManager.items.findIndex(item => {
			return skuCode === item.skuCode;
		})

		ItemManager.items.splice(index, 1);
	}

	static inStock() {
		return ItemManager.items.filter(item => {
			return item.quantity > 0;
		})
	}

	static itemsInCategory(category) {
		return ItemManager.items.filter(item => {
			return item.category === category;
		})
	}
}

class ReportManager {
	static init(ItemManager) {
		this.items = ItemManager;
	}

	static createReporter(skuCode) {
		let item = this.items.findItem(skuCode);
		let reporter = Object.assign({}, item);

		reporter.itemInfo = function() {
			console.log(`SKU Code: ${item.skuCode}`);
			console.log(`Name: ${item.name}`);
			console.log(`Category: ${item.category}`);
			console.log(`Quantity: ${item.quantity}`);
		}

		return reporter;
	}

	static reportInStock() {
		let inStock = this.items.inStock();
		let names = inStock.map(item => item.name);
		console.log(names.join(', '));
	}
}

ItemManager.create('basket ball', 'sports', 0);           // valid item
ItemManager.create('asd', 'sports', 0);
ItemManager.create('soccer ball', 'sports', 5);           // valid item
ItemManager.create('football', 'sports');
ItemManager.create('football', 'sports', 3);              // valid item
ItemManager.create('kitchen pot', 'cooking items', 0);
ItemManager.create('kitchen pot', 'cooking', 3);          // valid item

console.log(ItemManager.items);
// // returns list with the 4 valid items

ReportManager.init(ItemManager);
console.log(ReportManager);
ReportManager.reportInStock();
// // logs soccer ball,football,kitchen pot

ItemManager.update('SOCSP', { quantity: 0 });
console.log(ItemManager.inStock());
// // returns list with the item objects for football and kitchen pot
ReportManager.reportInStock();
// // logs football,kitchen pot
console.log(ItemManager.itemsInCategory('sports'));
// // returns list with the item objects for basket ball, soccer ball, and football
ItemManager.delete('SOCSP');
console.log(ItemManager.items);
// // returns list with the remaining 3 valid items (soccer ball is removed from the list)

const kitchenPotReporter = ReportManager.createReporter('KITCO');
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 3

ItemManager.update('KITCO', { quantity: 10 });
kitchenPotReporter.itemInfo();
// // logs
// // skuCode: KITCO
// // itemName: kitchen pot
// // category: cooking
// // quantity: 10