let foo = {};
let bar = Object.create(foo);

foo.a = 1;
bar.a = 2;

console.log(bar.a); // 2

/*
	The lookup path checks bar first, where it finds the property a. So this code logs 2.
	it never checks foo.
*/