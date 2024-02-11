const fs = require('fs');
const Triangle = require('../lib/triangle');
const Square = require('../lib/square');
const Circle = require('../lib/circle');



(async () => {
    
    const { createPromptModule } = await import('inquirer');

    // Create a prompt module
    const prompt = createPromptModule();

    async function promptUser() {
        const userInput = await prompt([
            {
                type: 'input',
                name: 'text',
                message: 'Enter up to three characters for the text:',
                validate: function(value) {
                    return value.length > 0 && value.length <= 3 ? true : 'Please enter up to three characters.';
                }
            },
            {
                type: 'input',
                name: 'textColor',
                message: 'Enter the text color (color keyword or hexadecimal number):'
            },
            {
                type: 'list',
                name: 'shape',
                message: 'Choose a shape:',
                choices: ['circle', 'triangle', 'square']
            },
            {
                type: 'input',
                name: 'shapeColor',
                message: 'Enter the shape\'s color (color keyword or hexadecimal number):'
            }
        ]);

        createLogo(userInput.text, userInput.textColor, userInput.shape, userInput.shapeColor);
    }

    function createLogo(text, textColor, shapeType, shapeColor) {
        let shape;
        switch (shapeType) {
            case 'triangle':
                shape = new Triangle(100, 100); // You can adjust dimensions as needed
                break;
            case 'square':
                shape = new Square(100); // You can adjust dimensions as needed
                break;
            case 'circle':
                shape = new Circle(50); // You can adjust dimensions as needed
                break;
            default:
                console.log('Invalid shape type');
                return;
        }

        const svgContent = generateSVG(text, textColor, shape, shapeColor);
        saveSVG(svgContent);
    }

    function generateSVG(text, textColor, shape, shapeColor) {
        const svgContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="${shapeColor}"/>
                <text x="50%" y="50%" fill="${textColor}" text-anchor="middle" dominant-baseline="middle" font-size="30">${text}</text>
                <!-- Example: Render shape -->
                <path d="${getShapePath(shape)}" fill="${shapeColor}"/>
            </svg>
        `;
        return svgContent;
    }

    function saveSVG(svgContent) {
        fs.writeFileSync('logo.svg', svgContent);
        console.log('Generated logo.svg');
    }

    function getShapePath(shape) {
        // Function to get SVG path for a shape
        // You need to implement this based on the shape class
        // For example, for Triangle:
        if (shape instanceof Triangle) {
            return `M0,0 L${shape.base},0 L${0.5 * shape.base},${shape.height} Z`;
        }
        // Add other shapes if needed
    }

    promptUser();
})();

