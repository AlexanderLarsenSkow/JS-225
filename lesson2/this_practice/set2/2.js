let myObject = {
  count: 1,

  myChildObject: {
    myMethod() {
      return this.count;
    },
  },
};

console.log(myObject.myChildObject.myMethod.call(myObject)); // 1 if we refer directly to that.

// this refers to myChildObject

// this will return undefined since there is no count property for myChildObject