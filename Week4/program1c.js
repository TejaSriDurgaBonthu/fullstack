"use strict";
var Employe;
(function (Employe) {
    class Details {
        show(name, id) {
            console.log("Employee Name:", name);
            console.log("Employee ID:", id);
        }
    }
    Employe.Details = Details;
})(Employe || (Employe = {}));
let emp2 = new Employe.Details();
emp2.show("liya", 101);
