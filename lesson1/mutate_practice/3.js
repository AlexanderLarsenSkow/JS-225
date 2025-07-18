let message = 'Hello from the global scope!';

function func() {
  message = 'Hello from the function scope!';
  console.log(message); // 
}

func(); //  'Hello from the function scope!'
console.log(message); //  'Hello from the function scope!'

/*
	This is an example of global scoping and visible vs declared scope in JS.
	Hello from the function scope is preinted both times as message is not shadowing the outer message
	inside the func body, instead this is a reassignment of hte outer variable.

	We will see this change reflected when we log the value referenced by the message variable on line 9.
*/