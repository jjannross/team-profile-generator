const Employee = require("./employee");

class Manager extends Employee {
  constructor(name, id, email, username, office, officeNumber) {
    super(name, id, email, username, office);
    this.officeNumber = officeNumber;
  }

  getRole() {
    return "Manager";
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;
