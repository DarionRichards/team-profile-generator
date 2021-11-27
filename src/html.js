const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const buildHead = (teamName) => {
    return `<!DOCTYPE html>
<html lang="en">
    
<head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./dist/reset.css" />
        <link rel="stylesheet" href="./dist/styles.css" />
        <title>${teamName} Profiles</title>
</head>
    
`;
};

const buildBodyStart = (teamName) => {
    return `<body>
    <header class="header">${teamName}</header>

    <main>
        <section class="container">
            `;
};

const buildManagerCard = ({ name, id, email, officeNumber }, getRole) => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>${name}</h2>
                    <div>
                        <i class=""></i>
                        <h3>${getRole}</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID: ${id}</p>
                    <p class="card-info">Email: ${email}</p>
                    <p class="card-info">Office Number: ${officeNumber}</p>
                </section>
            </section>
            `;
};

const buildEngineerCard = ({ name, id, email, github }, getRole) => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>${name}</h2>
                    <div>
                        <i class=""></i>
                        <h3>${getRole}</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID: ${id}</p>
                    <p class="card-info">Email: ${email}</p>
                    <p class="card-info">GitHub: ${github}</p>
                </section>
            </section>
            `;
};

const buildInternCard = ({ name, id, email, school }, getRole) => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>${name}</h2>
                    <div>
                        <i class=""></i>
                        <h3>${getRole}</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID: ${id}</p>
                    <p class="card-info">Email: ${email}</p>
                    <p class="card-info">School: ${school}</p>
                </section>
            </section>
        `;
};

const buildBodyEnd = () => {
    return `</section>
    </main>
</body>
</html>
`;
};

const buildTeam = (array, teamName) => {
    let cards = "";

    const head = buildHead(teamName);
    const bodyStart = buildBodyStart(teamName);

    array.map((object) => {
        if (object instanceof Manager) {
            const manager = buildManagerCard(object, object.getRole());
            cards += manager;
        }
        if (object instanceof Engineer) {
            const engineer = buildEngineerCard(object, object.getRole());
            cards += engineer;
        }
        if (object instanceof Intern) {
            const intern = buildInternCard(object, object.getRole());
            cards += intern;
        }
    });

    const bodyEnd = buildBodyEnd();

    const generatedHTML = head + bodyStart + cards + bodyEnd;

    return generatedHTML;
};

module.exports = buildTeam;