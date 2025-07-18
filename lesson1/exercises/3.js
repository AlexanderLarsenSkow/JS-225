/*

*/

function equalProperties(object1, object2, keys1) {
	return keys1.every(key => {
		return object1[key] === object2[key] && object2.hasOwnProperty(key);
	});
}

function equalKeys(keys1, keys2) {
	[keys1, keys2] = [keys1.toSorted(), keys2.toSorted()];
	
	return keys1.length === keys2.length && keys1.every((key, index) => {
		return key === keys2[index];
	});
}

function objectsEqual(object1, object2) {
	let [keys1, keys2] = [Object.keys(object1), Object.keys(object2)];
	return equalKeys(keys1, keys2) && equalProperties(object1, object2, keys1);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({a: 'foo', b: 'bar'}, {b: "bar", a: 'foo'}));  // true
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 1}, {a: 1, b: 2})); 												// false