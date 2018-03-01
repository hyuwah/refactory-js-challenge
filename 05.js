// #5 Play with numbers
// Create row of numbers from 0 to 100. Then group that numbers by:
// even,
// odd,
// numbers multiplies by 5, and
// prime numbers.

// Preparation
let input = [];
for(i=0;i<=100;i++){
    input.push(i);
};

// Algorithm
const solution = (input) => { 
    let groupArray = [];

    let evenGroup = [];
    let oddGroup = [];
    let multiplyBy5Group = [];
    let primeGroup = [];

    input.forEach(num => {
        if(num%2==0){
            evenGroup.push(num);
        }
        if(num%2!=0){
            oddGroup.push(num);
        }
        if(num%5==0){
            multiplyBy5Group.push(num); 
            // 0 is multiple of every positive integer 
            // https://www.beatthegmat.com/stupid-ques-is-0-divisible-by-5-according-to-the-gmat-t40025.html
        }

        // Primality Test
        let isPrime = true;
        for(let i=2; i<num-1;i++){
            if(num%i==0){
                isPrime=false
            }
        }
        if(isPrime) primeGroup.push(num);

    });

    groupArray.push(evenGroup);
    groupArray.push(oddGroup);
    groupArray.push(multiplyBy5Group);
    groupArray.push(primeGroup);

    return groupArray;

};

// Execution
console.log("Input:")
console.log(input.toString());
console.log();
// console.log(solution(input));

// Assertion
console.log('Even Numbers:\n'+solution(input)[0]+'\n');
console.log('Odd Numbers:\n'+solution(input)[1]+'\n');
console.log('Multiply of 5 Numbers:\n'+solution(input)[2]+'\n');
console.log('Prime Numbers:\n'+solution(input)[3]+'\n');

