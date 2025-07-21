console.log(Object.getPrototypeOf([]) === Array.prototype);

function NewArray() {}

NewArray.prototype = Object.create(Object.getPrototypeOf([]));

NewArray.prototype.first = function() {
	return this[0];
}

let newArr = new NewArray();
let oldArr = new Array();

console.log(newArr.push(5));
console.log(oldArr.push(5));
console.log(newArr.first()); // 5
console.log(oldArr.first); // undefined