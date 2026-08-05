"use strict";
//Count the Frequency of Characters in a String
let str2 = "hello";
for (let i = 0; i < str2.length; i++) {
    let count = 1;
    if (str2[i] != " ") {
        for (let j = i + 1; j < str2.length; j++) {
            if (str2[i] == str2[j]) {
                count++;
            }
        }
        let alreadyPrinted = false;
        for (let k = 0; k < i; k++) {
            if (str2[i] == str2[k]) {
                alreadyPrinted = true;
                break;
            }
        }
        if (!alreadyPrinted) {
            console.log(str[i] + " = " + count);
        }
    }
}
//# sourceMappingURL=frequency.js.map