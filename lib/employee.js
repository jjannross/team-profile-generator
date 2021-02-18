class Employee {
    constructor(name, id, email, office, username) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.office = office;
        this.username = username;
    }

    getName() {
        return this.name
    }

    getId() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return 'Employee'
    }
}

module.exports = Employee;
