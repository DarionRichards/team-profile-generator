const confirmTeamName = async(message) => {
    if (!message) {
        console.log("Please enter a team name to continue");
        return false;
    }
    return true;
};

const confirmAnswer = async(message) => {
    if (!message) {
        console.log("Please enter a value to continue");
        return false;
    }
    return true;
};

const teamNameQuestions = [{
    type: "input",
    name: "teamName",
    message: "Please enter your team name: ",
    validate: confirmTeamName,
}, ];

const managerQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the team manager's name: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the manager's employee ID: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number: ",
        validate: confirmAnswer,
    },
];

const optionQuestions = [{
    type: "list",
    name: "option",
    message: "Choose Engineer or Intern to enter another employee, otherwise finish building your team",
    choices: [{
            name: "Engineer",
            value: "engineer",
        },
        {
            name: "Intern",
            value: "intern",
        },
        {
            name: "Finish building your team",
            value: "fbt",
        },
    ],
}, ];

const engineerQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the engineer's name: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the engineer's employee ID: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the engineer's email: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the engineer's github username: ",
        validate: confirmAnswer,
    },
];

const internQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the intern's name: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "id",
        message: "Please enter the intern's employee ID: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email: ",
        validate: confirmAnswer,
    },
    {
        type: "input",
        name: "school",
        message: "Please enter the intern's school: ",
        validate: confirmAnswer,
    },
];

module.exports = {
    teamNameQuestions,
    managerQuestions,
    optionQuestions,
    engineerQuestions,
    internQuestions,
};