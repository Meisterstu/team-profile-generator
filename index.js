const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

// set up files, npm init -y, npm i inquirer@6.3.1, npm i jest, added jest to test line in package-json, npm run test, created .gitignore and added node_modules & **/.DS_Store.   DONE

// create employee class in lib file   DONE NOT WORKING
// create engineer, intern and manager sub-classes in lib files   DONE NOT WORKING
// classes above need to pass the tests in __tests__ files   DONE NOT WORKING

// create the inquirer prompt to ask for manager info
// create the inquirer flow so it will ask different questions (inquirer prompts) based on user choice
// write html result to file


// need to check and make sure the name field matches with the class object properties and the 
const questions = [
    {
        type: "input",
        name: "name",
        message: "What is the team managers name"
    },
    {
        type: "input",
        name: "id",
        message: "What is the team managers id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is the team managers email?"
    },
    {
        type: "input",
        name: "officeNumber",
        message: "What is the team managers office number?"
    },
    {
        type: "list",   // this user choice will either re-loop questions or end questions.
        name: "",       //need to select name
        message: "What type of team member would you like to add?",
        choices: ["Engineer", "Intern", "none"],
    },
    {
        type: "input",
        name: "name",
        message: "What is your engineers name"
    },
    {
        type: "input",
        name: "id",
        message: "What is your engineers id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your engineers email?"
    },
    {
        type: "input",
        name: "GitHub",
        message: "What is your engineers GitHub username?"
    },
    {
        type: "input",
        name: "name",
        message: "What is your interns name"
    },
    {
        type: "input",
        name: "id",
        message: "What is your interns id?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your interns email?"
    },
    {
        type: "input",
        name: "school",
        message: "What is your interns school?"
    },
];

// example below of recursive question, need to adapt this to link to the list question above
// function ask() {
//     inquirer.prompt(questions).then((answers) => {
//       output.push(answers.tvShow);
//       if (answers.askAgain) {
//         ask();
//       } else {
//         console.log('Your favorite TV Shows:', output.join(', '));
//       }
//     });
//   }


// code taken from README-Generator, will need adapting

// function to write README file
// function writeToFile(fileName, data) {
//     fs.writeFileSync(fileName, data)
// }

// function to initialize program
// function init() {
//     inquirer
//         .prompt(questions)
//         .then((answers) => {
//             console.log(answers);
//             const readMeContent = generateMarkdown(answers);
//             //write to file
//             writeToFile('./output/README.md', readMeContent)
//         })
// }

// function call to initialize program
// init();