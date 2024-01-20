// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
      super(name, id, email);  // super calls the properties of the parent class
      this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return 'Intern';
      };
}


module.exports = Intern;

