// #4 Leap year detector Create a function to detect a leap year. If I put 2018,
// the output will be false. But, if I put 2004, the output will be true. You
// can find the rules of leap year through your favorite search engine.

/* From Wikipedia
if (year is not divisible by 4) then (it is a common year)
else if (year is not divisible by 100) then (it is a leap year)
else if (year is not divisible by 400) then (it is a common year)
else (it is a leap year)
*/

// Preparation
let input = 2018;

// Algorithm
const solution = (input) => {
    let isLeapYear;

    if (input % 4 != 0) {
        isLeapYear = false;
    } else if (input % 100 != 0) {
        isLeapYear = true;
    } else if (input % 400 != 0) {
        isLeapYear = false;
    } else {
        isLeapYear = true;
    }

    return isLeapYear;

};

// Execution
console.log("Input: "+input)
console.log("Leap year? "+solution(input));
console.log();

// Assertion
solution(2018) == false
    ? console.log('Test 1 passed: 2018 is not a leap year')
    : console.log('Test 1 not passed: 2018 is not a leap year');
solution(2004) == true
    ? console.log('Test 2 passed: 2004 is a leap year')
    : console.log('Test 2 not passed: 2004 is a leap year');
