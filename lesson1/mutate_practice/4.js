let a = 10;
let obj = {
  a
}

let newObj = obj; // same reference
newObj.a += 10; // adding 10

console.log(obj.a === a); // false, we have added 10 to the property
console.log(newObj.a === obj.a); // true, they have the same property

/*
	In this case, we create an object with 10: 10 as its key/value pairing.
	We then add 10 to the property value when we access that property on line 10.

	when comparing equivalence between the property and the variable's value, we get false
	since they are no longer the same number value.

	When checking newObj and obj 's property values for a, however, these are the same as 
	they share a reference to the same object. Thus, this returns true.
*/