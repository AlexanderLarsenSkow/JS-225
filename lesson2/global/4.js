function func() {
  let b = 1;
}

func(); // undefined

console.log(b); // ReferenceError

// func() returns undefined implictly and b results in a referenceError since it was
	// declared inside the function scope of func.