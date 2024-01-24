const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    
    {
        type: "input",
        name:"title",
        message: "What is the title of your project?",
    },
    {
        type: "input",
        name:"description",
        message: "Provide a short description of your project.",
    },
    {
        type: "input",
        name:"installation",
        message: "How do you install your project",
    },
    {
        type: "input",
        name:"usage",
        message: "How do you use your project?",
    },
    {
        type: "list",
        name:"license",
        message: "Chose a license for your project.",
        choices:["MIT","GPL","BSD","None"]
    },
    {
        type: "input",
        name:"contributing",
        message: "How Can other contribute to your project",
    },
    {
        type: "input",
        name:"tests",
        message: "How do you run tests for your project?",
    },
    {
        type: "input",
        name:"email",
        message: "What is your email address?",
    },
    {
        type: "input",
        name:"github",
        message: "What is your github username?",
    },
    
];

// function to write README file

const filePath = "README.md"
function writeToFile(filePath, generateMarkdown) {
    fs.writeFile(filePath,generateMarkdown, (err)=>{
        if (err) throw err;
        console.log(`${filePath} Successfully created`)
    });
}

// function to initialize program
function init() {
 inquirer
 .prompt(questions)
 .then((data)=>{
    const readMeContent= generateMarkdown(data)

    writeToFile(filePath, readMeContent)
 })
 .catch((error)=>console.error(error))
}

// function call to initialize program
init();
