let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// Reassigning the prototype of the constructor function does not affect the object prototype of
	// the instantiated objects.

console.log(Object.getPrototypeOf(ninja) === Ninja.prototype);
// console.log(ninja.swingSword()); // TypeError

let newNin = new Ninja();
console.log(newNin.swingSword()); // true

/*
This code results in a TypeError, as the ninja object is not connected to the new function
prototype of Ninja. In this case, ninja has an object prototype which was the old function prototype
of the constructor function Ninja.

Reassigning it causes new Ninja objects to receive the new prototype; the old objects retain the
old one.
*/