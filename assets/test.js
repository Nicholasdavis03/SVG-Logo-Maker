const { createLogo, generateSVG, saveSVG } = require('./index');
const { Triangle, Square, Circle } = require('../lib/shapes');
const fs = require('fs');
const inquirer = require('inquirer');

jest.mock('fs');

jest.mock('inquirer', () => ({
    prompt: jest.fn(),
}));

describe('Logo Maker', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should prompt the user for input and generate logo', async () => {
        inquirer.prompt.mockResolvedValueOnce({
            text: 'ABC',
            textColor: '#FF0000',
            shape: 'circle',
            shapeColor: '#0000FF',
        });

        await createLogo();

        expect(inquirer.prompt).toHaveBeenCalledTimes(1);
        expect(saveSVG).toHaveBeenCalledTimes(1);
        expect(saveSVG).toHaveBeenCalledWith(expect.any(String));
    });

    it('should generate correct SVG content for a circle', () => {
        const svgContent = generateSVG('ABC', '#FF0000', new Circle(50), '#0000FF');
        const expectedSVGContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#0000FF"/>
                <text x="50%" y="50%" fill="#FF0000" text-anchor="middle" dominant-baseline="middle" font-size="30">ABC</text>
                <path d="M0,0 L100,0 L50,100 Z" fill="#0000FF"/>
            </svg>
        `.trim();

        expect(svgContent.trim()).toBe(expectedSVGContent);
    });

    it('should generate correct SVG content for a square', () => {
        const svgContent = generateSVG('ABC', '#FF0000', new Square(100), '#0000FF');
        const expectedSVGContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#0000FF"/>
                <text x="50%" y="50%" fill="#FF0000" text-anchor="middle" dominant-baseline="middle" font-size="30">ABC</text>
                <rect width="100" height="100" fill="#0000FF"/>
            </svg>
        `.trim();

        expect(svgContent.trim()).toBe(expectedSVGContent);
    });

    it('should generate correct SVG content for a triangle', () => {
        const svgContent = generateSVG('ABC', '#FF0000', new Triangle(100, 100), '#0000FF');
        const expectedSVGContent = `
            <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="100%" height="100%" fill="#0000FF"/>
                <text x="50%" y="50%" fill="#FF0000" text-anchor="middle" dominant-baseline="middle" font-size="30">ABC</text>
                <path d="M0,0 L100,0 L50,100 Z" fill="#0000FF"/>
            </svg>
        `.trim();

        expect(svgContent.trim()).toBe(expectedSVGContent);
    });
});
