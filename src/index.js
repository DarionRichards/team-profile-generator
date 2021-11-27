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
const Employee = require("./lib/Employee");

const start = async() => {
    let employeeArray = [];
    let askQuestions = true;

    const teamNameAnswers = await prompt(teamNameQuestions);

    if (teamNameAnswers.teamName) {
        const { name, id, email, officeNumber } = await prompt(managerQuestions);
        const manager = new Manager({ name, id, email, officeNumber });
        employeeArray.push(manager);

        if (manager) {
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
                    console.log(employeeArray);
                    return (askQuestions = false);
                }
            }
        }
    } else {
        console.log(
            "Please enter a VALID team name, in order to start building your team"
        );
    }
};

start();