var message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage(); // 'Hello from the global scope!'

let bar = {
  message: 'Hello from the function scope!',
};

bar.deliverMessage = deliverMessage;

bar.deliverMessage(); // 'Hello from the function scope!'

/*
	In this case, deliverMessage is used to return message property for this, which changes
	based on the execution context.

	when deliverMessage() is called on line 7, it then outputs Hello from the global scope
	because var variables (out of strict) create global properties (browser, not node)

	later, a bar object is declared and a new property deliverMessage is created that references
	the function (here a method) deliverMessage.

	When this is called on bar, now bar is the implicit execution context and the string
	'Hello from the function scope!' runs.
*/