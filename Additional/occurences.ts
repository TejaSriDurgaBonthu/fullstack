//Count the Occurrences of Each Element in an Array

let arr3: number[] = [1, 2, 2, 3, 1, 4, 2];

for (let i = 0; i < arr3.length; i++) {
    let count = 1;
    for (let j = i + 1; j < arr3.length; j++) {
        if (arr3[i] == arr3[j]) {
            count++;
        }
    }
    let alreadyCounted = false;
    for (let k = 0; k < i; k++) {
        if (arr3[i] == arr3[k]) {
            alreadyCounted = true;
            break;
        }
    }
    if (!alreadyCounted) {
        console.log(arr3[i] + " = " + count);
    }
}