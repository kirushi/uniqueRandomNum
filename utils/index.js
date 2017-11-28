exports = module.exports = {};

exports.processNum = (num) => {
    const arr = convertToStringArr(num);
    if (arr.length <= 2) { // if 1 or 2 digits then ignore (padding with 0 breaks rule)
        return false;
    } else if (arr.length === 3) { // pad 0 if only 3 digits
        arr.unshift("0");
    } else if (arr.length > 4) { // ignore if more than 4 digits
        return false;
    }
    return {
        valid: validateArr(arr),
        num: arr.join(""),
    };
}

const validateArr = (numArr) => {
    const TOTAL_COMPARISONS = 3; // 3 possible comparisons e.g. [1,2,3,4] 1 & 2, 2 & 3, 3 & 4.
    let validCombinations = 0;
    numArr.reduce((previousNum, currentNum) => {
        if (isValidNumSequence(parseInt(previousNum, 10), parseInt(currentNum, 10))) { // convert to int for easier manipulation
            validCombinations++; 
        }
        return currentNum;
    });
    return validCombinations === TOTAL_COMPARISONS;
}

// Check if numbers are in sequence
const isValidNumSequence = (previousNum, currentNum) => {
    return !isEqual(previousNum, currentNum) && !isEqual(previousNum, currentNum + 1) && !isEqual(previousNum, currentNum - 1);
}

const isEqual = (firstNum, secondNum) => firstNum === secondNum;

const convertToStringArr = (num) => {
    if (num) {
        return num.toString().split("");
    }
    return [];
}