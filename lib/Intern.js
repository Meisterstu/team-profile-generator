// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./lib/Employee");

class Intern extends Employee {
    constructor(school) {
      super(name, id, email);  // super calls the properties of the parent class
      this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return this.Intern;
      };
}


module.exports = Intern;

