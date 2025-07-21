Object.prototype.begetObject = function() {
	function Make() {}
	Make.prototype = this;
	return new Make();
}

let foo = {
  a: 1,
};

let bar = foo.begetObject();
console.log(foo.isPrototypeOf(bar));         // true