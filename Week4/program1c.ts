namespace Employe {
    export class Details {
        show(name: string, id: number): void {
            console.log("Employee Name:", name);
            console.log("Employee ID:", id);
        }
    }
}

let emp2 = new Employe.Details();
emp2.show("liya", 101);