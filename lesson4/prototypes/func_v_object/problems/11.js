// Create a function that can create an object with a given 
// object as its prototype, without using Object.create.


// function createObject(obj) {
// 	let newObj = {};
// 	Object.setPrototypeOf(newObj, obj);

// 	return newObj;
// }

function createObject(obj) {
	function Make() {}
	Make.prototype = obj;
	return new Make();
}

let foo = {
  a: 1
};

let bar = createObject(foo);
console.log(foo.isPrototypeOf(bar));         // true