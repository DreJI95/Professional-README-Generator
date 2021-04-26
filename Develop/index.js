// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const genMarkdown = require('./utils/generateMarkdown'); 

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if (titleInput){
                return true;}
              else{
                console.log('Please enter your project title!');
                return false;}
            }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project. This can include: What was your motivation? Why did you build this project? What problem does it solve? What did you learn? What makes this project stand out? (Required)',
        validate: descriptionInput => {
            if (descriptionInput){
                return true;}
              else{
                console.log('Please enter a description for your project!');
                return false;}
            }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? (Required)',
        validate: installationInput => {
            if (installationInput){
                return true;}
              else{
                console.log('Please enter the installation steps!');
                return false;}
            }
    },
    {
        type: 'input',
        name: 'usage',
        message: 
        `Provides instructions on how to utilize this application.
        To add a screenshot, create an 'assets/images' folder in your repository and upload your screenshot to it. Then, using the relative filepath, add it to your README using the following syntax:
        ----md
        ![alt text](assets/images/screenshot.png)
        ----
        (Required)
        `,
        validate: installationInput => {
            if (installationInput){
                return true;}
              else{
                console.log('Please enter the usage instructions!');
                return false;}
            }
    },
    {
        type: 'inout',
        name: 'collaborators',
        message: 'List collaborators, tutorials or thrid-party assests utilized in this project',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Select the licenses for your project.',
        choices: ['Apache v2', 'GNU GPLv3', 'MIT', 'ISC', 'GNU GPLv2']
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test examples of your application.'
    },
    {
        type: 'input',
        name: 'contact',
        message: 'Enter your Git profile. (Required)',
        validate: gitInput => {
            if (gitInput){
                return true;}
              else{
                console.log('Please enter your Git profile!');
                return false;}
            }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Do you have an email address for contact?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve,reject) => {
        fs.writeFile(fileName, data, err => {
            if (err)
            { reject(err);
              return; }

            resolve({
                ok: true,
                message: 'File created!'
            })
        })
    }).then( response => {console.log(response.message); })
}

// TODO: Create a function to initialize app
function init() {

    inquirer.prompt(questions).then(readMeResponses => { 

        return genMarkdown(readMeResponses); }
        
    ).then(markDownFile => { writeToFile('../README.md', markDownFile) }).catch(err => {
        console.log(err);
      });
}

// Function call to initialize app
init();
