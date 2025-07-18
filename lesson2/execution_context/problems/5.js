var a = 10;
let b = 10;
let c = {
  a: -10,
  b: -10,
};

function add() {
  return this.a + b;
}

c.add = add;

console.log(add()); // 20
console.log(c.add()); // 0

/*
	The resulting output is 20 for the function call and 0 for the method call.

	This is because, when the add function runs, this.a changes.

	First, var a creates a global property a on the global object, which is also the execution context
	for add() when it runs on line 14. As such, when it runs, this.a references 10 and b also references
	10, adding to 20.

	However, when an add property is added to the object c that references the add function,
	it creates a method. As such, now this.a is the property a in the object c, which is -10.

	So, when the method add() is called on the object c, it returns 0 instead as - 10 is added to 10.
*/
