// dependencies
const fs = require('fs');
const inquirer = require('inquirer')
const createLogo = require()

function approveInput(input, message) {
    if (input) {
        return true;
    } else {
        console.log(message)
        return false;
    }
}

// questions user answers
const questions = [
    {
        type: 'input',
        name: 'text',
        message: '1-3 Letter text inside shape:',
        validate: input => approveInput(input, 'Add your 3 characters for inside your logo')
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Color your logo text:',
        validate: input => approveInput(input, 'Choose the color of your text')
    },    
    {
        type: 'list',
        name: 'shape',
        message: 'Shape of your logo:',
        choices: ['Circle', 'Square', 'Triangle'],
        default: ['None'],
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Color of your shape:',
        validate: input => approveInput(input, 'Choose the color of your logo shape')
    },
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, () => {
        console.log(`Generated logo.svg!`);
        })
};