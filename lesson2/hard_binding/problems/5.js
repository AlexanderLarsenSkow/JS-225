let obj = {
  a: 'Amazebulous!',
};

let otherObj = {
  a: "That's not a real word!",
};

function foo() {
  console.log(this.a);
}

let bar = foo.bind(obj);

bar.call(otherObj); // 'Amazebulous!'

/*
	It doesn't matter if you try to explicitly set the context in a call. That is a permanent binding.
*/