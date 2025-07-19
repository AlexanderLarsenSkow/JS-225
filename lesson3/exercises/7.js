function makeArrays() {
  let array = [];

  return () => {
    array.push('');
    return array;
  };
}

const pushIt = makeArrays();
pushIt();
// more code

/*
GC will not collect this array because a reference is being maintained to it through the closure
created from teh anonymous function returned from makeArrays. Everytime pushIt is called, it will
add a new empty string to the array.

it effectively continues to exist until the end of the program, highlighting one of the dangers of closures
in that they can hide unused but memory-taking objects.
*/