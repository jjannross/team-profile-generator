const Employee = require("./employee");

class Engineer extends Employee {
  constructor(name, id, email, username, office, github) {
    super(name, id, email, username, office, );
    this.github = github;
  }

  getGithub() {
    return this.github;
  }

  getRole() {
    return "Engineer";
  }
}

module.exports = Engineer;
