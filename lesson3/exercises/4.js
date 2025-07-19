function myBind(func, context) {
	return function() {
		return func.apply(context);
	}
}

function log() {
	console.log(this);
}

const log2 = () => console.log(this.a); // cannot bind arrow functions, interesting.

let obj = {
	a: 1,
	b: 2,
};

const objLog = myBind(log, obj);
const objLog2 = myBind(log2, obj);

objLog(); // { a: 1, b: 2 }
objLog2(); // undefined