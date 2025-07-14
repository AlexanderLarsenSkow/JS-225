/*
When calling super in a constructor, it is called like a function.
When calling super in a separate method, it is called like a method with dot notation.
*/

class Parent {
	whatMethod() {
		console.log('In the parent method.');
	}
}

class Child extends Parent {
	whatMethod() {
		console.log('In the child method.');
		super.whatMethod(); // calling the superclasses' method here
		console.log('back in the child method.');
	}
}

let child = new Child;
child.whatMethod();

/*
In the child method.
In the parent method.
back in the child method.
*/