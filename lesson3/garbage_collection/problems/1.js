let a = [1];

function add(b) {
  a = a.concat(b);
}

function run() {
  let c = [2];
  let d = add(c);
}

run();

// [1] is garbage collected after it the concat call. No more references to a.
// [2] is garbage collected after the function run is invoked, which no longer has any references.
// [1, 2] continues to be referenced by a after runtime, so it is not garbage collected.