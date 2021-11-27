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

const start = async() => {
    const employeeArray = [];

    const teamNameAnswers = await prompt(teamNameQuestions);

    const { name, id, email, officeNumber } = await prompt(managerQuestions);
    const manager = new Manager({ name, id, email, officeNumber });
    employeeArray.push(manager);

    let askQuestions = true;
    while (askQuestions) {
        const optionAnswer = await prompt(optionQuestions);

        let userInput = optionAnswer.option;

        if (userInput === "engineer") {
            const { name, id, email, github } = await prompt(engineerQuestions);
            const employee = new Engineer({ name, id, email, github });
            employeeArray.push(employee);
        }
        if (userInput === "intern") {
            const { name, id, email, school } = await prompt(internQuestions);
            const intern = new Intern({ name, id, email, school });
            employeeArray.push(intern);
        }
        if (userInput === "fbt") {
            askQuestions = false;
        }
    }

    const generatedHTML = htmlTemplate(employeeArray, teamNameAnswers.teamName);

    writeToFile("GENERATED_HTML.html", generatedHTML);
};

start();