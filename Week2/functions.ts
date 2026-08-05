

import { message } from "../Week4/message.js";
function addition(a: number, b: number): number {
    return a + b;
}
let result = addition(10, 20);
console.log("Sum =", result);

function square2(num: number): number {
    return num * num;
}
let ans = square2(6);
console.log("Square =", ans);

function greet2(name: string): string {
    return "Hello, " + name + "!";
}
let message2 = greet2("Teja");
console.log(message2);