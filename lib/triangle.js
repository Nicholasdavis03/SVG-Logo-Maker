// triangle.js
class Triangle {
    constructor(base, height) {
        this.base = base;
        this.height = height;
    }

    // Method to calculate the area of the triangle
    calculateArea() {
        return 0.5 * this.base * this.height;
    }
}

module.exports = Triangle;
