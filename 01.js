// #1 Palindrome
// Reverse this sentence, and push each word into an array.
// `ibu ratna antar ubi`

// Preparation
let input = 'ibu ratna antar ubi';
let input2 = 'javascript';


// Algorithm
const solution = (input) => { 
   return input.split('').reverse(); 
};

// Execution
console.log("Input:")
console.log(input);
console.log("Output:")
console.log(solution(input).join(''));

// Assertion
input == solution(input).join('') ?
console.log('> Palindrome')
:
console.log('> Bukan Palindrome');

console.log()

// Execution 2
console.log("Input:")
console.log(input2);
console.log("Output:")
console.log(solution(input2).join(''));

// Assertion 2
input2 == solution(input2).join('') ?
console.log('> Palindrome')
:
console.log('> Bukan Palindrome');