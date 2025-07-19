// let name = claim(5);
// if (memoryNotAllocated(name)) {
// 	throw new Error('Memory Allocation Error!');
// }

// copy(name, 'Sarah');
// console.log(name);
// release(name);

// This can be done in JS simply:

function logName() {
	let name = 'Sarah';
	console.log(name);
	return name;
}


let name = logName();

// String 'Sarah' released after function runs.
// After being returned and saved by variable, 'Sarah' is not marked for GC.

function go() {
  let foo = {};
  let bar = { qux: foo };
  foo.xyz = bar;
}

for (let count = 0; count < 1000000; count += 1) {
  go();
}
// There are now 2000000 objects still on the heap but ineligible for GC
