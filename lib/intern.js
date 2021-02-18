const Employee = require('./employee');

class Intern extends Employee {
    constructor(name, id, email, username, office, school) {
        super (name, id, email, username, office, );
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;
