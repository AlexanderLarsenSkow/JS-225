function makeHello(names) {
  return function() {
    console.log("Hello, " + names[0] + " and " + names[1] + "!");
  };
}

let helloSteveAndEdie = makeHello(["Steve", "Edie"]);

/*
JS will only be able to garbage collect the array when helloSteveAndEdie is reassigned to
a value like null. As long as the reference exists, the array will be kept on the heap and will
use up memory.
*/

helloSteveAndEdie = null;