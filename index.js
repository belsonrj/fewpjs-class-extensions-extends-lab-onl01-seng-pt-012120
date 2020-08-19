class Polygon {
  constructor(array) {
    
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
