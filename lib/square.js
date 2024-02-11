// square.js
class Square {
    constructor(side) {
        this.side = side;
    }

    // Method to calculate the area of the square
    calculateArea() {
        return this.side ** 2;
    }
}

module.exports = Square;
