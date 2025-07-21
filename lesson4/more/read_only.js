let obj = {
	name: 'Obj',
};

Object.defineProperties(obj, {
	age: {
		value: 30,
		writable: false,
	},
});

console.log(obj.age); // 30
obj.age = 32;
console.log(obj.age); // 30, can't change it