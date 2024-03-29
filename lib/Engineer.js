// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.

const Employee = require("../lib/Employee");

class Engineer extends Employee { 
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
    this.role = "Engineer";
  }

  getRole() {
    return this.role;
  }

  getGithub() {
    return this.github;
  }
}

module.exports = Engineer;