//Rotate an Array by N Positions

let arr2: number[] = [1, 2, 3, 4, 5];
let n2: number = 2;
let rotatedArray = arr2.slice(n2).concat(arr2.slice(0, n2));
console.log("Rotated Array:", rotatedArray);