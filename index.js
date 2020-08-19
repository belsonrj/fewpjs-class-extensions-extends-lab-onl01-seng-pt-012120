class Polygon {
  constructor(array) {
    this.side = side;
  }
  get countSides() {
    return sides.length
  }
  get perimeter() {
    return sides
  }
}

class Triangle extends Polygon {
  get isValid() {
    
  }
}

class Square extends Polygon {
  get isValid() {
    
  }
  get area() {
    return this.sideLength * this.sideLength;
  }
}
