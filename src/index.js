// Imported Depndencies
const fs = require("fs");
const { prompt } = require("inquirer");

//  Imported Classes
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");

// Imported Questions
const {
    teamNameQuestions,
    managerQuestions,
    optionQuestions,
    engineerQuestions,
    internQuestions,
} = require("./questions");

// Imported HTML
const htmlTemplate = require("./html");

// Write HTML File
const writeToFile = (filePath, data) => {
    try {
        fs.writeFileSync(filePath, data);
    } catch (error) {
        console.log(error.message);
    }
};

// Call this function to start application
const start = async() => {
    // store employee objects here
    const employeeArray = [];

    // ask team name question
    const teamNameAnswers = await prompt(teamNameQuestions);

    // ask manager questions, push answers to employeeArray
    const { name, id, email, officeNumber } = await prompt(managerQuestions);
    const manager = new Manager({ name, id, email, officeNumber });
    employeeArray.push(manager);

    // condition for while loop
    let askQuestions = true;

    while (askQuestions) {
        // ask the user if they wish to create a new employee or finish building team
        const optionAnswer = await prompt(optionQuestions);

        // get the user's option
        let userInput = optionAnswer.option;

        // conditions for userInput
        // ask the engineer questions, if user chooses "Engineer", push answers to employeeArray
        if (userInput === "engineer") {
            const { name, id, email, github } = await prompt(engineerQuestions);
            const employee = new Engineer({ name, id, email, github });
            employeeArray.push(employee);
        }
        // ask the intern questions, if user chooses "Intern", push answers to employeeArray
        if (userInput === "intern") {
            const { name, id, email, school } = await prompt(internQuestions);
            const intern = new Intern({ name, id, email, school });
            employeeArray.push(intern);
        }
        // break the while loop
        if (userInput === "fbt") {
            askQuestions = false;
        }
    }

    // store HTML string here
    const generatedHTML = htmlTemplate(employeeArray, teamNameAnswers.teamName);

    // pass string and write HTML file
    writeToFile("GENERATED_HTML.html", generatedHTML);
};

start();