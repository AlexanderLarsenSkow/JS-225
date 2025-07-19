function makeGreeting() {
  let foo = { greeting: 'hello' };
	
  return function(name) {
    foo.name = name;
    return foo;
  };
}

let greeting = makeGreeting();

// is the object eligible for GC here?
	
// No, the foo object is not eligible for GC here. The reason is because
// greeting is a closure that maintains a reference to that object, since it uses it inside
// its body.

// more code