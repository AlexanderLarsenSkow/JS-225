let obj = {
  a: 2,
  b: 3,
};

function foo() {
  return this.a + this.b;
}

let bar = foo.bind(obj);

console.log(bar()); // 5

/*
	bar references the bound function whose context is permanently obj. So, when it runs,
		this always refers explicitly to obj.
*/