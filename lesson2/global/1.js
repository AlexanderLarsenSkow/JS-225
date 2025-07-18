/*
When strict mode is enabled, the implicit execution context is undefined,
	so var variables and undeclared variables are not added to the global / window object.

When strict mode is enabled, it will throw a referenceError if a variable is not declared,
	preventing it from becoming a property on window.
*/