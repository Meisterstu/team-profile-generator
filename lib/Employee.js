// TODO: Write code to define and export the Employee class

class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }
  getName() {
    return this.name;
  };
  getId() {
    return this.id;
  };
  getEmail() {
    return this.email;
  };
  getRole() {
    return 'Employee'
  };
}

// const employee = new Employee ("John, 1, john@email.com");
// console.log(Employee.name); 
// console.log(Employee.id); 
// console.log(Employee.email); 


// set employee to export, available for calling
module.exports = Employee;



