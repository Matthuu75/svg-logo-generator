// dependencies
const fs = require('fs');
const inquirer = require('inquirer')
const {Shape, Square, Circle, Triangle} = require('./lib/shapes');

// questions user answers
const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter up to 3 characters:',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter a color for the text color:',
    },    
    {
        type: 'list',
        name: 'shape',
        message: 'Shape of your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
        default: ['Circle'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter a color for the shape color:',
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {
        console.log(`Generated logo.svg!`);
        })
};

function createLogo() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const svg = new logo();
            svg.setText(data.logoText, data.logoTextColor)
            const shape = eval(`new ${data.logoShape}()`)
            shape.setColor(data.logoShapeColor)
            svg.setShape(shape)
            writeToFile('', svg.render())
        })
        
};

createLogo();