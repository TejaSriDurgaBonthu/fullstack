"use strict";
class Employee {
    empId;
    empName;
    department;
    salary;
    constructor(id, name, department, salary) {
        this.empId = id;
        this.empName = name;
        this.department = department;
        this.salary = salary;
    }
    displayDetails() {
        console.log("Employee ID:", this.empId);
        console.log("Employee Name:", this.empName);
        console.log("Department:", this.department);
        console.log("Salary:", this.salary);
    }
    increaseSalary(amount) {
        this.salary += amount;
        console.log("Updated Salary:", this.salary);
    }
    annualSalary() {
        console.log("Annual Salary:", this.salary * 12);
    }
}
let employee = new Employee(201, "Hema", "IT", 50000);
employee.displayDetails();
employee.increaseSalary(5000);
employee.annualSalary();
