const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require('./lib/manager.js');
const Engineer = require('./lib/engineer.js');
const Intern = require('./lib/intern.js')

const managerHtml = require('./src/managerHtml.js');
const engineerHtml = require('./src/engineerHtml.js');
const internHtml = require('./src/internHtml.js')

const teamMembersArr= []

inquirer
  .prompt()

    createTeam (
      {
        type: "list",
        message: "Would you like to add more members?",
        name: "teamMembers",
        choices: ["Yes, I would like to add an Engineer.", "Yes, I would like to an Intern.", "No, my team is complete"]
      },
      //if yes, i would like an enginer then engineerPrompt(), if yes, intern then internPrompt(), if no, my team is complete, then buildHtml(). 
    )
    managerPrompt ([
      {
        type: "input",
        message: "Welcome! To begin building your team, what is your team's name?",
        name: "teamName",
      },
      {
        type: "input",
        message: "What is your manager's name?",
        name: "managerName",
      },
      {
        type: "input",
        message: "What is your manager's employee ID?",
        name: "managerID",
      },
      {
        type: "input",
        message: "What is your manager's email address?",
        name: "managerEmail",
      },
      {
        type: "input",
        message: "What is your manager's office number",
        name: "managerOffice",
      },
      //call createTeam()
    ])
    internPrompt (
      [
        {
          type: "input",
          message: "What is your intern's name?",
          name: "internName",
        },
        {
          type: "input",
          message: "What is your intern's employee ID?",
          name: "internID",
        },
        {
          type: "input",
          message: "What is your intern's email address?",
          name: "internEmail",
        },
        {
          type: "input",
          message: "What is your intern's school",
          name: "internSchool",
        },
        //call createTeam()
      ])

    engineerPrompt (
      [
        {
          type: "input",
          message: "What is your engineer's name?",
          name: "engineerName",
        },
        {
          type: "input",
          message: "What is your engineer's employee ID?",
          name: "engineerID",
        },
        {
          type: "input",
          message: "What is your engineer's email address?",
          name: "engineerEmail",
        },
        {
          type: "input",
          message: "What is your engineer's GitHub username",
          name: "engineerGithub",
        },
        //call createTeam()
      ]

    )
    buildHtml ()

  
  .then((data) => {
    // const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;
    const html =
    `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        />
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossorigin="anonymous"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com">
        <link href="https://fonts.googleapis.com/css2?family=Francois+One&display=swap" rel="stylesheet">
        <link rel="stylesheet" href="./style.css" />
        
        <title>${teamName} Team Profiles</title>
      </head>
    
      <body>
        <header>
          <nav class="navbar navbar-expand-lg navbar-light bg-custom">
            <div class="container-fluid">
              <h1 class="mx-auto display-4">${teamName} Team Profiles</h1>
            </div>
          </nav>
        </header>
        <div class="container-fluid mx-auto">
        
            <div class="row employeeRow"> 
            ${addCard} 
            </div>
            </div>
            <script src="index.js"></script>
            </body>
        </html>
    `

    fs.writeFile("index.html", html, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
