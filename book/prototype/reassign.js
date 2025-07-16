// Reassigning Prototypes!

// Can impact efficiency and be hard to maintain. Not a great reason to do it.

class Animal {}
class Cat extends Animal {}

let cat = new Cat;
console.log(Object.getPrototypeOf(cat)); // Animal {}

let myProto = {
	meow() {
		console.log('meow!');
	}
};

Object.setPrototypeOf(cat, myProto);
let catProto = Object.getPrototypeOf(cat);

cat.meow(); // meow!
console.log(catProto === Cat.prototype); // false, cat's prototype has been changed
console.log(catProto === myProto); // true, same object.