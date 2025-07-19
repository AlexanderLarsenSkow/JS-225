function makeAddN(addend) {
	return function(number) {
		return add(addend, number);
	};
}

let add = (num1, num2) => num1 + num2;

let add1 = makeAddN(1);
console.log(add1(10)); // 11

let add20 = makeAddN(20);
console.log(add20(100)); // 120