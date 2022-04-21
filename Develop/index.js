// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');



// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
}, {
    type: 'input',
    name: 'projectOverview',
    message: 'Please give a brief overview of your project:'
}, {
    type: 'input',
    name: 'languagesUsed',
    message: 'What languages/frameworks did you use for this project?'
},{
    type: 'input',
    name: 'whyBuild',
    message: 'Why did you build this project?'
}, {
    type: 'input',
    name: 'problemSolves',
    message: 'What problem does it solve?',
}, {
    type: 'input',
    name: 'learned',
    message: 'What did you learn?',
}, {
    type: 'input',
    name: 'challenges',
    message: 'What challeneges did you face?',
}, {
    type: 'input',
    name: 'repo',
    message: 'What is your GitHub repo link?',
}, {
    type: 'input',
    name: 'pages',
    message: 'What is your GitHub pages link'
}];


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);

}

// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
  .then((answers) => {
   writeToFile('README.md', generateMarkdown(answers)) 
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });
} 

// Function call to initialize app
init();

