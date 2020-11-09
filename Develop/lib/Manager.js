// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, role, email, OfficeNumber) {
        super(name, id, email, role);
        this.OfficeNumber = OfficeNumber;
    }
    getOfficeNumber(){
        return this.OfficeNumber;
    }
}



module.exports = Manager;