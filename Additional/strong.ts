// /Check Strong Number

let num2: number = 145;
let temp2: number = num;
let sum2: number = 0;

while (temp2 > 0) {
    let digit = temp2 % 10;
    let fact = 1;

    for (let i = 1; i <= digit; i++) {
        fact = fact * i;
    }

    sum2 = sum2 + fact;
    temp2 = Math.floor(temp2 / 10);
}

if (sum2 == num2) {
    console.log(num2 + " is a Strong Number");
} else {
    console.log(num2 + " is Not a Strong Number");
}