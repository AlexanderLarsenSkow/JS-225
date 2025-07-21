let ninja;
function Ninja() {
  this.swung = true;
}

ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword()); // true

/*
	Changing the function prototype of Ninja alters the object prototype for the ninja object.
	It doesn't matter that this occurs after it was instantiated. Ultimately, the behavior
	is found on the object prototype for ninja and the method returns true.
*/