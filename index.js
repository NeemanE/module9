// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


//validate inputs
function validateInputs(value) {
    if (value != "") {
        return true;
    } else {
        return "Required field";
    }
}

// TODO: Create an array of questions for user input
const questions = [
    //title
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?",
        validate: validateInputs,
    },

    //Description
    {
        type: "input",
        name: "description",
        message: "Enter a description for your project.",
        validate: validateInputs,
    },

    //installation
    {
        type: "input",
        name: "installation",
        message: "Enter installation instructions/requirements for this project.",
        validate: validateInputs,
    },

    //usage
    {
        type: "input",
        name: "usage",
        message: "Enter how this project or program is to be used.",
        validate: validateInputs,
    },

    //license
    {
        type: "list",
        name: "license",
        message: "Choose which licenses (if any) are applicable",
        choices: [
            "Apache",
            "Academic",
            "GNU",
            "ISC",
            "MIT",
            "Mozilla",
            "Open Source"
        ]
    },
    //contribution
    {
        type: "input",
        name: "contribution",
        message: "How can users contribute to your project/repo?",
        validate: validateInputs,
    },

    //tests
    {
        type: "input",
        name: "tests",
        message: "Please enter testing instructions for the project.",
        validate: validateInputs,
    },

    //Github
    {
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
        validate: validateInputs,
    },

    //email
    {
        type: "input",
        name: "Email",
        message: "Enter your email for users to contact you.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), function (err) {
        if (err) {
            return console.log(err);
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init();