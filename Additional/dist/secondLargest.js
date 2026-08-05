"use strict";
//Second Largest Number in an Array
let arr1 = [10, 25, 8, 45, 30];
let largest = arr1[0];
let secondLargest = arr1[0];
for (let i = 1; i < arr1.length; i++) {
    if (arr1[i] > largest) {
        secondLargest = largest;
        largest = arr1[i];
    }
    else if (arr1[i] > secondLargest && arr1[i] != largest) {
        secondLargest = arr1[i];
    }
}
console.log("Second Largest Number = " + secondLargest);
//# sourceMappingURL=secondLargest.js.map