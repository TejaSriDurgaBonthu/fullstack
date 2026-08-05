//Create a Student Class with a Constructor and Display Student Details

class Student1 {
    id: number;
    name: string;
    age: number;
    constructor(id: number, name: string, age: number) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log("Student ID: " + this.id);
        console.log("Student Name: " + this.name);
        console.log("Student Age: " + this.age);
    }
}
let student1 = new Student1(101, "Hema", 20);
student1.display();