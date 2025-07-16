// Accessing Object Prototypes

class Animal {}
class Cat extends Animal {}

let cat = new Cat;
console.log(Object.getPrototypeOf(cat)); // Animal {}