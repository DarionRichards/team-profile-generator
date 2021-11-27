const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const buildHead = (teamName) => `<!DOCTYPE html>
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

const buildBodyStart = (teamName) => `<body>
    <header class="header">${teamName}</header>

    <main>
        <section class="container">
            `;

const constructManagerCard = ({ name, id, email, officeNumber },
    getRole
) => `<section class="card-container">
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

const constructEngineerCard = ({ name, id, email, github },
    getRole
) => `<section class="card-container">
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

const constructInternCard = ({ name, id, email, school },
    getRole
) => `<section class="card-container">
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

const buildBodyEnd = () => `</section>
    </main>
</body>
</html>
`;

const buildTeam = (array, teamName) => {
    // empty string to store generated HTML cards
    let cards = "";

    // open HTML document
    const head = buildHead(teamName);
    const bodyStart = buildBodyStart(teamName);

    // map over each element, from the array argument passed when the function is invoked, append constructed cards to empty string (cards)
    array.map((object) => {
        if (object instanceof Manager) {
            const manager = constructManagerCard(object, object.getRole());
            cards += manager;
        }
        if (object instanceof Engineer) {
            const engineer = constructEngineerCard(object, object.getRole());
            cards += engineer;
        }
        if (object instanceof Intern) {
            const intern = constructInternCard(object, object.getRole());
            cards += intern;
        }
    });

    // close HTML document
    const bodyEnd = buildBodyEnd();

    // append generated strings in order of HTML
    const generatedHTML = head + bodyStart + cards + bodyEnd;

    console.log(generatedHTML);
    return generatedHTML;
};

// export buildTeam() function
module.exports = buildTeam;