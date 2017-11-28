const utils = require("./utils");

const TOTAL_UNIQUE_NUM = 1000;
const MAX_NUM = 9999;
const uniqueNumArr = [];
let count = 0;
while ((uniqueNumArr.length < TOTAL_UNIQUE_NUM) || count >= MAX_NUM) {
    const processedData = utils.processNum(count);
    if (processedData.valid) {
        uniqueNumArr.push(processedData.num);
    }
    count++;
}
console.log(uniqueNumArr);
console.log(`Total unique numbers in array: ${uniqueNumArr.length}`);