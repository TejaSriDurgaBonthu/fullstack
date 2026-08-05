export namespace StudentInfo {
    export function display() {
        console.log("Welcome to TypeScript Namespace");
    }
}

export class Students {
    display() {
        StudentInfo.display();
    }
}