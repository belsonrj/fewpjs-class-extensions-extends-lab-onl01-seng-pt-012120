class Polygon {
  constructor( sides ) {
    this.sides = sides
    this.count = this.sides.length
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
