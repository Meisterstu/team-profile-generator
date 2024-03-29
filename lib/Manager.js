// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
      super(name, id, email);  // super calls the properties of the parent class
      this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
      return this.officeNumber
    }

    getRole() {
        return 'Manager';
      };
}


// set manager to export, available for calling
module.exports = Manager;

