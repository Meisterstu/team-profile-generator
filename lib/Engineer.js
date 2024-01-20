// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Engineer extends Employee {
    constructor(github) {
      super(name, id, email);  // super calls the properties of the parent class
      this.github = github;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return this.Engineer;
      };
}


module.exports = Engineer;

