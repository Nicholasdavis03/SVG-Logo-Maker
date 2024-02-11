// circle.js
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    // Method to calculate the area of the circle
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}

module.exports = Circle;
