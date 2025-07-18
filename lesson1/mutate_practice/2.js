let myObj = { message: 'Greetings from the global scope!' };

function func(obj) {
  obj.message = 'Greetings from the function scope!';
  console.log(obj.message);
}

func(myObj); // 'Greetings from the function scope!'

console.log(myObj.message); // 'Greetings from the function scope!'

/*
	This is an example of mutation, as the obj local variable is a direct reference to the same
	object in memory referenced by myObj. As such, changing its message property to a new string
	value mutates that object, and teh change is reflected when we later log that value with myObj.message.
*/