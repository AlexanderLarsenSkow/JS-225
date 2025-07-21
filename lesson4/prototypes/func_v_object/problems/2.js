let RECTANGLE = {
  area() {
    return this.width * this.height;
  },

  perimeter() {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.perimeter = RECTANGLE.perimeter.call(this);
}

let rect1 = new Rectangle(2, 3);
console.log(rect1.area); // NaN, now 6
console.log(rect1.perimeter); // NaN, now 10

/*
Execution Context Problem.

this inside the area and perimeter methods refers to RECTANGLE since that is the calling object.
Because RECTANGLE has no width / height properties, referencing those properties returns undefined,
which results in the expression being coerced to NaN.

Can fix the results with Function.call
*/