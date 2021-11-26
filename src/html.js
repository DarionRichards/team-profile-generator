const buildHead = () => {
    return `<!DOCTYPE html>
<html lang="en">
    
<head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="./reset.css" />
        <link rel="stylesheet" href="./styles.css" />
        <title>Team Profiles</title>
</head>
    
`;
};

const buildBodyStart = () => {
    return `<body>
    <header class="header">My Team</header>

    <main>
        <section class="container">
            `;
};

const buildManagerCard = () => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>Name</h2>
                    <div>
                        <i class=""></i>
                        <h3>Status</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID:</p>
                    <p class="card-info">Email:</p>
                    <p class="card-info">Office Number:</p>
                </section>
            </section>
            `;
};

const buildEngineerCard = () => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>Name</h2>
                    <div>
                        <i class=""></i>
                        <h3>Status</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID:</p>
                    <p class="card-info">Email:</p>
                    <p class="card-info">GitHub:</p>
                </section>
            </section>
            `;
};

const buildInternCard = () => {
    return `<section class="card-container">
                <section class="card-title">
                    <h2>Name</h2>
                    <div>
                        <i class=""></i>
                        <h3>Status</h3>
                    </div>
                </section>
                <section class="card-body">
                    <p class="card-info">ID:</p>
                    <p class="card-info">Email:</p>
                    <p class="card-info">School:</p>
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

const buildTeam = () => {
    const head = buildHead();
    const body = buildBodyStart();
    const managerCard = buildManagerCard();
    const engineerCard = buildEngineerCard();
    const internCard = buildInternCard();
    const buildEnd = buildBodyEnd();

    let string = "";

    console.log(
        head +
        body +
        managerCard +
        engineerCard +
        engineerCard +
        internCard +
        buildEnd
    );
};

buildTeam();