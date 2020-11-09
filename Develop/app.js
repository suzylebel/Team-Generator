// classes to use
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//include html files?
const mainhtml = require("./templates/main.html");
const managerhtml = require("./templates/maanger.html");
const engingeerhtml = require("./templates/engineer.html");
const internhtml = require("./templates/intern.html")


// npm packages
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const finalTeam = [];

// prompt questions for user on CLI- delted this from test.js file given to us. putting in app.js
const APP = () => {
    console.log("Get ready to build your team!")
inquirer
.prompt([ 
    {
    type: 'input',
    name: 'name',
    message: 'what is your name?',
},
{
    type: 'input',
    name: 'role',
    message: 'what is your role?',
},
{
    type: 'input',
    name: 'email',
    message: 'what is your email?',
},
{
    type: 'input',
    name: 'id',
    message: 'what is your office id #?',
    validate(value) {
        const valid = !isNaN(parseFloat(value));
        return valid || "Please enter a number.";
    }
},
    
])
}

function addTeammembers (){
    inquirer
    .prompt([
        {
        type: 'list',
        name: "addMembers",
        message: "What would you like to do next?",
        choices: [
            "Add a manager",
            "Add an Intern",
            "Add an Engineer",
            "See my team!"
        ]
        }
    ])
    .then(answers => {
        switch (answers.addMembers){
            case "Add a manager": {
                promptManager();
            break;
            }
            case 'Add an Intern': {
                 promptIntern();
            break;
            }
            case 'Add an Engineer': {
                promptEngineer();
            break;    
            }
            case "See my team!": {
                createHtmlTeam();
            break;    
            }
        }
    });
}

const promptManager = () => {
    console.log("Enter information for Manager ");
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is the Manager  name", 
        },
        {
            type: 'input',
            name: 'ManagerID',
            message: "What is the Manager ID", 
        },
        {
            type: 'input',
            name: 'managerEmail',
            message: "What is the Manager email", 
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the Manager's Office Number?", 
        }
        .then(response => {
            const Manager = new Manager(
            response.managerName,
            response.managerID,
            response.managerEmail,
            response.officeNumber,
            );
        })
    ])
}

const promptEngineer = () => {
    console.log("Enter information for Engineer");
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'engineerName',
            message: "What is the Engineers name", 
        },
        {
            type: 'input',
            name: 'engineerID',
            message: "What is the Engineers ID", 
        },
        {
            type: 'input',
            name: 'engineerEmail',
            message: "What is the Engineers email", 
        },
        {
            type: 'input',
            name: 'engineerGithub',
            message: "What is the Engineers Github Username", 
        }
        .then(response => {
            const Engineer = new Engineer(
            response.engineerName,
            response.engineerID,
            response.engineerEmail,
            response.engineergithub,
            );
        })
    ])
};

const promptIntern = () => {
    console.log("Enter information for Intern ");
    inquirer
    .prompt([
        {
            type: 'input',
            name: 'internName',
            message: "What is the Intern  name", 
        },
        {
            type: 'input',
            name: 'internID',
            message: "What is the Intern ID", 
        },
        {
            type: 'input',
            name: 'internEmail',
            message: "What is the Intern email", 
        },
        {
            type: 'input',
            name: 'internSchool',
            message: "What is the Intern's School?", 
        }
        .then(response => {
            const Intern = new Intern(
            response.internName,
            response.internID,
            response.internEmail,
            response.internSchool,
            );
        })
    ])
}

function createHtmlTeam() {
    const writefinalteam = finalTeam.join('');
    fs.writeFileSync(outputPath, mainHTML(writefinalteam), "utf-8");
}

APP();


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
