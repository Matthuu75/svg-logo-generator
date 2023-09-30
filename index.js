// dependencies
const fs = require('fs');
const inquirer = require('inquirer');
const {Shape, Square, Circle, Triangle} = require('./lib/shapes');

class Svg{
    constructor(){
        this.svgText = ''
        this.svgShape = ''
    }
    render(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.svgShape}${this.svgText}</svg>`
    }
    setLogoText(text, color){
        this.svgText = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setLogoShape(shape){
        this.svgShape = shape.render();
    }
}

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
            const svg = new Svg();
            svg.setLogoText(data.text, data.textColor);
            const shapeMap = {
                Circle: Circle,
                Square: Square,
                Triangle: Triangle,
            };
            const shape = new shapeMap[data.shape]();
            shape.setColor(data.shapeColor);
            svg.setLogoShape(shape);
            writeToFile('./lib/logo.svg', svg.render());
        });
}

createLogo();