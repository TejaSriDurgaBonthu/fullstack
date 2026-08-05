//Create a Class with a static College Name and a static Method

class Student2 {
    static collegeName: string = "SVECW";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    display(): void {
        console.log("Student Name: " + this.name);
    }
    static showCollege(): void {
        console.log("College Name: " + Student2.collegeName);
    }
}
let student2 = new Student2("Hema");
student2.display();
Student2.showCollege();