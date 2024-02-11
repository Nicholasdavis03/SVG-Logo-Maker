# SVG-Logo-Maker

This is a command-line application that allows users to generate SVG logos with customizable text and shapes.

## Functionality 


## Feature

- **Text Input:** Users can enter up to three characters for the logo text.
- **Color Selection:** Users can specify the text color and shape color using color keywords or hexadecimal numbers.
- **Shape Options:** Users can choose from three shapes: circle, triangle, and square.
- **SVG Generation:** The application generates an SVG file with the specified text and shape, which can be opened in any SVG-compatible viewer.
- **Output Confirmation:** After generating the SVG file, the application prints a confirmation message to the command line.

## Usage

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running `npm install`.
4. Run the application using `node index.js`.
5. Follow the prompts to enter text, colors, and choose a shape.
6. The generated logo.svg file will be saved in the `logos` folder within the project directory.

## Dependencies

- [inquirer](https://www.npmjs.com/package/inquirer) - For prompting user input.
- [fs](https://nodejs.org/api/fs.html) - For file system operations.
- [path](https://nodejs.org/api/path.html) - For working with file paths.

## License

This project is licensed under the MIT License - see the [MIT](LICENSE) file for details.
