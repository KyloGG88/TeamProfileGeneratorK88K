const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const { ObjectUnsubscribedError } = require("rxjs");

const team = [];

const managerQuestions = [
  {
      type: "input",
      name: "name",
      message: "What is the Manager's name?",
      validate: validateInput
  },
  {
      type: "input",
      name: "id",
      message: "What is this employee's id?",
      validate: validateInput
  },
  {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
      validate: validateInput
  },
  {
      type: "input",
      name: "officeNumber",
      message: "What is the office number?",
      validate: validateInput
  }
];

const engineerQuestions = [
  {
      type: "input",
      name: "name",
      message: "What is the Engineer's name?",
      validate: validateInput
  },
  {
      type: "input",
      name: "id",
      message: "What is this employee's id?",
      validate: validateInput
  },
  {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
      validate: validateInput
  },
  {
      type: "input",
      name: "github",
      message: "What is the employee's GitHub username?",
      validate: validateInput
  }
];

const InternQuestions = [
  {
      type: "input",
      name: "name",
      message: "What is the Intern's name?",
      validate: validateInput
  },
  {
      type: "input",
      name: "id",
      message: "What is this employee's id?",
      validate: validateInput
  },
  {
      type: "input",
      name: "email",
      message: "What is this employee's email address?",
      validate: validateInput
  },
  {
      type: "input",
      name: "school",
      message: "Which school did this employee attend?",
      validate: validateInput
  }
];



// asking questions function
// function ask() {
//   inquirer.prompt(questions).then((answers) => {
//     output.push(answers.tvShow);
//     if (answers.askAgain) {
//       ask();
//     } else {
//       console.log('Your favorite TV Shows:', output.join(', '));
//     }
//   });
// }

// ask();

// Steve Calla Code

//HOW TO USE THE EMPLOYEE AND ENGINEER CLASS

//INQUIRER PROMPTS = GATHER ENGINEER INFO

//results from inquirer query
// const engineer1 = { name: '1', id: 1, email: '3@engineer.com', github: "engineer" };
// const engineer2 = { name: '2', id: 2, email: 'e3@engineer.com', github: "engineer" };
// const engineer3 = { name: '3', id: 2, email: '3@engineer.com', github: "engineer" };

// //create an engineer class
// const engineerClass1 = new Engineer(engineer1.name, engineer1.id, engineer1.email, engineer1.github);

// const engineerClass2 = new Engineer(engineer2.name, engineer2.id, engineer2.email, engineer2.github);

// const engineerClass3 = new Engineer(engineer3.name, engineer3.id, engineer3.email, engineer3.github);


// let team = [];
// team.push(engineerClass1);
// team.push(engineerClass2);
// team.push(engineerClass3);
// console.log(team);

// // console.log(engineerClass);
// // console.log(engineerClass.getRole());

// const html = render(team);
// console.log(html);