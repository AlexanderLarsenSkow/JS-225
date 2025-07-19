let myNum = 1;

function foo() {
  let myArr = ['this is an array'];
  // what is eligible for GC here? // nothing eligible here.
}

foo();

// After running, there are no references left to the myArr array, so that is garbage collected.
// myNum is a global variable, however, so that is not garbage collected and is still on the heap.

// what is eligible for GC here? // myArr eligble here.

// more code