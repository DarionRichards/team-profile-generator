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

const start = async() => {
    let employeeArray = [];
    let askQuestions = true;

    const teamNameAnswers = await prompt(teamNameQuestions);

    if (teamNameAnswers.teamName) {
        const managerAnswers = await prompt(managerQuestions);
        employeeArray.push(managerAnswers);

        if (managerAnswers) {
            while (askQuestions) {
                const optionAnswer = await prompt(optionQuestions);

                let userInput = optionAnswer.option;

                switch (userInput) {
                    case "engineer":
                        const engineerAnswers = await prompt(engineerQuestions);
                        employeeArray.push(engineerAnswers);
                        break;

                    case "intern":
                        const internAnswers = await prompt(internQuestions);
                        employeeArray.push(internAnswers);
                        break;

                    case "fbt":
                        console.log(employeeArray);
                        return (askQuestions = false);

                    default:
                        break;
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