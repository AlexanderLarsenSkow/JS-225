// do this in browser

a = 10;

console.log(window.a === a); // true

/*
This logs true, as when variables are undeclared (in the browser), this creates a 
new property on window.

This occurs becaues window/global is the implicit execution context when strict mode isn't enabled.
*/