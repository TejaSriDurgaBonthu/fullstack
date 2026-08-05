"use strict";
//Create a Class with a static College Name and a static Method
class Student2 {
    constructor(name) {
        this.name = name;
    }
    display() {
        console.log("Student Name: " + this.name);
    }
    static showCollege() {
        console.log("College Name: " + Student2.collegeName);
    }
}
Student2.collegeName = "SVECW";
let student2 = new Student2("Hema");
student2.display();
Student2.showCollege();
//# sourceMappingURL=staticCollege.js.map