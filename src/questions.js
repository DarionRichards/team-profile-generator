const beginQuestions = [{
    type: "input",
    name: "teamName",
    message: "Please enter your team name: ",
}, ];

const managerQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the team manager's name: ",
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please enter the manager's employee ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the manager's email: ",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter the manager's office number: ",
    },
];

const optionQuestions = [{
    type: "list",
    name: "employee",
    message: "Choose Engineer or Intern to enter another employee, otherwise finish building your team",
    choices: [{
            name: "engineer",
            value: "Engineer",
        },
        {
            name: "intern",
            value: "Intern",
        },
        {
            name: "fbt",
            value: "Finish building your team",
        },
    ],
}, ];

const engineerQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the emgineer's name: ",
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please enter the engineer's employee ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the emgineer's email: ",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the emgineer's github username: ",
    },
];

const internQuestions = [{
        type: "input",
        name: "name",
        message: "Please enter the intern's name: ",
    },
    {
        type: "input",
        name: "employeeId",
        message: "Please enter the intern's employee ID: ",
    },
    {
        type: "input",
        name: "email",
        message: "Please enter the intern's email: ",
    },
    {
        type: "input",
        name: "github",
        message: "Please enter the intern's school: ",
    },
];