function subtract(a, b) {
  return a - b;
}

function makeSubN(b) {
	return function(a) {
		return subtract(a, b);
	}
}

const sub5 = makeSubN(5);
const sub4 = makeSubN(4);
const sub7 = makeSubN(7);

console.log(sub5(10)); // 5
console.log(sub5(20)); // 15

console.log(sub4(10)); // 6
console.log(sub4(20)); // 16
console.log(sub7(10)); // 3
console.log(sub7(20)); // 13