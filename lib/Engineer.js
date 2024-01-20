// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
      super(name, id, email, );  // super calls the properties of the parent class
      this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return 'Engineer';
      };
}

// set engineer to export, available for calling
module.exports = Engineer;

